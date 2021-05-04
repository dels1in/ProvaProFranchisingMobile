import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    height: Constants.statusBarHeight + 50,
    flex: 1,
    backgroundColor: '#ecf1f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  loginInput:{
    borderWidth: 1.15,
    borderColor: '#0a0a0a',
    justifyContent: 'center',
    width: 135,
    paddingVertical: 3,
    paddingHorizontal: 9,
    margin: 5,
    backgroundColor: '#ecf1f8',
    borderRadius: 7,
  },

  loginInputErr:{
    borderWidth: 1.15,
    borderColor: '#d41000',
    justifyContent: 'center',
    width: 135,
    paddingVertical: 3,
    paddingHorizontal: 9,
    margin: 5,
    backgroundColor: '#ecf1f8',
    borderRadius: 7,
  },

  loginButton:{
    borderRadius: 8,
    backgroundColor: '#405a51',
    width: 80,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    margin: 20,
  }, 
  
  loginText:{
    height: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },

  

})