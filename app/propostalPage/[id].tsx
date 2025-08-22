import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import CardCarrossel from '../components/CardCarrossel';
import HeaderCarrossel from '../components/HeaderCarrossel';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.90;
const SPACER_WIDTH = (width - CARD_WIDTH) / 2;

export default function ItemProposta() {
    const { id, cnpj } = useLocalSearchParams();
    const [proposta, setProposta] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewRef = useRef(({ viewableItems }) => {
        const firstVisible = viewableItems.find(item => !item.item.isSpacer);
        if (firstVisible) {
            setCurrentIndex(firstVisible.index);
        }
    });

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    useEffect(() => {
        const fetchProposta = async () => {
            try {
                const docRef = doc(db, 'tpaf', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    const codigoProjeto = data.numTpaf.replace(/\//g, '');
                    const produtosRef = doc(db, 'consumidores', cnpj, codigoProjeto, 'tpafRef');
                    const produtosSnap = await getDoc(produtosRef);

                    let produtosDoados = [];
                    if (produtosSnap.exists()) {
                        produtosDoados = produtosSnap.data().produtosDoados || [];
                    }

                    const produtosComEspacos = [
                        { isSpacer: true },
                        ...produtosDoados,
                        { isSpacer: true },
                    ];

                    setProposta({
                        ...data,
                        produtos: produtosComEspacos,
                    });
                }
            } finally {
                setLoading(false);
            }
        };

        if (id && cnpj) {
            fetchProposta();
        }
    }, [id, cnpj]);

    if (loading) {
        return (
            <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />
        );
    }

    if (!proposta) {
        return (
            <View style={styles.center}>
                <Text style={styles.emptyTitle}>Proposta não encontrada.</Text>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const produtosValidos = proposta.produtos.filter(p => !p.isSpacer);

    if (produtosValidos.length === 0) {
        return (
            <View style={styles.center}>
                <Text style={styles.emptyTitle}>🛈 Nenhum produto encontrado</Text>
                <Text style={styles.emptyText}>
                    Você ainda não possui produtos vinculados a essa proposta.
                </Text>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <HeaderCarrossel
                nome={proposta.nomeProponente}
                cnpj={proposta.cnpjProponente}
                tpaf={proposta.numTpaf}
            />

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
                        <CardCarrossel
                            produto={item.produto}
                            quantidade={item.quantidade}
                            descricao={item.descricao}
                            validade={item.validade}
                            peso={item.peso}
                        />
                    );
                }}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    const produtoAtual = proposta.produtos[currentIndex];
                    if (!produtoAtual || produtoAtual.isSpacer) return;

                    const produtoId = produtoAtual.produtoId;
                    const produto = produtoAtual.produto;
                    const quantidade = produtoAtual.quantidade;

                    router.push({
                        pathname: `/confirmar-entrega/${produtoId}`,
                        params: {
                            produto: JSON.stringify(produto),
                            quantidade: quantidade.toString(),
                        },
                    });
                }}
            >
                <Text style={styles.buttonText}>Confirmar Entrega</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
        paddingHorizontal: 24,
        backgroundColor: '#fff',
    },
    emptyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#444',
    },
    emptyText: {
        fontSize: 15,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    backButtonText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
