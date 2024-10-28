import { StyleSheet } from 'react-native'
import {COLORS} from "../constants/color"



const styles = StyleSheet.create({
    welcomePageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      WelcomeTopContainer: {
        flex: 1,
        borderWidth: 2,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginVertical: 5,
      },
      customerButton: {
        borderWidth: 2,
        width: '45%', 
        paddingVertical:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.goldenYellow,
        backgroundColor: COLORS.pumpkinOrange,
        borderRadius:20,
      },
      buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white
      },
      otherButton: {
        borderWidth: 2,
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      welcomeDownContainer: {
        flex: 1,
        borderWidth: 2,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
      },
      testCustomerButton: {
        borderWidth: 2,
        width: '90%', 
        paddingVertical:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.goldenYellow,
        backgroundColor: COLORS.pumpkinOrange,
        borderRadius:20,
      },
      testTextButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white,
      },



      registerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      registerTopContainer: {
        flex: 1,
        borderWidth: 2,
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
      },
      title: {
        fontSize: 35,
        fontWeight: "bold",
      },
      input: {
        borderWidth: 2,
        width: "95%",
        borderRadius: 20,
        textAlign: "center",
        padding: 5,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray,
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
      },
      handleRegisterContainer: {
        borderWidth: 2,
        borderColor: COLORS.goldenYellow,
        backgroundColor: COLORS.pumpkinOrange,
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: 20,
      },
      handleRegisterText: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.black,
      },
      handleLogin: {
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
      },
      handleLoginText: {
        fontSize: 16,
        textDecorationLine: "underline",
      },



      loginScreenContainer: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        // backgroundColor:"#DDDBDB",
      },
      input: {
        borderWidth:2, 
        width:"95%", 
        borderRadius:20,
        textAlign:"center",
        padding:5,
        backgroundColor:COLORS.white,
        borderColor:COLORS.gray,
        fontSize:16,
        fontWeight:"bold",
        marginTop:5,
      },
      error: {
        color: COLORS.red,
        marginBottom: 8,
      },
      loginTopContainer:{
        flex:1,
        borderWidth:2,
        width:"95%",
        alignItems:"center",
        justifyContent:"center",
      },
      handleLoginContainer:{
        borderWidth:2,
        borderColor: COLORS.goldenYellow,
        backgroundColor: COLORS.pumpkinOrange,
        width:"60%",
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        marginTop:10,
        borderRadius:20,
      },
      handleLoginDataText: {
        fontSize:18,
        fontWeight:"bold",
        color:COLORS.black,
      },
      handleRegisterPageText:{
        fontSize:16,
        textDecorationLine:'underline',
      },
      title: {
        fontSize: 35,
        fontWeight: "bold",
      },


      textOperatingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#DDDBDB',
      },
      textOperatingTopContainer: {
        flex: 1,
        // borderWidth: 2,
        borderColor: COLORS.goldenYellow,
        backgroundColor: COLORS.pumpkinOrange,
        borderRadius:20,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        
      },
      videoStyle:{
        flex:1,
        alignSelf:"stretch",
        borderRadius:20,
      },
      textOperatingDownContainer: {
        flex: 2,
        // borderWidth: 2,
        borderColor: COLORS.red,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
      },
      imageContainer: {
        flex: 3, 
        // borderWidth: 2,
        borderColor: COLORS.blue,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around", 
        flexDirection: 'row', 
      },
      imageStyle: {
        width: 150, 
        // height: 150, // 
        resizeMode: 'contain',
      },
      goText: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: COLORS.black,
      },
      button: {
        backgroundColor: COLORS.gray, 
        padding: 10,
        borderRadius: 5, 
        borderColor: COLORS.goldenYellow,
        backgroundColor: COLORS.pumpkinOrange,
        
      },
      buttonText: {
        color: COLORS.white, 
        fontSize: 18,
        fontWeight: 'bold',
      },
      buttonTopContainer:{
        flex: 1,
        // borderWidth: 2,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },




      safeArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#ffffff",
      },
      mainContainer: {
        flex: 1,
        // backgroundColor: "orange",
        marginBottom: 50,
        borderColor:COLORS.red,
        borderWidth: 2,
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop:10,
      },
      scrollContainer: {
        flex:2,
        borderWidth: 2,
        borderColor:COLORS.blue,
        width: "95%",
        // borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "pink",
        padding: 10,
      },
      titleContainer: {
        marginRight: 20, 
        alignItems: 'center', 
      },
      titleText: {
        fontSize: 20,
        padding: 10,
      },
      image: {
        width: 150,
        height: 150, 
        resizeMode:"cover",
      },
      textInputContainer: {
        flex:1,
        borderWidth:2,
        borderColor:COLORS.blue,
        width:"95%",
        alignItems:"center",
        justifyContent:"center",
        padding:5,
        marginVertical:5,
      },
      textInputStyle: {
        borderWidth: 2,
        width: "95%",
        borderRadius: 20,
        textAlign: "center",
        padding: 5,
        backgroundColor: COLORS.white,
        borderColor: COLORS.gray,
        fontSize: 16,
        fontWeight: "bold",
      },
      cartsMainContainer: {
        flex:5,
        borderWidth: 2,
        borderColor:COLORS.blue,
        width: "95%",
        // borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "pink",
        paddingHorizontal:10,
      },
      cartsContainer:{
        borderWidth:2, 
        borderColor:COLORS.gray,
        backgroundColor:COLORS.white,
        flexDirection:"row",
        width:"100%", 
        // alignItems:"center", 
        // justifyContent:"center",
        borderRadius:5,
        padding:5,
        marginVertical:5,
        
      },
      cartTopContainer:{
        flex:1,
        // borderWidth:2, 
        // borderColor:"green",
      },
      cartDownContainer:{
        flex:3,
        // borderWidth:2,
        // borderColor:"red",
        padding:5,
      },
      cartDownTextStyle:{
        fontSize:16, 
        fontWeight:"bold", 
        // borderWidth:2,
        paddingHorizontal:5, 
        color:"gray",
      },

      //-----------------------------
      profileContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
      },
      profileTopContainer: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 2,
        width: "95%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
      },
      profileDownContainer: {
        flex: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        width: "95%",
      },
      usersInputText: {
        fontSize: 20,
        fontWeight: "bold",
        borderBottomWidth: 1,
        width: '80%',
        marginVertical: 10,
        padding: 5,
      },


      //-----------------------------
      mapPageContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        // backgroundColor:"#ffffff"
      },

      //-----------------------------



    
      
    
})

export default styles;