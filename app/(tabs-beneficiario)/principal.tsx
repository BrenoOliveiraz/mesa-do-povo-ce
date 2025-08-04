import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import OfferCard from '../components/ProposalCard';
import { router } from 'expo-router';

const mockData = [
  { id: '1', title: 'PROPOSTA 1', validUntil: '25/11/2024' },
  { id: '2', title: 'PROPOSTA 2', validUntil: '18/11/2024' },
  { id: '3', title: 'PROPOSTA 3', validUntil: '21/11/2024' },

];

export default function Principal() {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header userName="André Monteiro" />}
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OfferCard
            title={item.title}
            validUntil={item.validUntil}
            onPress={() => router.push(`/oferta/${item.id}`)}

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
    backgroundColor: '#F9F9F9', 
  },
});