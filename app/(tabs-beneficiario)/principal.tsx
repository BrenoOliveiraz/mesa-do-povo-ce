import { View, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProposalCard from '../components/ProposalCard';
import { router } from 'expo-router';
import { getAllTpaf } from '../utils/fireBaseDados/getAlltpafs';

export default function Principal() {
  const [tpafs, setTpafs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTpafs = async () => {
      const dados = await getAllTpaf();
      setTpafs(dados.slice(0, 20));
      setLoading(false);
    };

    fetchTpafs();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header userName="André Monteiro" />}
        data={tpafs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <ProposalCard
            title={item.nomeProponente}
            subTitle={item.cnpjProponente}
            onPress={() => {
         
              router.push(`/propostalPage/${item.id}`);
            }}
          />

        )}

        contentContainerStyle={{ paddingBottom: 20 }}

        // Props para performance
        initialNumToRender={10}
        maxToRenderPerBatch={20}
        windowSize={5}
        removeClippedSubviews={true}
      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
});
