import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../util/colors";

const BasicModalCompoent = (props)=>{
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.showModal}
        onRequestClose={() => {
          props.setShowModal(false);
        }}>
            <View style={styles.modalViewContainer}>

            <View style={styles.modalView}>
                <Text style={styles.modalText}>{props.text}</Text>
                <View>
                    
                </View>
                <Pressable onPress={props.closeModal} style={({pressed})=>{
                    if(pressed){
                        return {
                            opacity: 0.5,
                            backgroundColor: '#dddddd',
                            borderRadius: 20,
                            width: '100%'
                        }
                    }
                }}>
                    <Text style={styles.closeButton}>Close</Text>
                </Pressable>

            </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalViewContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modalView:{
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        borderRadius: 5,
        elevation: 10
    },
    closeButton:{
        backgroundColor: colors.danger,
        padding:8,
        textAlign:'center',
        borderRadius:20,
        elevation:5,
        marginTop: 8
    },
    modalText:{
        color: 'purple'
    }
})
export default BasicModalCompoent;