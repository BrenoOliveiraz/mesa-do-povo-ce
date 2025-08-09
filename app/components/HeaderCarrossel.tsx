import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderCarrossel({ nome, cnpj, tpaf }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{nome}</Text>
      <Text style={styles.headerSubtitle}>CNPJ: {cnpj}</Text>
      <Text style={styles.headerSubtitle}>TPAF: {tpaf}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#023047',
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#c8e6c9',
    marginTop: 2,
  },
});
