import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    categoryCards: {
        elevation: 7,
        borderRadius: 30,
        backgroundColor: 'white',
        padding: 5,
        margin: 10,
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
        overflow: 'hidden'
    },

    input: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 18,
        marginVertical: Platform.OS === 'android' ? 10 : 15,
        paddingHorizontal: 10,
        paddingVertical: Platform.OS === 'android' ?  2 : 10,
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,.2)'
    },

    regInput: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 18,
        marginVertical: Platform.OS === 'android' ? 5 : 10,
        paddingHorizontal: 10,
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,.2)'
    },
})
