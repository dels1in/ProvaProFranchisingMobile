import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Pages
import Login from '../pages/Login'
import ProductList from '../pages/ProductList';

const AppStack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" screenOptions={{
        cardStyle:{
          backgroundColor: '#f0f0f0'
        }
      }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="ProductList" component={ProductList} />

      </AppStack.Navigator>

    </NavigationContainer>
  )
}