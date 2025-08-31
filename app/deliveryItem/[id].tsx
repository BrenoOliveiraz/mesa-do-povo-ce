import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useUser } from '../contexts/UserContext';

export default function DeliveryDetalhe() {
  const { id, data, hora, titulo, status } = useLocalSearchParams();
  const [entrega, setEntrega] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { userData, loadingUser } = useUser();

  useEffect(() => {
    const fetchEntrega = async () => {
      if (!userData || !id) return;

      setLoading(true);
      try {
        const docRef = doc(db, 'entregasRealizadas', id as string);

        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          const data = snapshot.data();
          if (data.cnpj !== userData.cnpj) {
            console.warn('Acesso negado à entrega');
            setEntrega(null);
          } else {
            setEntrega(data);
          }
        } else {
          setEntrega(null);
        }
      } catch (error) {
        console.error('Erro ao buscar entrega:', error);
        setEntrega(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEntrega();
  }, [id, userData]);


  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!entrega) {
    return (
      <View style={styles.center}>
        <Text>Entrega não encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.info}>Data: {data}</Text>
      <Text style={styles.info}>Hora: {hora}</Text>
      <Text style={styles.info}>Status: {status}</Text>


      <View style={styles.card}>
        <Text style={styles.cardTitle}>Detalhes da entrega:</Text>
        <Text style={styles.cardContent}>Produto: {entrega.produto}</Text>
        <Text style={styles.cardContent}>Quantidade: {entrega.quantidade ?? 0}</Text>
        <Text style={styles.cardContent}>Data Entrega: {entrega.dataEntrega || 'Não informada'}</Text>
        <Text style={styles.cardContent}>Hora Entrega: {entrega.horaEntrega || 'Não informada'}</Text>
        <Text style={styles.cardContent}>Observação: {entrega.observacao || '-'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    marginBottom: 6,
  },
  card: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#333',
  },
});
