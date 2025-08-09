import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;

export default function CardCarrossel({ produto, quantidade }) {
  return (
    <View style={styles.card}>
      <Text style={styles.produto}>{produto}</Text>
      <Text style={styles.quantidade}>Quantidade: {quantidade}kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginHorizontal: 10,
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: CARD_WIDTH,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  produto: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  quantidade: {
    fontSize: 18,
    color: '#555',
  },
});
