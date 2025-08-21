import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;

export default function CardCarrossel({ produto, quantidade, descricao, validade, peso }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{produto || produto}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Quantidade:</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{`${quantidade}`}</Text>
        </View>
      </View>

      {peso && (
        <View style={styles.infoRow}>
          <Text style={styles.label}>Peso:</Text>
          <Text style={styles.value}>{peso}</Text>
        </View>
      )}

      {validade && (
        <View style={styles.infoRow}>
          <Text style={styles.label}>Validade:</Text>
          <Text style={styles.value}>{validade}</Text>
        </View>
      )}
      {descricao && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.description}>{descricao}</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 40,
    width: CARD_WIDTH,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#555',
  },
  valueContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111',
    flexShrink: 1,
  },
  descriptionContainer: {
    marginTop: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
