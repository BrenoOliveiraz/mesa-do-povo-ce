// importarConsumidores.js
const fs = require('fs');
const csv = require('csv-parser');
const { doc, setDoc } = require('firebase/firestore');
const { db } = require('./app/firebaseConfig'); // ajuste o caminho se necessário

async function importarCSV() {
  const dadosAgrupados = {};

  try {
    // Promise para aguardar o fim da leitura do CSV
    await new Promise((resolve, reject) => {
      fs.createReadStream('default.csv')
        .pipe(csv({
          separator: ',',
          mapHeaders: ({ header }) => header.trim()
        }))
        .on('data', (row) => {
          // Log para depuração, pode remover depois
          console.log('Linha CSV:', row);

          const numTpaf = row['Num TPAF']?.trim();
          const nomeConsumidor = row['Nome Consumidor']?.trim();
          const cnpjConsumidor = row['CNPJ Consumidor']?.trim();
          const produto = row['Produto']?.trim();
          const quantidade = parseFloat(row['Qtd Produto (Kg)']?.replace(',', '.')) || 0;

          if (!cnpjConsumidor || !numTpaf) return;

          const chave = `${cnpjConsumidor}||${numTpaf}`;

          if (!dadosAgrupados[chave]) {
            dadosAgrupados[chave] = {
              nomeConsumidor,
              numTpaf,
              produtos: []
            };
          }

          dadosAgrupados[chave].produtos.push({ produto, quantidade });
        })
        .on('end', () => {
          console.log('📦 Leitura do CSV finalizada.');
          resolve();
        })
        .on('error', (err) => {
          console.error('❌ Erro ao ler o arquivo CSV:', err);
          reject(err);
        });
    });

    console.log('📦 Iniciando importação para o Firestore...');

    for (const chave in dadosAgrupados) {
      const [cnpj, tpaf] = chave.split('||');

      try {
        // A referência correta deve ter 3 parâmetros: coleção, documento, subcoleção OU documento
        // Supondo que "tpaf" seja documento dentro de subcoleção do consumidor (cnpj)
        // Se quiser um documento dentro de uma subcoleção, use:
        // const ref = doc(db, 'consumidores', cnpj, 'tpafs', tpaf);

        // Caso tpaf seja documento direto dentro da coleção 'consumidores' concatenando cnpj e tpaf:
        // const ref = doc(db, 'consumidores', `${cnpj}_${tpaf}`);

        // Vou supor que queira salvar em uma subcoleção 'tpafs' dentro do documento consumidor:
        const ref = doc(db, 'consumidores', cnpj, 'tpafs', tpaf);

        await setDoc(ref, dadosAgrupados[chave]);

        console.log(`✅ Salvo: ${dadosAgrupados[chave].nomeConsumidor} - ${tpaf}`);
      } catch (error) {
        console.error(`❌ Erro ao salvar ${chave}:`, error.message);
      }
    }

    console.log('🚀 Importação concluída!');
  } catch (error) {
    console.error('❌ Erro geral na importação:', error);
  }
}

importarCSV();
