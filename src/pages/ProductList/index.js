import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, TextInput, Text, Alert, Modal } from 'react-native';

import styles from './styles';
import Fi from 'react-native-vector-icons/Feather'

import ItemCard from '../../components/ItemCard'
import IngredientItem from '../../components/IngredientItem'

import * as yup from 'yup'

import * as SecureStore from 'expo-secure-store';
import api from '../../services/api';
import { set } from 'react-native-reanimated';


export default function ProductList({ navigation }){
  const [modalProduct, setModalProduct] = useState(false) 
  const [productList, setProductList] = useState([])
  const [id,setId] = useState('')

  // Modal values

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [ingredients, setIngredients] = useState([])

  const [ingredientName, setIngredientName] = useState('');
  const [ingredientCost, setIngredientCost] = useState('');
  const [ingredientQtd, setIngredientQtd] = useState('');

  const [isUpdate, setIsUpdate] = useState(false)
  const [uptProdId, setUptProdId] = useState('')

  const [errs, setErrs] = useState([])
  

  const [user, setUser] = useState()
  const [token, setToken] = useState('')

  const image = "https://mais1cafe.com.br/wp-content/uploads/2020/08/Sensacao.png"

  yup.setLocale({
    mixed:{
      default: 'Não é Valido',
      required: '${path}',
    },
    number:{
      min: '${path}',
      
    },
  })

  const productSchema = yup.object().shape({
    name: yup.string().required(), 
    price: yup.number().required().min(1),
  })
  
  function handleUpdateItem(product) {

    setUptProdId(product.id)
    setName(product.name)
    setPrice(product.price.toString())
    setIngredients(product.ingredients)
    setModalProduct(true) 
    setIsUpdate(true)
  }

  async function handleUpdateProduct(){

    if(ingredients.length == 0){
      Alert.alert('Ingrediente','Produto deve ter ao menos um ingrediente')
      return
    }

    const productFormData = { name, price: price=='' ? 0 : price }
    
    productSchema.validate(productFormData, { abortEarly: false })
      .then( async valid => {
   
        const uptProduct = { 
          id: uptProdId,
          name, 
          price, 
          ingredients, 
          image 
        }

        try{
          await api.post('/product/save', uptProduct, {
            headers:{
              authorization: token
            }
          })
          clearInputs()
          setIsUpdate(false)
          alert("Produto Atualizado")
        }catch(err){
          if(err.message.includes("500")) alert("Ocorreu um erro de gravação, Verifique os dados")
          if(err.message.includes("400")) alert("Há dados faltando, preencha os requisitos")
          if(err.message.includes("401")) alert("Você não tem permissão para executar está ação")
        }
      }).catch((err) => {
        
        Alert.alert('Erro', 'Campos obrigatórios não preenchidos')
        setErrs(err.errors)
      })
  }

  function handleDeleteItem(id) {

    Alert.alert(
      "Excluir Produto?",
      "Tem certeza que deseja exluir este produto?",
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Sim',
          onPress: async () => {

            try {
              await api.delete(`/product/delete/${id}`, {
                headers:{
                  authorization: token
                }
                
              })
              setId(id)
              alert('Produto excluido!')
            } catch (err) {
              if(err.message.includes("500")) alert("Ocorreu um erro de gravação, Verifique os dados")
              if(err.message.includes("401")) alert("Você não tem permissão para executar está ação")
            }
          }
        }
      ]
    )
  }
  
  function handleNewIngredient (){
    const newIngredient = {
      name: ingredientName,
      cost: ingredientCost,
      quantity: ingredientQtd
    }
    
    setIngredients([...ingredients, newIngredient])
  }

  function removeItem(item){
    var bkpIngredients = [...ingredients]
    var i = ingredients.indexOf(item)
    if(i !== -1){
      bkpIngredients.splice(i,1)
      setIngredients(bkpIngredients)
    }    
  }

  async function handleNewProduct(){

    if(ingredients.length == 0){
      Alert.alert('Ingrediente','Produto deve ter ao menos um ingrediente')
      return
    }

    const productFormData = { name, price: price==''? 0 : price }

    productSchema.validate(productFormData, { abortEarly: false })
      .then( async valid => {
        const newProduct = {
          name,
          price,
          ingredients,
          image
        }

        try{
          await api.post('/product/save', newProduct, {
            headers:{
              authorization: token
            }
          })
          Alert.alert('Sucesso', 'Produto cadastrado')
          clearInputs()
          setModalProduct(!modalProduct)
        }catch(err){
          if(err.message.includes("500")) alert("Ocorreu um erro de gravação, Verifique os dados")
          if(err.message.includes("400")) alert("Há dados faltando, preencha os requisitos")
          if(err.message.includes("401")) alert("Você não tem permissão para executar está ação")
        }
      }).catch((err) => {
        console.log(err.errors)
        Alert.alert('Erro', 'Campos obrigatórios não preenchidos')
        setErrs(err.errors)
      })
  }

  function clearInputs(){
    setName('')
    setPrice('')
    setIngredients([])
    setIngredientName('')
    setIngredientCost('')
    setIngredientQtd('')
  }
  useEffect(()=>{
    async function getUserData(){
      try {
        await SecureStore.getItemAsync('auth-token')
          .then(res => {
            setToken(res)
          })
        
        await SecureStore.getItemAsync('user')
          .then(res => {
            setUser(res)
          })
        
      } catch (error) {
        Alert.alert('Não foi possível pegar informações do usuário, reinicie a pagina')
      }
    }

    async function fillProductList(){
      try{
        await api.get(`/product/list`, {
          headers:{
            authorization: token
          }
        })
        .then(res => {
          //console.log(res.data)
          setProductList(res.data.content)
        })
      }catch(err){
        console.log(err)
      }
    }
    getUserData()
    fillProductList()
  }, [id, modalProduct, token])

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleButton}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <TouchableOpacity style={styles.addButton} onPress={() => setModalProduct(true)}>
            <Fi style={styles.addIcon} name="plus" size={25} color="#FFF" />
            <Text style={styles.addText}>Adicionar Produto</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productList}>
        <FlatList 
            showVerticalScrollIndicator={false}
            data={productList}
            keyExtractor={(product) => product.id.toString()}
            renderItem={({item}) => (
              <ItemCard product={item} up={() => handleUpdateItem(item)} down={handleDeleteItem} />
            )}
            numColumns={2}
        />
          
        </View>
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalProduct}
          onRequestClose={() => {
            clearInputs()
            setIsUpdate(false)
            setModalProduct(!modalProduct);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.productForm}>
                <TextInput 
                  style={errs.includes('name') ? styles.productInputErr : styles.productInputText}
                  placeholder='Nome do Produto'
                  value={name}
                  onChangeText={setName}
                />
                <TextInput 
                  style={errs.includes('price') ? styles.productInputErr : styles.productInputText } 
                  placeholder='Preço'
                  keyboardType='numeric'
                  value={price}
                  onChangeText={setPrice}
                />
              </View>

                <View style={styles.listLables}>
                  <Text style={styles.textLables}>Ingrediente</Text>
                  <Text style={styles.textLables}>Custo</Text>
                  <Text style={styles.textLables}>Qtd.</Text>
                </View>

                <View style={styles.ingredientList}>
                  <FlatList 
                    showVerticalScrollIndicator={false}
                    data={ingredients}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                      <IngredientItem ingredient={item} down={removeItem} />
                    )}
                  />

                </View>
                <View style={styles.ingredientsForm}>
                  <TextInput 
                    style={styles.ingredientsFormInput} 
                    placeholder='Ingrediente'
                    value={ingredientName}
                    onChangeText={setIngredientName}
                  />
                  <TextInput 
                    style={styles.ingredientsFormInput} 
                    placeholder='Custo'
                    keyboardType='numeric'
                    value={ingredientCost}
                    onChangeText={setIngredientCost}
                  />
                  <TextInput 
                    style={styles.ingredientsFormInput} 
                    placeholder='Quantidade'
                    keyboardType='numeric'
                    value={ingredientQtd}
                    onChangeText={setIngredientQtd}
                  />
                </View>
                <View style={styles.ingredientButtonView}>
                  <TouchableOpacity style={styles.addIngredientButton} onPress={() => handleNewIngredient()}>
                    <Fi style={styles.addIngredientIcon} name='plus-square' size={20} />
                    <Text style={styles.addIngredientText}>Ingrediente</Text>
                  </TouchableOpacity>
                </View>
              
              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={[styles.addProdButton]}
                  onPress={ () => {isUpdate ? handleUpdateProduct() : handleNewProduct()} }
                >
                <Text style={styles.addProdtext}>{isUpdate ? 'Atualizar' : 'Criar'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      </View>
      
    </>
  )

}