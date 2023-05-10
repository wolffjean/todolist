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
      backgroundColor:'#454545',
      height: '100%', 
      width: '100%'
   },
   summaryTask:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 30, 
   },
   createdTasks:{
      flexDirection:'row',
      padding: 5,
      marginRight: 5
   },
   createdText:{
      marginRight: 10,
      marginLeft: 15,
      color: '#4EA8DE',
      fontSize: 14,
      fontWeight: 'bold'
   },
   doneTasks:{
      flexDirection:'row',
      padding: 5,
      marginRight: 3
   }, 
   doneText:{
      marginRight: 10,
      marginLeft: 20,
      color: '#8284FA',
      fontSize: 14,
      fontWeight: 'bold'
   }, 
   qty:{
      backgroundColor: '#333333',
      justifyContent: 'center',
      color: '#FFF',
      padding: 1,
      fontWeight: 'bold', 
      width: 10,
      height: 15,
      lineHeight: 15
   }, 
   listEmpty:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1, 
      marginBottom: 5,
      color:'#808080'
   },
   imageEmpty:{
      marginBottom: 10
   },
   textEmptyBold:{
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color:'#808080'
   },
   textEmpty:{
      color:'#808080'
   },
   list:{
      justifyContent: 'center',
      alignItems: 'center'
   }
});