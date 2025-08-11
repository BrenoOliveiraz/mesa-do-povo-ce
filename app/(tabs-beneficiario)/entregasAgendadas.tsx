import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // ajuste o caminho se necessário

export default function MinhasCandidaturasScreen() {
  const [entregas, setEntregas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntregas = async () => {
      try {
        const entregasRef = collection(db, 'entregasRealizadas', '01976229000129', 'entregas');
        const snapshot = await getDocs(entregasRef);

        const lista = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            data: data.dataEntrega || 'Data não informada',
            hora: data.horaEntrega || 'Hora não informada',
            titulo: `${data.produto || 'Produto desconhecido'} (${data.quantidade || 0}x)`,
            status: 'CONFIRMADA', 
            corStatus: '#4CAF50',
          };
        });

        setEntregas(lista);
      } catch (error) {
        console.error('Erro ao buscar entregas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntregas();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Entregas Agendadas</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const confirmadas = entregas.filter(item => item.status === 'CONFIRMADA');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entregas Agendadas</Text>

      {confirmadas.length === 0 ? (
        <Text style={styles.emptyText}>Nenhuma entrega confirmada até o momento.</Text>
      ) : (
        <FlatList
          data={confirmadas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <View style={styles.card}>
                <Text style={styles.data}>{item.data} {item.hora}</Text>
                <View style={styles.cardContent}>
                  <Text style={styles.titulo}>{item.titulo}</Text>
                  <View style={[styles.statusBox, { backgroundColor: item.corStatus }]}>
                    <Text style={styles.statusText}>{item.status}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 32,
  },
  cardWrapper: {
    marginBottom: 16,
  },
  data: {
    fontSize: 14,
    color: '#4A4A4A',
    marginBottom: 8,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    flex: 1,
    paddingRight: 8,
  },
  statusBox: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  statusText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
});
