import { db } from '@/app/firebaseConfig';
import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

export const getPropostasDoConsumidor = async (cnpj) => {
  console.log("🔍 Buscando propostas para CNPJ:", cnpj);

  try {
    const q = query(collection(db, "propostaConsumidor"), where("consumidorId", "==", cnpj));
    const relacoesSnapshot = await getDocs(q);

    if (relacoesSnapshot.empty) {
      return [];
    }

    const relacoes = relacoesSnapshot.docs.map(doc => doc.data());
    console.log("📄 Relações encontradas:", relacoes.length);

    const propostasPromises = relacoes.map(async (rel, index) => {
      const origem = String(rel.origem || "");
      const propostaId = String(rel.propostaId || "");

      if (!origem || !propostaId) {
        return null;
      }

      try {
        const propostaRef = doc(db, origem, propostaId);
        const propostaDoc = await getDoc(propostaRef);

        if (propostaDoc.exists()) {
          return {
            id: propostaDoc.id,
            origem,
            ...propostaDoc.data(),
          };
        } else {
          return null;
        }
      } catch (err) {
        return null;
      }
    });

    const propostas = (await Promise.all(propostasPromises)).filter(Boolean);
    return propostas;
  } catch (error) {
    return [];
  }
};
