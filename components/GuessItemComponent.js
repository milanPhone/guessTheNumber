import { StyleSheet, Text, View } from "react-native";

const GuessItemComponent = (props)=>{
    return (
        <View style={styles.guessItemContainer}>
            <Text style={styles.guessItemText}>#{props.guessItem.id} mobile's guess is {props.guessItem.guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    guessItemContainer: {
        backgroundColor: 'purple',
        borderRadius: 20,
        padding: 8,
        marginVertical: 8,
        
    },
    guessItemText:{
        color: 'gold',
        fontWeight: 'bold'
    }
})

export default GuessItemComponent;