import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles'
import Fi from 'react-native-vector-icons/Feather'

export default function ItemCard ({ product, up, down }){
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          style={styles.productImage}
          source={{
            uri: product.image
          }}
        />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>R$ {product.price}.00</Text>
      </View>
      <View style={styles.productButtons}>
      <TouchableOpacity style={[styles.button, styles.editButton]} onPress={() => up()}>
          <Fi style={styles.btnIcon} name='edit-2' size={25} color="#3fa8e7" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => down(product.id)} >
          <Fi style={styles.btnIcon} name='x' size={25} color="#d60000" />
        </TouchableOpacity>
      </View>
    </View>
  )
}