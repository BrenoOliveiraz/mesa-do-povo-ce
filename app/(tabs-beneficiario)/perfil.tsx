import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useUser } from '../contexts/UserContext';

export default function PerfilScreen() {


  const {userData, loadingUser} = useUser()
  console.log(userData)


  const handleLogout = () => {
    Alert.alert('Sair', 'Deseja realmente sair?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', onPress: () => console.log('Logout executado') },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <MaterialCommunityIcons name="account-circle" size={100} color="#023047" />
        <Text style={styles.userName}>{userData.nome}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
      </View>

      <View style={styles.optionsList}>
        <TouchableOpacity style={styles.optionItem} onPress={() => console.log('Editar Perfil')}>
          <Ionicons name="create-outline" size={22} color="#023047" />
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} onPress={() => console.log('Alterar Senha')}>
          <Ionicons name="key-outline" size={22} color="#023047" />
          <Text style={styles.optionText}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} onPress={() => console.log('Ajuda')}>
          <Ionicons name="help-circle-outline" size={22} color="#023047" />
          <Text style={styles.optionText}>Ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.optionItem, styles.logout]} onPress={handleLogout}>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 32,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#023047',
    marginTop: 8,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  optionsList: {
    paddingHorizontal: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  optionText: {
    fontSize: 16,
    color: '#023047',
    marginLeft: 12,
    fontWeight: '500',
  },
  logout: {
    marginTop: 32,
    borderBottomWidth: 0,
  },
});


