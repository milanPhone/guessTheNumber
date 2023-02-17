import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../util/colors";
import BasicModalCompoent from "./BasicModalComponent";

const IsHigherLowerComponent = (props) => {
    const [showModal,setShowModal] = useState(false);
    const [min,setMin] = useState(1);
    const [max,setMax] = useState(99);
    const closeModal = ()=>{
        setShowModal(false);
    }
    const checkCorrect = async() => {
        if (props.phoneGuess == props.inputNumber) {
            //gameOver screen
            await AsyncStorage.setItem('wonGuess',JSON.stringify(props.phoneGuessList[props.phoneGuessList.length-1]))
            // Alert.alert('you won...!!');
            props.changeScreen('gameOver');

        }
        else {
            // don't lie modal
            setShowModal(true);
        }
    }
    const higherClicked = ()=>{
        if(props.phoneGuess<props.inputNumber){
            // code to increase guess
            setMin(props.phoneGuess + 1)
            props.generateGuess(min,max)
        }
        else{
            // don't lie modal
            setShowModal(true);
        }
    }
    const lowerClicked = ()=>{
        if(props.phoneGuess>props.inputNumber){
            setMax(props.phoneGuess -1)
            props.generateGuess(min,max)
        }
        else{
            setShowModal(true)
        }
    }
    return (

        <>
        <BasicModalCompoent showModal={showModal} setShowModal={setShowModal} closeModal={closeModal} text="Please don't lie...!!" />
        <View style={styles.goldenBorderCard}>
            <Text style={styles.isHLCardTitle}>Is it {props.phoneGuess}?</Text>
            <View style={{ marginVertical: 8, width: '65%' }}>

                <Pressable onPress={checkCorrect} style={({ pressed }) => {
                    if (pressed) {
                        return {
                            opacity: 0.5,
                            backgroundColor: '#dddddd',
                            borderRadius: 5,
                            width: '100%'
                        }
                    }
                }}>
                    <Text style={styles.correctButton}>Correct..!!</Text>

                </Pressable>
            </View>
            <View style={styles.rowButtonsContainer}>
                <View>
                    <Pressable onPress={lowerClicked} style={({ pressed }) => {
                        if (pressed) {
                            return {
                                opacity: 0.5,
                                backgroundColor: '#dddddd',
                                borderRadius: 5,
                                width: '100%'
                            }
                        }
                    }}>
                        <Text style={styles.lowerButton}>Lower -</Text>

                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={higherClicked} style={({ pressed }) => {
                        if (pressed) {
                            return {
                                opacity: 0.5,
                                backgroundColor: '#dddddd',
                                borderRadius: 5,
                                width: '100%'
                            }
                        }
                    }}>
                        <Text style={styles.higherButton}>Higher +</Text>

                    </Pressable>
                </View>

            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    goldenBorderCard: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
        borderColor: 'gold',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        padding: 16
    },
    isHLCardTitle: {
        color: 'gold',
        fontSize: 20
    },
    correctButton: {
        backgroundColor: colors.success,
        borderRadius: 5,
        elevation: 5,
        padding: 8,
        textAlign: 'center',
        // marginVertical: 8
    },
    lowerButton: {
        backgroundColor: colors.warning,
        borderRadius: 5,
        elevation: 5,
        padding: 8,
        textAlign: 'center',
        // marginVertical: 8
    },
    higherButton: {
        backgroundColor: colors.info,
        borderRadius: 5,
        elevation: 5,
        padding: 8,
        textAlign: 'center',
        // marginVertical: 8
    },
    rowButtonsContainer:{
        flexDirection: 'row',
        width:'65%',
        justifyContent:'space-between'
    }
})

export default IsHigherLowerComponent;