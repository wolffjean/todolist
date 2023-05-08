import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container:{
    backgroundColor: '#0D0D0D', 
    height: 173,
    alignItems: 'center',
   }, 
   logoImage:{
    top: 75
   }, 
   form: {
        justifyContent: 'center', 
        flexDirection:'row',
        alignItems: 'center',
        paddingBottom: 50,
        height: 10,
        backgroundColor:'#454545'
   }, 
   inputTask :{
    backgroundColor: '#262626',
    borderRadius: 6,
    borderColor: '#0D0D0D',
    padding: 16,
    height: 60,
    width: 300,
    fontSize: 16,
    marginRight: 12,
    color:'#FFF'
   }, 
   button:{
    height: 56,
    width: 56,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center'
   }, 
   textButton:{
    color: '#FFF'
   }, 
   tasks:{
    height: '100%',
    width: '100%',
    backgroundColor:'#454545',
    flexDirection:'row',
    justifyContent: 'space-evenly'
   }
});