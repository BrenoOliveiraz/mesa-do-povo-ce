
import { db } from "@/app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getAllTpaf = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "tpaf"));
    const documentos = [];

    querySnapshot.forEach((doc) => {
      documentos.push({ id: doc.id, ...doc.data() });
    });

    return documentos;
  } catch (error) {
    console.error("Erro ao buscar documentos da coleção tpaf:", error);
    return [];
  }
};