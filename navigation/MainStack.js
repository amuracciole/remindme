import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import Loginpage from '../screens/login';
import NextPage from '../screens/nextpage';

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Scren
                    name= 'Inicio'
                    component = {Loginpage}
                />
                <Stack.Scren
                    name= 'Destino'
                    component = {NextPage}
                /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack