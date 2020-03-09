import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {reduxForm, Field} from 'redux-form';
import {LOGIN} from '../store/driver/constants';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  scrollView: {
    width: '100%',
  },
  safeArea: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  phoneNumber: {
    color: 'grey',
    marginTop: 25,
    height: 60,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    paddingLeft: 15.5,
    paddingRight: 7.5,
    marginLeft: 0,
    backgroundColor: '#f1f1f1',
    borderRadius: 7,
    width: 323,
    fontSize: 15,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  button: {
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17
  }
});


const validate = values => {
  const errors = {}

  let phone = values.phone;
  if (!phone) {
    errors.phone = 'Ошибка';
  } else if (!/^\+?[0-9\s]+$/i.test(phone)) {
    errors.phone = 'Неправильный формат';
  }

  let password = values.password;
  if (!password) {
    errors.password = 'Введите пароль';
  } else if (password.length != 6) {
    errors.password = 'Пароль должен быть минимум из 6 символов';
  }

  return errors;
}





class LoginScreen extends Component {


  renderInput({input,  meta: {touched, error}, ...restProps}) {

    return (
      <View>
    <TextInput onChangeText={input.onChange} {...restProps} />
    {touched && error && <Text>{error}</Text>}
    </View>
    )
  }

  render() {

    const {handleSubmit, error} = this.props;
    const submit = handleSubmit(LOGIN);

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageBackground source={require('../assets/images/myCards.gif')} imageStyle={{ opacity: 0.04 }} style={{ width: '100%', height: '100%', flex: 1, alignItems: "center" }} >
          <SafeAreaView style={styles.safeArea}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
              <Text style={{ fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop: 120, marginLeft: 0, color: 'rgba(42, 37, 57, 1.0)' }}>Войти</Text>
              <Field name="phone" component={this.renderInput} placeholder="Номер телефона"  style={[styles.phoneNumber]}  />
              <Field name="password" secureTextEntry={true} component={this.renderInput} placeholder="Пароль из СМС" style={[styles.phoneNumber]}  />
              {error && <Text>{error}</Text>}
              <Text style={{ fontSize: 17, color: 'gray', textAlign: 'left', marginTop: 40, marginLeft: '1%' }}>
                Ещё нет аккаунта ? <Text onPress={() => this.props.navigation.navigate('Register')} style={{ color: 'rgba(42, 153, 252, 1.0)' }}>Регистрация</Text>
              </Text>
              <View style={{ width: 323, marginTop: 45, borderRadius: 15 }}>
                <TouchableOpacity onPress={submit} style={[styles.button, { backgroundColor: 'rgba(21,146,241,1) 0%', height: 60 }]}>
                  <Text style={styles.buttonText}>Войти</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}


export default reduxForm({
  form: 'login',
  validate
})(LoginScreen)
