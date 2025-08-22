import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 
import { useUser } from '../contexts/UserContext';
import DeliveryCard from '../components/DeliveryCard';


export default function MinhasCandidaturasScreen() {
  const [entregas, setEntregas] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userData } = useUser();

  useEffect(() => {
    const fetchEntregas = async () => {
      try {
        const entregasRef = collection(db, 'entregasRealizadas', userData.cnpj, 'entregas');
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
        <Text style={styles.title}>Entregas realizadas</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const confirmadas = entregas.filter(item => item.status === 'CONFIRMADA');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entregas realizadas</Text>

      {confirmadas.length === 0 ? (
        <Text style={styles.emptyText}>Nenhuma entrega confirmada até o momento.</Text>
      ) : (
        <FlatList
          data={confirmadas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DeliveryCard 
              id={item.id} 
              data={item.data}
              hora={item.hora}
              titulo={item.titulo}
              status={item.status}
              corStatus={item.corStatus}
            />
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
});
