import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Produto = {
  id: string;
  nome: string;
  validade: string;
  quantidade: number;
};

type Props = {
  produto: Produto;
};

export default function CardProduto({ produto }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <MaterialIcons name="restaurant-menu" size={24} color="#FF9A01" />
        <Text style={styles.nome}>{produto.nome}</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="date-range" size={18} color="#555" />
        <Text style={styles.infoText}>Validade: {produto.validade}</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="inventory-2" size={18} color="#555" />
        <Text style={styles.infoText}>Quantidade: {produto.quantidade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D1D1D',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#444',
  },
});
