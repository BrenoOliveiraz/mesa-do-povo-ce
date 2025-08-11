import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';





const mockCandidaturas = [
  {
    id: '1',
    titulo: 'Caixa de abacate 5',
    status: 'NEGADO',
    data: '29/10/2024 16:00 - 17:00',
  },
  {
    id: '2',
    titulo: 'Teste Abacaxi',
    status: 'PENDENTE',
    data: '30/10/2024 16:00 - 17:00',
  },

];

export default function MinhasCandidaturas() {
  const [candidaturas, setCandidaturas] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchCandidaturas() {
      try {
        const subcollectionRef = collection(db, 'consumidores', '01976229000129', 'CE2025020001');
        const querySnapshot = await getDocs(subcollectionRef);

    
        let todasCandidaturas = [];

        querySnapshot.forEach(doc => {
          const data = doc.data();
              console.log(data)
   
          if (Array.isArray(data.produtosDoados)) {
          
            data.produtosDoados.forEach((produto, index) => {
              todasCandidaturas.push({
                id: `${doc.id}_${index}`,
                ...produto
              });
            });
          }
        });

        setCandidaturas(todasCandidaturas);
      } catch (error) {
        console.error("Erro ao buscar candidaturas:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCandidaturas();

  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.titulo} (1x)</Text>
        <View style={[
          styles.statusTag,
          { backgroundColor: item.status === 'NEGADO' ? '#E63946' : '#F1C40F' },
        ]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      <Text style={styles.data}> {item.data}</Text>
    </View>
  );

  return (
    <FlatList
      data={mockCandidaturas}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  data: {
    color: '#555',
    fontSize: 14,
    marginTop: 4,
  },
  statusTag: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
