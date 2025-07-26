// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFB703',
      }}
    >
      <Tabs.Screen
        name="principal"
        options={{ title: 'Principal' }}
      />
      <Tabs.Screen
        name="entregas"
        options={{ title: 'Entregas Agendadas' }}
      />
    </Tabs>
  );
}
