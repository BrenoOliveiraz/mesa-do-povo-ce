import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardVertical({ produto, quantidade, isEntregue, onPress, quantidadeEntregue = 0 }) {
    const total = Number(quantidade) || 0;
    const entregue = Number(quantidadeEntregue) || 0;
    const restante = total - entregue;



    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={isEntregue}
            activeOpacity={isEntregue ? 1 : 0.7}
        >
            <View style={[styles.card, isEntregue && styles.cardEntregue]}>
                <Text style={[styles.title, isEntregue && styles.titleEntregue]}>
                    {produto || 'Produto'}
                </Text>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Quantidade total:</Text>
                    <View style={styles.valueContainer}>
                        <Text style={styles.value}>{`${quantidade} kg`}</Text>
                    </View>
                </View>

                {quantidadeEntregue != null && (
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Quantidade entregue:</Text>
                        <View style={styles.valueContainer}>
                            <Text style={styles.value}>{`${quantidadeEntregue} kg`}</Text>
                        </View>
                    </View>
                )}
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Restante:</Text>
                    <View style={styles.valueContainer}>
                        <Text style={styles.value}> {`${restante} kg`}</Text>
                    </View>
                </View>

                {isEntregue && (
                    <View style={styles.entregueBadge}>
                        <Text style={styles.entregueText}>ENTREGUE</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 16,
        padding: 20,
        marginVertical: 12,
        width: '100%',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 4,
    },
    cardEntregue: {
        backgroundColor: '#d4edda',
        opacity: 0.7,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 16,
        color: '#333',
    },
    titleEntregue: {
        color: '#2e7d32',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        color: '#555',
    },
    valueContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    value: {
        fontSize: 15,
        fontWeight: '500',
        color: '#111',
        flexShrink: 1,
    },
    entregueBadge: {
        marginTop: 12,
        backgroundColor: '#2e7d32',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    entregueText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
        letterSpacing: 1,
    },
});
