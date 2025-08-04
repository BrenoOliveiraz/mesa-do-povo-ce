import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ProposalItemProps {
  item: string;
  quantidade: string;
  unidade: string;
  validade: string;
}

const ProposalItem = ({ item, quantidade, unidade, validade }: ProposalItemProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <MaterialIcons name="shopping-cart" size={18} color="#888" />
        <Text style={styles.itemText}>{item}</Text>
      </View>
      <Text style={styles.cell}>{quantidade} {unidade}</Text>
      <Text style={[styles.cell, styles.validade]}>{validade}</Text>
    </View>
  );
};

export default ProposalItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#333',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  validade: {
    color: '#FF5C5C',
    fontWeight: '500',
  },
});
