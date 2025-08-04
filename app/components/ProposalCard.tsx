

import React from 'react';
import { View, Text, StyleSheet, Pressable, PressableProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface OfferCardProps extends PressableProps {
  title: string;
  validUntil: string;
}

    const proposalItem = [
     {id: '1', item: 'Banana', quantidade: '7', unidade: 'kg', validade: 'xx/xx/xxxx'},
     {id: '2', item: 'Milho', quantidade: '2', unidade: 'kg', validade: 'xx/xx/xxxx'},
     {id: '3', item: 'Feijão', quantidade: '10', unidade: 'kg', validade: 'xx/xx/xxxx'},
     {id: '4', item: 'Arroz', quantidade: '9', unidade: 'kg', validade: 'xx/xx/xxxx'},
     {id: '5', item: 'Trigo', quantidade: '6', unidade: 'kg', validade: 'xx/xx/xxxx'},

    ]

export default function OfferCard({ title, validUntil, ...rest }: OfferCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        { opacity: pressed ? 0.75 : 1 },
      ]}
      {...rest}
    >
      <View style={styles.iconContainer}>
        <MaterialIcons name="restaurant-menu" size={24} color="#3A5BA0" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.validity}>
          <MaterialIcons name="calendar-today" size={14} color="#888" />
          <Text style={styles.date}>Validade: {validUntil}</Text>
        </View>
        <View style={styles.validity}>
          <MaterialIcons name="calendar-today" size={14} color="#888" />
          <Text style={styles.date}>Validade: {validUntil}</Text>
        </View>
        <View style={styles.validity}>
          <MaterialIcons name="calendar-today" size={14} color="#888" />
          <Text style={styles.date}>Validade: {validUntil}</Text>
        </View>
        <View style={styles.validity}>
          <MaterialIcons name="calendar-today" size={14} color="#888" />
          <Text style={styles.date}>Validade: {validUntil}</Text>
        </View>
      </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  iconContainer: {
    justifyContent: 'center',
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
  },
  validity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  date: {
    fontSize: 13,
    color: '#555',
    marginLeft: 4,
  },
});
