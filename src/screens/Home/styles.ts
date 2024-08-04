import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input:{
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 10,
    color: "#FDFCFE",
    padding: 10,
    fontSize: 16,
   flex:1
  },
  buttonText:{
    fontSize:24,
    color: "#fff",
    textAlign:"center"
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    justifyContent:"center",
  },
  form:{
    marginTop: 12,
    marginBottom: 20,
    alignItems:"center",
    flexDirection:"row",
    gap: 10
  },
  listEmptyText:{
    fontSize:16,
    color: "#fff",
    textAlign:'center'
  }
})