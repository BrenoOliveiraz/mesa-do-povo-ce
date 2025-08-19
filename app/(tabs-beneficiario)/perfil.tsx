import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useUser } from '../contexts/UserContext';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function PerfilScreen() {
  const { userData, setUserData, loadingUser } = useUser();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    Alert.alert('Sair', 'Deseja realmente sair?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Sair',
        style: 'destructive',
        onPress: async () => {
          setIsLoggingOut(true);
          try {
            await signOut(auth);
            await AsyncStorage.removeItem('userData');
            setUserData(null);
            router.replace('/login'); // ajuste para sua rota de login
          } catch (error) {
            Alert.alert('Erro', 'Não foi possível sair. Tente novamente.');
            console.error('Erro no logout:', error);
          } finally {
            setIsLoggingOut(false);
          }
        },
      },
    ]);
  };

  if (loadingUser || isLoggingOut) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#023047" />
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={styles.noUserText}>Nenhum usuário logado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <MaterialCommunityIcons name="account-circle" size={110} color="#023047" />
        </View>
        <Text style={styles.userName}>{userData.nome || 'Usuário'}</Text>
        <Text style={styles.userEmail}>{userData.email || 'sem email cadastrado'}</Text>
      </View>

      <View style={styles.optionsList}>
        <TouchableOpacity style={styles.optionItem} activeOpacity={0.7} onPress={() => console.log('Editar Perfil')}>
          <Ionicons name="create-outline" size={22} color="#023047" />
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} activeOpacity={0.7} onPress={() => console.log('Alterar Senha')}>
          <Ionicons name="key-outline" size={22} color="#023047" />
          <Text style={styles.optionText}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} activeOpacity={0.7} onPress={() => console.log('Ajuda')}>
          <Ionicons name="help-circle-outline" size={22} color="#023047" />
          <Text style={styles.optionText}>Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optionItem, styles.logout]} activeOpacity={0.7} onPress={handleLogout}>
          <Ionicons name="exit-outline" size={22} color="#D00000" />
          <Text style={[styles.optionText, { color: '#D00000' }]}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noUserText: {
    fontSize: 18,
    color: '#999',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  avatarContainer: {
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 16,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#023047',
    marginBottom: 6,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  optionsList: {
    paddingHorizontal: 24,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  optionText: {
    fontSize: 17,
    color: '#023047',
    marginLeft: 14,
    fontWeight: '600',
  },
  logout: {
    marginTop: 40,
    borderBottomWidth: 0,
  },
});
