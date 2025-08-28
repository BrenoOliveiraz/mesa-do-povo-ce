import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
import ActionButton from './components/ActionButton';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2731/2731689.png' }} 
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        Bem-vindo ao{' '}
        <Text style={styles.bold}>
          Mesa do Povo
        </Text>
      </Text>

      <Text style={styles.subtitle}>
        Gerencie entregas de doações com agilidade, clareza e empatia.
      </Text>

      <ActionButton  onPress={() => router.replace('/boot')} title="Iniciar" />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    padding: 24,
    gap: 24,
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 28,
  },
  bold: {
    fontWeight: 'bold',
    color: '#00c853',
  },
  subtitle: {
    color: '#ccc',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
});
