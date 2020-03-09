import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {Provider} from 'react-redux'
import MainNavigation from './MainNavigation';
import 'babel-polyfill'


export default class App extends Component {

  componentDidMount() {
    //this._bootstrapAsync();
  }


  _bootstrapAsync = () => {

    store.dispatch(loadTokenFromStorage()).then(() => {
      console.log('hujpizda');
      console.log(this.props.navigation)
      return this.props.navigation.navigate(store.getState().driver.token !== null ? 'Main' : 'Login');
    })
      .catch(error => {
        this.setState({ error })
      })

  };

  render() {

    return (
      <Provider store={store}>
        <MainNavigation/>
      </Provider>
    );

  }
}
