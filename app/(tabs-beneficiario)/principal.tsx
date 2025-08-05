import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ProposalCard from '../components/ProposalCard';
import { router } from 'expo-router';

const mockData = [
  { id: '1', title: 'PROPONENTE 1', CNP: '' },
  { id: '2', title: 'PROPONENTE 2', CNP: '' },
  { id: '3', title: 'PROPONENTE 3', CNP: '' },
  { id: '4', title: 'PROPONENTE 4', CNP: '' },
  { id: '5', title: 'PROPONENTE 5', CNP: '' },
];

export default function Principal() {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header userName="André Monteiro" />}
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProposalCard
            title={item.title}
            onPress={() => router.push(`/propostaItem/${item.id}`)}
          />
        )}
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
});
