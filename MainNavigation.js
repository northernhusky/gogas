import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from './store/index';
import { LOAD_TOKEN } from './store/driver/constants';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthStack from './AuthNavigation'
import DrawerNav from './DrawerNavigation'

class AppContainer extends Component {

  componentDidMount() {
    this._bootstrapAsync();
  }


  _bootstrapAsync = () => {
    this.props.loadTokenFromStorage()
  };

  render() {

    let route = this.props.token ? 'App' : 'Auth';

    const Navigation = createAppContainer(createSwitchNavigator({
      Auth: {
        screen: AuthStack,
      },
      App: {
        screen: DrawerNav,
      },
    }, {
      initialRouteName: route
    }));


    return <Navigation />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadTokenFromStorage: () => dispatch({ type: LOAD_TOKEN })
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.driver.token
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
