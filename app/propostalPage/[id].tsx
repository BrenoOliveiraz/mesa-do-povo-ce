import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;
const SPACER_WIDTH = (width - CARD_WIDTH) / 2;

export default function ItemProposta() {
    const { id } = useLocalSearchParams();
    const [proposta, setProposta] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProposta = async () => {
            try {
                const docRef = doc(db, 'tpaf', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const produtosComEspacos = [
                        { isSpacer: true },
                        ...data.produtos,
                        { isSpacer: true }
                    ];
                    setProposta({ ...data, produtos: produtosComEspacos });
                }
            } catch (error) {
                console.error('Erro ao buscar proposta:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProposta();
    }, [id]);

    if (loading) {
        return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
    }

    if (!proposta) {
        return (
            <View style={styles.center}>
                <Text>Proposta não encontrada.</Text>
            </View>
        );
    }
    console.log(proposta)

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* HEADER estilo Bicicletar */}
            <View style={styles.header}>
                {/* Aqui pode colocar uma imagem de topo se quiser */}
 
               <Text style={styles.headerTitle}>{proposta["Nome Proponente"]}</Text>
                
                <Text style={styles.headerSubtitle}>CNPJ: {proposta.cnpjProponente}</Text>
            </View>

            {/* Lista de Cards */}
            <FlatList
                data={proposta.produtos}
                horizontal
                snapToInterval={CARD_WIDTH + 20}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{ paddingHorizontal: SPACER_WIDTH }}
                renderItem={({ item }) => {
                    if (item.isSpacer) return <View style={{ width: SPACER_WIDTH }} />;
                    return (
                        <View style={styles.card}>
                            <Text style={styles.produto}>{item.produto}</Text>
                            <Text style={styles.quantidade}>Quantidade: {item.quantidade}kg</Text>
                        </View>
                    );
                }}
            />

            {/* Botão estilo Bicicletar */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Confirmar Entrega</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#023047',
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop: 40,
    },
    headerImage: {
        width: width,
        height: 80,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 5,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#c8e6c9',
        marginTop: 2,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        marginHorizontal: 10,
        marginVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: CARD_WIDTH,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    produto: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 12,
    },
    quantidade: {
        fontSize: 18,
        color: '#555',
    },
    button: {
        backgroundColor: '#2e7d32',
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
