import { View, Text, StyleSheet } from 'react-native'
const ProposalItem = (item, quantidade, unidade, validade) => {



    return (
        <View style={styles.card}>
            <View>
                <Text>{item}</Text>
            </View>
            <View>
                <Text>{quantidade}</Text>
                <Text>{unidade}</Text>
            </View>
            <View>
                <Text>
                    {validade}
                </Text>
            </View>
        </View>
    )
}
export default ProposalItem


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 6,
        marginHorizontal: 16,
        borderRadius: 12,
        flexDirection: 'row',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 3,
    }, 
    title: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 4,
    },
})