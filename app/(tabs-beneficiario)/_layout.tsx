import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { UserProvider } from '../contexts/UserContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useCustomTabBarStyle } from '../components/CustomTabBarStyle';


export default function Layout() {
  const tabBarStyle = useCustomTabBarStyle();

  return (
    <SafeAreaProvider>
      <UserProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#FFB703',
            tabBarInactiveTintColor: '#8E8E93',
            tabBarStyle: tabBarStyle,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '500',
            },
          }}
        >
          <Tabs.Screen
            name="candidaturas"
            options={{
              title: 'Candidaturas',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="document-text-outline" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="entregasRealizadas"
            options={{
              title: 'Entregas Realizadas',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calendar-check-outline" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="perfil"
            options={{
              title: 'Perfil',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
          />
        </Tabs>
      </UserProvider>
    </SafeAreaProvider>
  );
}
