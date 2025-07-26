
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface HeaderProps {
  userName: string;
  role?: string;
}

export default function Header({ userName, role = 'Beneficiário' }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo-mesa-ce.png")} style={styles.logo} />
      <View style={styles.info}>
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#023047', 
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  role: {
    color: '#d6e4f0',
    fontSize: 14,
  },
});
