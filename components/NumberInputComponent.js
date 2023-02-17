import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import colors from "../util/colors";
import BasicModalCompoent from "./BasicModalComponent";
import CustomButtonComponent from "./CustomButtonComponent";

const NumberInputComponent = (props) => {
    
    const [showModal,setShowModal] = useState(false);
    const onChangeNumber = (number) => {
        props.setInputNumber(number)
    }
    const resetClicked = ()=>{
        props.setInputNumber('');
    }
    const closeModal = ()=>{
        setShowModal(false);
    }
    const confirmClicked = ()=>{
        if(props.inputNumber<1 || props.inputNumber>99){
            //load modal to describe number
            setShowModal(true);
            resetClicked();
        }
        else{
            //load playGameScreen
            props.changeScreen('playGame')
        }
    }
    return (

        <>
        <BasicModalCompoent showModal={showModal} setShowModal={setShowModal} closeModal={closeModal} text='Number Should Be Beetween 1 To 99.' />
        <View style={styles.goldBorderCard}>
            <Text style={styles.numberCardTitle}>Enter a number...!!</Text>
            <TextInput
                style={styles.numberInput}
                onChangeText={onChangeNumber}
                value={props.inputNumber}
                keyboardType="numeric"
            />
            <View style={{flexDirection: 'row',
                width:'40%',
                marginTop: 15,
             justifyContent:'space-between',
             }}>
                

                <CustomButtonComponent
                    bgColor={colors.danger}
                    borderRadius={20}
                    text="Reset"
                    width={70}
                    onPress={resetClicked}
                />
                
                <View style={{marginLeft: 25}}>

                <CustomButtonComponent
                    bgColor={colors.success}
                    borderRadius={20}
                    text="Confirm"
                    width={70}
                    onPress={confirmClicked}

                />
                </View>
            </View>


        </View>
        </>

    )

}

const styles = StyleSheet.create({
    goldBorderCard: {
        alignSelf:'center',
        // alignContent:'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        witdh: '80%',
        // backgroundColor: colors.dark,
        padding: 16,
        // justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gold',
        borderWidth: 1,
        borderRadius: 5
    },
    numberCardTitle: {
        color: 'gold',
        fontSize: 20
    },
    numberInput: {
        borderBottomWidth: 1,
        width: 40,
        borderColor: 'gold',
        color: 'gold'
    },
    

})

export default NumberInputComponent;