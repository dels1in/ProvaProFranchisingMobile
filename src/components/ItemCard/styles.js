import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ecf1f8',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 12,
    margin: 5,
    height: 275,

    /* borderWidth: 1,
    borderColor: '#d41000', */
  },

  imageContainer:{
    
  },

  productImage:{
    width: 190,
    height: 190
  },

  productInfo:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 190,
    marginTop: 15,
    
  },
  productName:{
    position: 'absolute',
    fontSize: 15,
    left: 20,
    textAlign: 'left',
  },

  productPrice:{
    position: 'absolute',
    fontSize: 14,
    right: 40, 
    textAlign: 'right',
  },

  productButtons:{
    position: 'absolute',
    flexDirection: 'row',
    justifyContent:'space-between',
    width: 190,
    bottom: 0,

    /* borderWidth: 1,
    borderColor: 'red', */
  },

  button:{
    width: 95,
    height: 30,
    alignItems: 'center',


    borderWidth: 0.5,
    borderColor: '#c0c3c8',

  },
  
  editButton:{
    borderBottomLeftRadius: 10,
  },
  
  deleteButton:{
    borderBottomRightRadius: 10,
  },

  btnIcon:{
    width: 25,
    height: 25,
    

    /* borderWidth: 1,
    borderColor: '#d41000', */
  }


})