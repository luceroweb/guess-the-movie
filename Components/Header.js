import { StyleSheet, View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';

function Header(){
    return(
        <View style={styles.container}>
            <Text>
                HEADER
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF525',
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default connect()(Header);