import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // 👈 ADICIONADO
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
            router.replace('/login');
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
      <SafeAreaView style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#023047" />
      </SafeAreaView>
    );
  }

  if (!userData) {
    return (
      <SafeAreaView style={[styles.container, styles.centered]}>
        <Text style={styles.noUserText}>Nenhum usuário logado.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <MaterialCommunityIcons name="account-circle" size={110} color="#023047" />
        </View>
        <Text style={styles.userName}>{userData.nome || 'Usuário'}</Text>
        <Text style={styles.userEmail}>{userData.email || 'sem email cadastrado'}</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem} activeOpacity={0.7} onPress={() => console.log('Editar Perfil')}>
          <Ionicons name="create-outline" size={24} color="#023047" />
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} activeOpacity={0.7} onPress={() => console.log('Alterar Senha')}>
          <Ionicons name="key-outline" size={24} color="#023047" />
          <Text style={styles.optionText}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} activeOpacity={0.7} onPress={() => console.log('Ajuda')}>
          <Ionicons name="help-circle-outline" size={24} color="#023047" />
          <Text style={styles.optionText}>Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optionItem, styles.logout]} activeOpacity={0.7} onPress={handleLogout}>
          <Ionicons name="exit-outline" size={24} color="#D00000" />
          <Text style={[styles.optionText, { color: '#D00000' }]}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
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
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatarContainer: {
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
  },
  userName: {

    fontSize: 22,
    fontWeight: 'bold',
    color: '#023047',
    marginBottom: 4,
    alignItems: 'center',
    textAlign: 'center'
    
  },
  userEmail: {
    fontSize: 16,
    color: '#777',
  },
  optionsContainer: {
    marginTop: 24,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  optionText: {
    fontSize: 16,
    color: '#023047',
    marginLeft: 14,
    fontWeight: '600',
  },
  logout: {
    borderBottomWidth: 0,
    marginTop: 10,
  },
});
