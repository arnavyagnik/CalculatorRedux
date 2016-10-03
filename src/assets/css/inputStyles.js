import {
    StyleSheet
} from 'react-native'

export default styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },
    rowActions: {
        flexDirection: 'column',
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    inputRow: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    input: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#030303',
    },
    inputActions: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    textActions: {
        flex: 1,
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    operationRow: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#4A4A4A'
    }
});
