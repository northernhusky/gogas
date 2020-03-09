import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ChooseCardTypeScreen from './screens/ChooseCardTypeScreen';
import CardInfoScreen from './screens/CardInfoScreen';

const Stack = createStackNavigator();

export default class CardNavigation extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main" screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="Вид карты" component={ChooseCardTypeScreen} />
                    <Stack.Screen name="Карта" component={CardInfoScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
