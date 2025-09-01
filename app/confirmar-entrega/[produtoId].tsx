import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { collection, addDoc, Timestamp, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useUser } from "../contexts/UserContext";
import { getDataHoraAtual } from "../utils/getDataHora";

export default function ConfirmarEntrega() {
const { produtoId, produto, quantidade: quantidadeParam, cnpj, codigoProjeto } = useLocalSearchParams();


  const [dataEntrega, setDataEntrega] = useState("");
  const [horaEntrega, setHoraEntrega] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [observacao, setObservacao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [produtoInfo, setProdutoInfo] = useState(null);

  const { userData, loadingUser } = useUser();

  useEffect(() => {
    const { data, hora } = getDataHoraAtual();
    setDataEntrega(data);
    setHoraEntrega(hora);
  }, []);

  useEffect(() => {
    if (produto) {
      try {
        const parsedProduto = JSON.parse(produto);
        console.log("Produto recebido:", parsedProduto); 
        setProdutoInfo(parsedProduto);
      } catch (error) {
        console.warn("Erro ao fazer parse do produto:", error);
      }
    }
  }, [produto]);

  const escolherImagem = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const salvarEntrega = async () => {
    if (!produtoId) {
      Alert.alert("Erro", "Produto não identificado.");
      return;
    }

    if (!userData?.cnpj) {
      Alert.alert("Erro", "Usuário não autenticado.");
      return;
    }

    try {
     const produtoDocRef = doc(db, "consumidores", userData.cnpj, codigoProjeto, "tpafRef");
      const snap = await getDoc(produtoDocRef);
      if (!snap.exists()) throw new Error("Documento não encontrado");

      let produtos = snap.data().produtosDoados || [];

      const produtoAtual = produtos.find(p => p.produtoId === produtoId);
      if (!produtoAtual) {
        Alert.alert("Erro", "Produto não encontrado na lista de doações.");
        return;
      }

      const quantidadeAnterior = Number(produtoAtual.quantidadeEntregue || 0);
      const total = Number(produtoAtual.quantidade || 0);
      const quantidadeNova = Number(quantidade);

      if (quantidadeAnterior + quantidadeNova > total) {
        Alert.alert(
          "Quantidade inválida",
          `A quantidade entregue (${quantidadeAnterior + quantidadeNova} kg) ultrapassa o total disponível (${total} kg).`
        );
        return;
      }

      const entregasRef = collection(db, "entregasRealizadas");
      await addDoc(entregasRef, {
        cnpj: userData.cnpj,
        produtoId,
        produto: produtoInfo,
        dataEntrega,
        horaEntrega,
        quantidade: quantidadeNova,
        observacao,
        imagem,
        criadoEm: Timestamp.now(),
      });

      produtos = produtos.map((p) => {
        if (p.produtoId === produtoId) {
          const novaQuantidade = quantidadeAnterior + quantidadeNova;
          const foiEntregueTudo = novaQuantidade >= total;

          return {
            ...p,
            quantidadeEntregue: novaQuantidade,
            entregue: foiEntregueTudo,
          };
        }
        return p;
      });

      await updateDoc(produtoDocRef, { produtosDoados: produtos });

      Alert.alert("Sucesso", "Entrega registrada com sucesso!");
      router.back();
    } catch (error) {
      console.error("Erro ao salvar entrega:", error);
      Alert.alert("Erro", "Não foi possível registrar a entrega.");
    }
  };

  if (loadingUser) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text>Carregando dados do usuário...</Text>
      </View>
    );
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>📦 Confirmação de Entrega</Text>

   
      <View style={styles.card}>
  
        {produtoInfo?.nome && <Text style={styles.cardText}>Produto: {produtoInfo.nome}</Text>}
        {produtoInfo?.descricao && (
          <Text style={styles.cardText}>Descrição: {produtoInfo.descricao}</Text>
        )}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Data da Entrega</Text>
        <TextInput
          style={[styles.input, styles.inputDisabledText]}
          placeholder="Data da entrega (dd/mm/aaaa)"
          value={dataEntrega}
          editable={false}
          selectTextOnFocus={false}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Hora da Entrega</Text>
        <TextInput
          style={[styles.input, styles.inputDisabledText]}
          placeholder="Hora da entrega (hh:mm)"
          value={horaEntrega}
          editable={false}
          selectTextOnFocus={false}
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Quantidade Entregue (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade entregue sem pontos"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Observações</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Observações"
          value={observacao}
          onChangeText={setObservacao}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.buttonOutline} onPress={escolherImagem}>
        <Text style={styles.buttonOutlineText}>📷 Tirar Foto</Text>
      </TouchableOpacity>

      {imagem && (
        <Image source={{ uri: imagem }} style={styles.imagemPreview} resizeMode="cover" />
      )}

      <TouchableOpacity style={styles.button} onPress={salvarEntrega}>
        <Text style={styles.buttonText}>✅ Confirmar Entrega</Text>
      </TouchableOpacity>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
    color: "#2e7d32",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#2e7d32",
    textAlign: 'center',
    marginBottom: 20,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  inputDisabledText: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2e7d32",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonOutline: {
    borderColor: "#2e7d32",
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#e8f5e9",
  },
  buttonOutlineText: {
    color: "#2e7d32",
    fontWeight: "bold",
    fontSize: 16,
  },
  imagemPreview: {
    width: "100%",
    height: 200,
    marginTop: 15,
    borderRadius: 10,
  },
  inputGroup: {
    marginBottom: 12,
  },

  label: {
    fontWeight: "bold",
    marginBottom: 6,
    color: "#2e7d32",
    fontSize: 14,
  },

});
