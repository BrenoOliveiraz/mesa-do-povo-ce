import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function RegisterBeneficiario() {
  return (
    <View style={styles.container}>
        <Header />
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})