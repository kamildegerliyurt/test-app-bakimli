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
        flex: 3, // Her bir imageContainer'ın yüksekliğini eşit yapıyoruz
        // borderWidth: 2,
        borderColor: COLORS.blue,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around", // Resimleri aralıklı olarak yerleştirir
        flexDirection: 'row', // Resimleri yan yana yerleştirmek için
      },
      imageStyle: {
        width: 150, // Resmin genişliği
        // height: 150, // Resmin yüksekliği
        resizeMode: 'contain', // Resmin boyutunu koruyarak ölçeklendirir
      },
      goText: {
        fontSize: 24, // Yazı boyutunu ayarlamak için
        fontWeight: 'bold',
        color: COLORS.black, // Yazı rengini siyah yaptık
      },
      button: {
        backgroundColor: COLORS.gray, // Butonun arka plan rengi
        padding: 10,
        borderRadius: 5, // Kenar yuvarlama
        borderColor: COLORS.goldenYellow,
        backgroundColor: COLORS.pumpkinOrange,
        
      },
      buttonText: {
        color: COLORS.white, // Buton metni rengi
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
      
    
})

export default styles;