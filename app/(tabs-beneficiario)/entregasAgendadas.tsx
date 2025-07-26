import { View, Text, StyleSheet, FlatList } from 'react-native';

const candidaturas = [
  {
    id: '1',
    data: '29/10/2024 16:00 - 17:00',
    titulo: 'Caixa de abacate 5 (1x)',
    status: 'CONFIRMADA',
    corStatus: '#4CAF50', 
  },
  {
    id: '2',
    data: '30/10/2024 16:00 - 17:00',
    titulo: 'Teste Abacaxi (1x)',
    status: 'PENDENTE',
    corStatus: '#FFEB3B', 
  },
  {
    id: '3',
    data: '31/10/2024 20:00 - 22:00',
    titulo: 'Teste Banana (1x)',
    status: 'CONFIRMADA',
    corStatus: '#4CAF50',
  },
];

export default function MinhasCandidaturasScreen() {
  const confirmadas = candidaturas.filter(item => item.status === 'CONFIRMADA');

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
                <Text style={styles.data}>{item.data}</Text>
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
