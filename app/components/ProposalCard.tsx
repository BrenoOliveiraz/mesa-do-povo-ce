import React from 'react';
import { View, Text, StyleSheet, Pressable, PressableProps } from 'react-native';

import ProposalItem from './ProposalItem';

interface ProposalCardProps extends PressableProps {
  title: string;
}

const proposalItem = [
  { id: '1', item: 'Banana', quantidade: '7', unidade: 'kg', validade: '10/08/2025' },
  { id: '2', item: 'Milho', quantidade: '2', unidade: 'kg', validade: '12/08/2025' },
  { id: '3', item: 'Feijão', quantidade: '10', unidade: 'kg', validade: '15/08/2025' },
  { id: '4', item: 'Arroz', quantidade: '5', unidade: 'kg', validade: '20/08/2025' },
];

export default function ProposalCard({ title, ...rest }: ProposalCardProps) {
  const itemsToShow = proposalItem.slice(0, 3);
  const hasMore = proposalItem.length > 3;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        { opacity: pressed ? 0.8 : 1 },
      ]}
      {...rest}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        {itemsToShow.map((data) => (
          <ProposalItem
            key={data.id}
            item={data.item}
            quantidade={data.quantidade}
            unidade={data.unidade}
            validade={data.validade}
          />
        ))}

        {hasMore && (
          <Pressable onPress={rest.onPress} style={styles.button}>
            <Text style={styles.buttonText}>Ver proposta completa</Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  button: {
    marginTop: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#007BFF',
    alignItems: 'center',
  },
  buttonText: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
