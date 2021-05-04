import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

  ingredientContainer:{
    flexDirection: 'row',
    width: 285,
    top: 23,
    height: 50,
    justifyContent: 'space-between',
    paddingLeft: 20,

    /* borderWidth: 1,
    borderColor: '#d41000' */
  },
  ingredientValues:{
   /*  borderWidth: 1.15,
    borderColor: '#0a0a0a', */
    width: 55,
    padding: 5,
    textAlign: 'center',

  },
  ingredientRemoveButton:{
    /* borderWidth: 1.15,
    borderColor: '#0a0a0a', */
    right: 15,
    alignItems: 'center'
  },


})