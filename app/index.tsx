import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';


import { router } from 'expo-router';
import ActionButton from './components/ActionButton';




export default function Index() {

  return (
    <View style={styles.container}>
      <View style={styles.inner}>



        <Text style={styles.title}>
          Otimize sua produtividade,  {'\n'}

          <Text style={styles.bold}>
            mergulhe no que  {'\n'}importa
          </Text>

        </Text>



        <ActionButton onPress={()=> router.replace('/homescreen')} title='Iniciar' />
      </View>


    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  inner: {
    gap: 16
  },
  
logo: {
  width: 260,  
  height: 80,   

  alignSelf: 'center',
  marginBottom: 16,
},



  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26
  },

  bold: {
    fontWeight: 'bold',

  }





})