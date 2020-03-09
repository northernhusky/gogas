import React, { Component } from 'react';
import {Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

var styles = StyleSheet.create({
    container:{
      width: '100%',
      height: '100%',
      flex: 1,
      alignItems: "center"
    },
    scrollView: {
      width:'100%',
    },
    safeArea:{
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    phoneNumber: {
      color: 'white',
      marginTop: 40,
      height: 60,
      paddingTop: 7.5,
      paddingLeft: 15.5,
      paddingRight: 7.5,
      paddingBottom: 7.5,
      backgroundColor: '#f1f1f1',
      borderRadius: 7,
      width: 323,
      marginLeft: 0,
      fontSize: 15
    },
    focus: {
      borderColor: 'blue'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    button: {
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center',
      marginTop:20
    },
    buttonText: {
      color: 'white',
      fontSize: 17
    }
});

export default class RegistrationScreen extends Component {

  onFocusChange = () => {
    this.setState({backgroundColor: 'blue'})
  }

  render() {
    return (
       <ImageBackground source={require('../assets/images/myCards.gif')} imageStyle={{opacity: 0.05}} style={styles.container}>
         <View style={{alignItems: 'stretch'}}>
         <SafeAreaView style={styles.safeArea}>
         <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
         <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : 100, color: 'rgba(42, 37, 57, 1.0)'}}>Регистрация</Text>
         <Text style={{fontSize:17 ,color: 'gray', textAlign: 'left', marginTop:20,}}>
           Уже есть аккаунт ? <Text onPress={() => this.props.navigation.navigate('Login', {name: 'Jane'})} style={{color: 'rgba(42, 153, 252, 1.0)'}}>Войти</Text>
         </Text>
         <TextInput placeholder="Номер телефона" onFocus={this.onFocusChange} style={[styles.phoneNumber]}/>
         <View style={{width: 323, marginTop: 20, borderRadius: 15}}>
             <TouchableOpacity style={[styles.button, {backgroundColor: 'rgba(10, 28, 79, 0.8) 0%', height: 60}]}>
             <Text style={styles.buttonText}>Получить пароль по СМС</Text>
             </TouchableOpacity>
         </View>
         <TextInput secureTextEntry={true} placeholder="Пароль из СМС" onFocus={this.onFocusChange} style={[styles.phoneNumber]} />
         <View style={{width: 323, marginTop: 20, borderRadius: 15}}>
             <TouchableOpacity style={[styles.button, {backgroundColor: 'rgba(300,198,42,1)', height: 60}]}>
             <Text style={styles.buttonText}>Регистрация</Text>
             </TouchableOpacity>
         </View>
         </ScrollView>
       </SafeAreaView>
         </View>
       </ImageBackground>
    );
  }
}
