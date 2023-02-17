import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const GameOverScreen = ()=>{
    const [wonGuess,setWonGuess] = useState({})
    const getWonGuess = async()=>{
        let wonGuessString = await AsyncStorage.getItem('wonGuess');
        setWonGuess(JSON.parse(wonGuessString));
    }
    useEffect(()=>{
        getWonGuess();
    },[])
    return (
        <>
        
        <View
            style={styles.titleContainer}   
        >
            <Text style={styles.titleText}>Game Over...!!!</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image
                style={styles.imageStyle}
                source={require('../assets/images/gameOver.jpg')}
            ></Image>
        </View>
        <View style={styles.goldBorderCard}>
            <Text style={styles.gameOverText}>
                Mobile was able to guess the number {wonGuess.guess} in {wonGuess.id} rounds...!!
            </Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    titleContainer: {
        alignSelf: 'center',
        marginTop: 70
    },
    titleText: {
        color: 'gold',
        fontSize: 20
    },
    imageStyle:{
        width: 250,
        height: 250,
        borderRadius: 125,
        borderColor: 'gold',
        borderWidth: 2,
        elevation: 10
    },
    imageContainer:{
        marginVertical: 35,
        alignItems:'center'
    },
    goldBorderCard:{
        width:'80%',
        alignSelf: 'center',
        borderColor: 'gold',
        borderWidth: 1,
        borderRadius: 5,
        padding: 16

    },
    gameOverText:{
        color: 'purple',
        textAlign: 'justify',
        fontSize: 20
    }
})
export default GameOverScreen;