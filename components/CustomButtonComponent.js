import { Pressable, Text, View } from "react-native"

const CustomButtonComponent = (props)=>{
    return (
        <View style={{
            width: props.width || 'auto',
            backgroundColor: props.bgColor,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: props.borderRadius || 5,
            elevation: 5,
            // display: 'flex-inline'

        }}>

        <Pressable onPress={props.onPress} style={({pressed})=>{
            if(pressed){
                return {
                    opacity: 0.5,
                    backgroundColor: '#dddddd',
                    borderRadius: 20,
                    width: '100%'
                }
            }
        }}>
            <Text style={{
                color: props.textColor || 'black',
                padding: 8,
                textAlign: 'center'
                
            }}>
                {props.text}
            </Text>
        </Pressable>
        </View>
    )
}


export default CustomButtonComponent

// const styles = StyleSheet.create({
//     customButtonStyles: {
//         width: props.
//     }
// })