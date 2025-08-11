import { db } from '@/app/firebaseConfig';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';



export const getPropostasDoConsumidor = async (cnpj) => {
  const q = query(collection(db, 'propostaConsumidor'), where('consumidorId', '==', cnpj));
  const relacoesSnapshot = await getDocs(q);
  

  const relacoes = relacoesSnapshot.docs.map(doc => doc.data());
    console.log(relacoes)
  const propostas = [];

  for (const rel of relacoes) {
    const propostaRef = doc(db, rel.origem, rel.propostaId);
    const propostaDoc = await getDoc(propostaRef);

    if (propostaDoc.exists()) {
      propostas.push({
        id: propostaDoc.id,
        origem: rel.origem,
        ...propostaDoc.data(),
      });
    }
  }

  return propostas;
};
