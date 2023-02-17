import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GuessListComponent from "../components/GuessListComponent";
import IsHigherLowerComponent from "../components/IsHigherLowerComponent";

const PlayGameScreen = (props) => {
    const [phoneGuess, setphoneGuess] = useState('');
    const [phoneGuessList,setphoneGuessList] = useState([]);
    const generateGuess = (min, max) => {

        min = Math.ceil(min);
        max = Math.floor(max);
        let guess = Math.floor(Math.random() * (max - min + 1)) + min;
        setphoneGuess(guess)
        setphoneGuessList((prevState=>{
            let newGuess = {
                id: prevState.length +1,
                guess: guess
            }
            return [...prevState,newGuess]
        }))
    }
    useEffect(()=>{
        generateGuess(1,99);
    },[])
    return (


        <>
            <View style={styles.titleContainer}>

                <Text style={styles.titleText}>
                    Guess The Number Game...!!
                </Text>
            </View>
            <IsHigherLowerComponent changeScreen={props.changeScreen} phoneGuessList={phoneGuessList} phoneGuess={phoneGuess} generateGuess={generateGuess} inputNumber={props.inputNumber} />
            <GuessListComponent phoneGuessList={phoneGuessList} />
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
    }
})

export default PlayGameScreen;