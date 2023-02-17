import { FlatList, StyleSheet, View } from "react-native"
import GuessItemComponent from "./GuessItemComponent"

const GuessListComponent = (props)=>{
    return (

    <View style={styles.guessListContainer}>

    <FlatList
    data={props.phoneGuessList}
    renderItem={({item})=>{
        return <GuessItemComponent guessItem={item} />
    }}
    keyExtractor={(item)=>{
        return item.id
    }}
    >

    </FlatList>
    </View>
    )
}

const styles = StyleSheet.create({
    guessListContainer:{
        padding: 15,
        borderTopColor: 'purple',
        borderTopWidth: 2,
        marginTop: 15,
        marginBottom: 300
    }
})

export default GuessListComponent