import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardProduto from '../components/ProductCard';
import ActionButton from '../components/ActionButton';
import { router } from 'expo-router';


type Produto = {
  id: string;
  nome: string;
  validade: string;
  quantidade: number;
};

export default function DoadorScreen() {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState<Produto[]>([
    {
      id: '1',
      nome: 'Banana prata',
      validade: '28/07/2025',
      quantidade: 10,
    },
    {
      id: '2',
      nome: 'Feijão verde',
      validade: '01/08/2025',
      quantidade: 25,
    },
  ]);

  const handleAddProduto = () => {
    navigation.navigate('AddProdutos' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos ofertados</Text>

      {produtos.length === 0 ? (
        <TouchableOpacity style={styles.addButton} onPress={handleAddProduto}>
          <Text style={styles.addButtonText}>+ Cadastrar Produto</Text>
        </TouchableOpacity>
      ) : (
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardProduto produto={item} />}
          contentContainerStyle={styles.lista}
        />
      )}
      <ActionButton title='Adicionar produto' onPress={()=> router.push('/addProduto')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
    color: '#1D1D1D',
  },
  addButton: {
    backgroundColor: '#FF9A01',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  lista: {
    gap: 12,
    paddingBottom: 32,
  },
});
