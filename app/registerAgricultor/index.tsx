import { View, Text, Image, StyleSheet, Dimensions, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { sessionsProducer } from '../utils/sessions'
import { router } from 'expo-router';
import InputField from '../components/InputField';
import { useState } from 'react';
import ActionButton from '../components/ActionButton';

export default function RegisterAgricultor() {

    const [numSesion, setNumSesion] = useState(0)

   

    const nextSesion = () => {
        setNumSesion(numSesion + 1)
        console.log('SESSAO', numSesion)
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo-mesa-ce.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.welcomeText}>
                    <Text style={styles.userTypeText}>{sessionsProducer[0].title}</Text>
                </Text>
            </View>

            <View style={styles.card}>

                {sessionsProducer[numSesion].textInput.map(text => <InputField label={text.label} placeholder={text.placeHolder} key={text.id} />)}

            <ActionButton title='Avançar' onPress={nextSesion}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#F4F4F4',
        justifyContent: 'space-between',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    logo: {
        width: 280,
        height: 280,
    },
    welcomeText: {
        marginTop: 16,
        fontSize: 18,
        color: '#023047',
        textAlign: 'center',
        fontWeight: '500',
    },
    card: {
        backgroundColor: '#023047',
        paddingVertical: 50,
        paddingHorizontal: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    userTypeText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 16,
        textAlign: 'center',
    },

});
