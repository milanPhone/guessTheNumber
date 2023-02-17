import { StyleSheet, View } from "react-native"
import CustomButtonComponent from "../components/CustomButtonComponent"
import NumberInputComponent from "../components/NumberInputComponent"
import colors from "../util/colors"

const StartGameScreen =  (props)=>{
    return (
        <NumberInputComponent inputNumber={props.inputNumber} setInputNumber={props.setInputNumber} changeScreen={props.changeScreen} />
    )
}



export default StartGameScreen;