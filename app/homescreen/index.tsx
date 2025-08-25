// Homescreen.tsx
import { View, Text, Image, StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import ActionButton from '../components/ActionButton';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useUser } from '../contexts/UserContext';

export default function Homescreen() {
  const router = useRouter();
  const { userData, loadingUser } = useUser();

  useEffect(() => {


    if (!loadingUser) {
      if (userData) {
        router.replace('/(tabs-beneficiario)/candidaturas');
      }
    }
  }, [userData, loadingUser]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo-mesa-ce.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>
          Bem vindo(a) ao App do Mesa do Povo CE
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.userTypeText}>Qual seu tipo de usuário:</Text>
        <ActionButton onPress={() => router.push('/login')} title='Login' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#F4F4F4',
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 280,
    height: 280,
  },
  welcomeText: {
    marginTop: 16,
    fontSize: 18,
    color: '#023047',
    textAlign: 'center',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#023047',
    paddingVertical: 50,
    paddingHorizontal: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  userTypeText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
});
