import React, { useState } from 'react';
import { Keyboard, TextInput, View, TouchableOpacity, Alert, Text, TouchableWithoutFeedback } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import styles from './styles';

import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'

import * as yup from 'yup'

export default function Login() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errs, setErrs] = useState([])

  yup.setLocale({
    mixed:{
      default: 'Não é Valido',
      required: '${path}',
    },
  })
  
  const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  })

  async function handleLogin(){

    const loginFormData = { username, password }

    loginSchema.validate(loginFormData, {abortEarly: false })
      .then(async valid => {
        const login = { username, password }

        try{
          await api.post('/auth/login', login)
            .then(res => {
              if(!res.headers.authorization){
                Alert.alert('Erro de Atutenticação', 'Acesso Inválido')
              }
              SecureStore.setItemAsync('auth-token', res.headers.authorization)
              SecureStore.setItemAsync('user', JSON.stringify(res.data))
              navigation.navigate('ProductList')
            })
        }catch(e) {
          Alert.alert("Erro", "Usuário ou senha Incorretos")
        }
      }).catch((err) => {
        Alert.alert('Erro', 'Campos obrigatórios não preenchidos')
        setErrs(err.errors)
      })
  }

  return(
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.container} >
        <TextInput style={[errs.includes('username') ? styles.loginInputErr : styles.loginInput]}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Usuario"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput style={errs.includes('password') ? styles.loginInputErr : styles.loginInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={() => {handleLogin()}} styles={styles.button}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}