// import { db } from '@/app/firebaseConfig';
// import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';



// export const getPropostasDoConsumidor = async (cnpj) => {
//   const q = query(collection(db, 'propostaConsumidor'), where('consumidorId', '==', cnpj));
//   const relacoesSnapshot = await getDocs(q);
  

//   const relacoes = relacoesSnapshot.docs.map(doc => doc.data());
   
//   const propostas = [];

//   for (const rel of relacoes) {
//     const propostaRef = doc(db, rel.origem, rel.propostaId);
//     const propostaDoc = await getDoc(propostaRef);

//     if (propostaDoc.exists()) {
//       propostas.push({
//         id: propostaDoc.id,
//         origem: rel.origem,
//         ...propostaDoc.data(),
//       });
//     }
//   }

//   return propostas;
// };


import { db } from '@/app/firebaseConfig';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';


export const getPropostasDoConsumidor = async (cnpj) => {
  console.log("Buscando propostas para CNPJ:", cnpj);

  const q = query(
    collection(db, "propostaConsumidor"),
    where("consumidorId", "==", cnpj)
  );

  const relacoesSnapshot = await getDocs(q);
  console.log("Relações encontradas:", relacoesSnapshot.size);

  const relacoes = relacoesSnapshot.docs.map((doc) => doc.data());
  console.log("Relacoes:", relacoes);

  const propostas = [];

  for (const rel of relacoes) {
    // segurança: remove espaços e garante string
    const origem = String(rel.origem || "").trim();
    const propostaId = String(rel.propostaId || "").trim();

    if (!origem || !propostaId) {
      console.warn("Relação inválida:", rel);
      continue;
    }

    console.log("Buscando proposta:", origem, propostaId);

    try {
      const propostaRef = doc(db, origem, propostaId);
      const propostaDoc = await getDoc(propostaRef);

      if (propostaDoc.exists()) {
        console.log("Proposta encontrada:", propostaDoc.id);
        propostas.push({
          id: propostaDoc.id,
          origem,
          ...propostaDoc.data(),
        });
      } else {
        console.warn("Proposta não encontrada:", origem, propostaId);
      }
    } catch (err) {
      console.error("Erro ao buscar proposta:", origem, propostaId, err);
    }
  }

  return propostas;
};
