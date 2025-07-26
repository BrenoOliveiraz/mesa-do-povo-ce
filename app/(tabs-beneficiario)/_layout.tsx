// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFB703', // Laranja vibrante
        tabBarInactiveTintColor: '#8E8E93', // Cinza neutro
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
          paddingBottom: 6,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },

      }}
    >
      <Tabs.Screen
        name="principal"
        options={{
          title: 'Ofertas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-apple-outline" color={color} size={size} />
          ),
        }}
      />
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
        name="entregasAgendadas"
        options={{
          title: 'Entregas Agendadas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-check-outline" color={color} size={size} />
          ),
        }}
      />

    </Tabs>
  );
}
