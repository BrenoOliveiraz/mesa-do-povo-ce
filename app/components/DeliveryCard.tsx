import { Pressable, View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type DeliveryCardProps = {
    id: string;
    data: string;
    hora: string;
    titulo: string;
    status: string;
    corStatus: string;
};

export default function DeliveryCard({ id, data, hora, titulo, status, corStatus }: DeliveryCardProps) {
    const router = useRouter();
    
    const handlePress = () => {
        const query = new URLSearchParams({ data, hora, titulo, status }).toString();
        router.push(`/deliveryItem/${id}?${query}`);
    };



    return (
        <Pressable style={styles.cardWrapper} onPress={handlePress}>
            <View style={styles.card}>
                <Text style={styles.data}>{data} {hora}</Text>
                <View style={styles.cardContent}>
                    <Text style={styles.titulo}>{titulo}</Text>
                    <View style={[styles.statusBox, { backgroundColor: corStatus }]}>
                        <Text style={styles.statusText}>{status}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        marginBottom: 16,
    },
    data: {
        fontSize: 14,
        color: '#4A4A4A',
        marginBottom: 8,
        fontWeight: '600',
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 16,
        fontWeight: '500',
        color: '#222',
        flex: 1,
        paddingRight: 8,
    },
    statusBox: {
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    statusText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 12,
    },
});
