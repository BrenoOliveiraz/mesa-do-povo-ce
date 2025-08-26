import { db } from "@/app/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";



export async function getProdutosDoados(id, cnpj) {
  if (!id || !cnpj) return null;

  const docRef = doc(db, 'tpaf', id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  const data = docSnap.data();
  const codigoProjeto = data.numTpaf.replace(/\//g, '');

  const produtosRef = doc(db, 'consumidores', cnpj, codigoProjeto, 'tpafRef');
  const produtosSnap = await getDoc(produtosRef);

  let produtosDoados = [];
  if (produtosSnap.exists()) {
    produtosDoados = produtosSnap.data().produtosDoados || [];
  }

  const produtosComEspacos = [
    { isSpacer: true },
    ...produtosDoados,
    { isSpacer: true },
  ];

  return {
    ...data,
    produtos: produtosComEspacos,
  };
}
