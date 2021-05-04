import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  //Product List
  container: {
    top: Constants.statusBarHeight + 30,
    flex: 1,
    backgroundColor: '#ecf1f8',
    alignSelf: 'center',
    width: 385,

    /* borderWidth: 1,
    borderColor: '#d41000' */
  },
  titleButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title:{
    fontSize: 22,
    height: 35,
    width: 175,
    textAlign: 'center',
    textAlignVertical: 'center',
    
    /* borderWidth: 1,
    borderColor: '#d41000', */
  },
  addIcon:{
    width: 25,
    height: 25,
    marginRight: 2.5,

    /* borderWidth: 1,
    borderColor: '#d41000', */
  },
  addButton:{
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#405a51',
    width: 175,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  addText:{
    height: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFF',
    marginRight: 2.5,
    fontWeight: '700',

    /* borderWidth: 1,
    borderColor: '#d41000', */
  },
  productList:{
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    top: 15,
    width: 400,

    /* borderWidth: 1,
    borderColor: '#d41000', */
  },

  //For Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#ecf1f8"
  },
  modalView: {
    height: 450,
    width: 350,
    margin: 20,
    backgroundColor: "#ecf1f8",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  // Product Form
  productForm:{
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    width: 290,
    height: 45,
    top: 30,
  },
  
  productInputText:{
    borderWidth: 1.15,
    borderColor: '#0a0a0a',
    justifyContent: 'center',
    width: 135,
    padding: 8,
    backgroundColor: '#ecf1f8',
    borderRadius: 7,
  },
  productInputErr:{
    borderWidth: 1.15,
    borderColor: '#d41000',
    justifyContent: 'center',
    width: 135,
    padding: 8,
    backgroundColor: '#ecf1f8',
    borderRadius: 7,
  },

  // Ingredient List
  listLables:{
    position: 'absolute',
    flexDirection: 'row',
    width: 280,
    height: 35,
    top: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
   /*  borderWidth: 1,
    borderColor: '#d41000' */
  },

  textLables:{
    borderTopWidth: 1.15,
    borderBottomWidth: 1.15,
    borderColor: '#0a0a0a',
    height: 30,
    width: 85,
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  ingredientList:{
    /* borderWidth: 1.5,
    borderColor: 'red', */
    top: 57,
    width: 280,
    height: 195,
  },

  // Ingredient Form
  ingredientsForm:{
    position: 'absolute',
    flexDirection: 'row',
    width: 340,
    height: 35,
    bottom: 110,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },

  ingredientsFormInput:{
    justifyContent: 'center',
    borderWidth: 1.15,
    borderColor: '#0a0a0a',
    width: 100,
    padding: 5,
    backgroundColor: '#ecf1f8',
    borderRadius: 7,
  },

  // Ingredient Button
  ingredientButtonView:{
    position: 'absolute',
    bottom: 67,
  },
  addIngredientButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110,
    height: 35,
    padding: 5,
    backgroundColor: '#ecf1f8',
    borderRadius: 4,
    
  },
  addIngredientIcon:{
    
  },
  addIngredientText:{
   
  },

  // Add Button
  buttonView:{
    position: 'absolute',
    height: 35,
    bottom: 12,
    /* borderWidth: 1,
    borderColor: '#d41000' */ 
  },
  addProdButton:{
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderColor: "#405a51",
    backgroundColor: '#405a51',
    paddingVertical: 5,
    width: 325,
    height: 35,
    alignSelf: 'center'
  },
  addProdtext:{
    width: 325,
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  }
})