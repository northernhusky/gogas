import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import store from './store/index';
import { loadTokenFromStorage } from './store/driver/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import GetCardScreen from './screens/GetCardScreen'
import MyCardsScreen from './screens/MyCardsScreen'
import HistoryPaymentsScreen from './screens/HistoryPaymentsScreen'
import HistoryFillScreen from './screens/HistoryFillScreen'
import CardInfoScreen from './screens/CardInfoScreen'
import ChooseCardTypeScreen from './screens/ChooseCardTypeScreen'
import OrderCardScreen from './screens/OrderCardScreen'

const Drawer = createDrawerNavigator();

export default class AppContainer extends Component {

  componentDidMount() {
    //this._bootstrapAsync();
  }


  // _bootstrapAsync = () => {

  //   store.dispatch(loadTokenFromStorage()).then(() => {
  //     console.log('hujpizda');
  //     console.log(this.props.navigation)
  //     return this.props.navigation.navigate(store.getState().driver.token !== null ? 'Main' : 'Login');
  //   })
  //     .catch(error => {
  //       this.setState({ error })
  //     })

  // };

  render() {

    return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          headerShown: false,
        }} drawerStyle={{
          backgroundColor: 'rgba(42,194,252,1)',
          width: '75%',

        }}
          drawerContentOptions={{
            activeTintColor: 'white',
            itemStyle: { marginVertical: 1, fontSize: '21px', top: '11%', height: '14%',padding: '-19%', paddingLeft:'16%'},
          }}
          initialRouteName="Главная"
        >
          <Drawer.Screen
            name="Главная"
            component={HomeScreen}
          />
          <Drawer.Screen
            name="Мои карты"
            component={MyCardsScreen}
          />
          <Drawer.Screen
            name="Получить карту"
            component={OrderCardScreen}
          />
          <Drawer.Screen
            name="Привязать карту"
            component={GetCardScreen}
          />
          <Drawer.Screen
            name="История транзакций"
            component={HistoryPaymentsScreen}
          />
          <Drawer.Screen
            name="История заправок"
            component={HistoryFillScreen}
          />
          <Drawer.Screen
            name="Карта"
            component={CardInfoScreen}
          />
          <Drawer.Screen
            name="Вид карты"
            component={ChooseCardTypeScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );

  }
}
