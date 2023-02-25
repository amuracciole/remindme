import { StyleSheet} from 'react-native';

const Loginstyles = StyleSheet.create({
    main_container: {
      backgroundColor: "#f1f1f1",
      flex: 1,
    },
    container_SVG: {
      justifyContent: "flex-start",
      alignItems: "center",
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    titulo_principal:{
      fontSize:80,
      color: "#000",
      fontWeight: "bold",
    },
    titulo_secundario:{
      fontSize:20,
      color: "grey",
    },
    text_input:{
      paddingStart: 10,
      padding: 10,
      width: "80%",
      height: 50,
      marginTop: 20,
      borderRadius: 20,
      backgroundColor: "#fff",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      width: "30%",
      height: 50,
      marginTop: 20,
      borderRadius: 20,
      backgroundColor:"#1B3283",
      
    },
    button_text: {
      fontSize:20,
      color: "#fff",
      fontWeight: "bold",
      alignItems: 'center',
    },
    text_password: {
      fontSize: 15,
      color: "#000",
      marginTop: 20,
      alignItems:"flex-end",
      marginEnd:50
    }
    
  });

  export default Loginstyles