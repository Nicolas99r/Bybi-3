import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
    },

    buttoncontainer: {
        width: "80%",
        marginTop: "5%",
        alignItems: "center",

    },
    superior: {
        width: "100%",
        height: "23vh",

    },
    imagencita: {
        height: "15vh",
        width: "40vh"
    },
    titlecontainer: {
        height: "10vh",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    inputs: {
        height: 30,
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#2CDCCC",
       
    },

    button: {
        backgroundColor: "#3FA9F5",
        marginTop: "15%",
        height: 55,
        width: "50%",
        borderRadius: 20,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#4DFFCC",
        
    },

    button2: {
        backgroundColor: "#3FA9F5",
        marginTop: "15%",
        height: 55,
        width: "50%",
        borderRadius: 20,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#4DFFCC",
        
    },



    textbutton: {
        textAlign: "center",
        fontSize: 20,
        color: "#FFFFFF",
    },
    
   
    already: {
        marginTop: "8%",
        textDecorationLine: "none",
        color: "#A6A6A6",
        fontSize: 20,
        

    },
    inferior: {
        width: "100%",
        height: "17vh",
        marginTop: "10%",
        justifyContent: "flex-end",
    }
})

export default styles