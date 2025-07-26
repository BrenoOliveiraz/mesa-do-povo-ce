import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable } from 'react-native';

export default function OfertaDetalhe() {
  const { id } = useLocalSearchParams();

  // Mock de dados (para substituir pelo Firestore futuramente)
  const oferta = {
    id,
    titulo: 'Caixa de cenouras',
    fornecedor: 'Associação Esperança Viva',
    produto: 'CENOURA ORGÂNICA - 5KG',
    quantidade: 3,
    validade: '20/11/2024',
    peso: '15.00 kg',
    volume: '10.00 L',
    observacoes: 'Direto da horta, sem agrotóxicos.',
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <View style={styles.iconBox}>
            <MaterialCommunityIcons name="food-apple" size={40} color="#3A5BA0" />
          </View>

          <Text style={styles.title}>{oferta.titulo}</Text>

          <View style={styles.row}>
            <FontAwesome name="building" size={16} color="#444" />
            <Text style={styles.text}>{oferta.fornecedor}</Text>
          </View>

          <Text style={styles.section}>Produto</Text>
          <Text style={styles.value}>{oferta.produto}</Text>

          <Text style={styles.section}>Quantidade Disponível</Text>
          <Text style={styles.value}>{oferta.quantidade}</Text>

          <Text style={styles.section}>Validade</Text>
          <Text style={styles.value}>{oferta.validade}</Text>

          <View style={styles.flexRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.section}>Peso</Text>
              <Text style={styles.value}>{oferta.peso}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.section}>Volume</Text>
              <Text style={styles.value}>{oferta.volume}</Text>
            </View>
          </View>

          <Text style={styles.section}>Observações</Text>
          <Text style={styles.value}>{oferta.observacoes}</Text>
        </View>
      </ScrollView>

      <Pressable style={styles.buttonWrapper} onPress={() => { /* ação futura */ }}>
        <LinearGradient
          colors={['#4A7DFF', '#335FD4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Feather name="check-circle" size={18} color="#fff" />
          <Text style={styles.buttonText}>Candidatar-se</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FF',
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  iconBox: {
    backgroundColor: '#E6EEFA',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 6,
  },
  text: {
    fontSize: 15,
    color: '#444',
  },
  section: {
    fontSize: 13,
    color: '#777',
    marginBottom: 4,
    marginTop: 12,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  flexRow: {
    flexDirection: 'row',
    gap: 12,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
