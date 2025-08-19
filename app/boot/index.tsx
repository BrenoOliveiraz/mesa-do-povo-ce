// app/auth-loading.tsx
import { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../contexts/UserContext';

export default function AuthLoadingScreen() {
  const { userData, loadingUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loadingUser) {
      if (userData) {
        router.replace('/(tabs-beneficiario)/candidaturas');
      } else {
        router.replace('/homescreen');
      }
    }
  }, [loadingUser, userData]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#023047" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
