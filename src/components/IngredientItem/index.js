import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

import styles from './styles'
import Fi from 'react-native-vector-icons/Feather'

export default function IngredientItem ({ ingredient, down }){

  return(
    <View style={styles.ingredientContainer}>
      <Text style={styles.ingredientValues}>{ingredient.name}</Text>
      <Text style={styles.ingredientValues}>{ingredient.cost}</Text>
      <Text style={styles.ingredientValues}>{ingredient.quantity}</Text>
      <TouchableOpacity style={styles.ingredientRemoveButton} onPress={() => down(ingredient)}>
        <Fi style={styles.delIngredientIcon} name='x-square' size={25} color='#d41000' />
      </TouchableOpacity>
    </View>
  )
}