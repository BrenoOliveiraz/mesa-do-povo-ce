import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import OfferCard from '../components/CardOfertas';
import { router } from 'expo-router';

const mockData = [
  { id: '1', title: 'Caixa de cenouras', validUntil: '25/11/2024' },
  { id: '2', title: 'Abacate', validUntil: '18/11/2024' },
  { id: '3', title: 'Caixas de creme de leite', validUntil: '21/11/2024' },

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