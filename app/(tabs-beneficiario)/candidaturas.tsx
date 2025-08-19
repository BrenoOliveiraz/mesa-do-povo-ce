import { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator } from 'react-native';

import ProposalCard from '../components/ProposalCard';
import Header from '../components/Header';
import { getPropostasDoConsumidor } from '../utils/fireBaseDados/getUserTpaf';
import { router } from 'expo-router';
import { useUser } from '../contexts/UserContext';

export default function MinhasCandidaturas() {
  const [propostas, setPropostas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { userData, loadingUser } = useUser();


  useEffect(() => {
    const fetchPropostas = async () => {
      try {
        const cnpj = '01976229000129';
        const propostasDoUsuario = await getPropostasDoConsumidor(cnpj);
        setPropostas(propostasDoUsuario);
      } catch (err) {
        console.error('Erro ao carregar propostas:', err);
        setError('Erro ao carregar suas propostas.');
      } finally {
        setLoading(false);
      }
    };

    fetchPropostas();
  }, []);


  if (loadingUser || loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Header userName={userData?.nome || "Usuário"} />
      <FlatList
        data={propostas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProposalCard
            title={item.titulo || item.nomeProponente || 'Sem título'}
            subTitle={item.status || item.cnpjProponente || 'Sem status'}
            onPress={() => {

              router.push(`/propostalPage/${item.id}`);
            }}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Você não está participando de nenhuma proposta.</Text>}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});
