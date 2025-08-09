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
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function ConfirmarEntrega() {
  const { produtoId, produto, quantidade: quantidadeParam } = useLocalSearchParams();

  const [dataEntrega, setDataEntrega] = useState("");
  const [horaEntrega, setHoraEntrega] = useState("");
  const [quantidade, setQuantidade] = useState(quantidadeParam || "");
  const [observacao, setObservacao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [produtoInfo, setProdutoInfo] = useState(null);

  useEffect(() => {
    if (produto) {
      try {
        const parsedProduto = JSON.parse(produto);
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

    try {
      await addDoc(collection(db, "entregas"), {
        produtoId,
        produto: produtoInfo,
        dataEntrega,
        horaEntrega,
        quantidade: Number(quantidade),
        observacao,
        imagem,
        criadoEm: Timestamp.now(),
      });

      Alert.alert("Sucesso", "Entrega registrada com sucesso!");
      router.back();
    } catch (error) {
      console.error("Erro ao salvar entrega:", error);
      Alert.alert("Erro", "Não foi possível registrar a entrega.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>📦 Confirmação de Entrega</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Produto</Text>
        <Text style={styles.cardText}>ID: {produtoId}</Text>
        {produtoInfo?.nome && <Text style={styles.cardText}>Nome: {produtoInfo.nome}</Text>}
        {produtoInfo?.descricao && (
          <Text style={styles.cardText}>Descrição: {produtoInfo.descricao}</Text>
        )}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Data da entrega (dd/mm/aaaa)"
        value={dataEntrega}
        onChangeText={setDataEntrega}
      />

      <TextInput
        style={styles.input}
        placeholder="Hora da entrega (hh:mm)"
        value={horaEntrega}
        onChangeText={setHoraEntrega}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade entregue"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Observações"
        value={observacao}
        onChangeText={setObservacao}
        multiline
      />

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
    fontSize: 16,
    marginBottom: 5,
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
});
