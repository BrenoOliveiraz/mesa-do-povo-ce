import { db } from "@/app/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const getProdutosDoados = async (cnpj, codigoProjeto) => {
  try {
 
    const tpafRefDoc = doc(db, "consumidores", cnpj, codigoProjeto, "tpafRef");

    const docSnap = await getDoc(tpafRefDoc);

    if (docSnap.exists()) {
      const data = docSnap.data();

      return data.produtosDoados || [];
    } else {
      console.warn("Documento tpafRef não encontrado.");
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar produtosDoados:", error);
    return [];
  }
};
