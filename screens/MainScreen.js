import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

var styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF',
         flexDirection: 'column',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    scrollView: {
      width:'100%',
    },
    safeArea:{
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    button: {
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center',
      height: 60,
      width: '80%',
      left: '10%',
      backgroundColor: 'rgba(21,146,241,1) 0%',
    },
    buttonRegister: {
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center',
      height: 60,
      width: '80%',
      left: '10%',
      backgroundColor: 'rgba(300,198,42,1)'
    },
    buttonText: {
      color: 'white',
      fontSize: 17
    }
});

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ImageBackground source={require('../assets/images/bglogos.jpg')} imageStyle={{opacity: 0.43}} style={{width: '100%', height: '100%', flex: 1, alignItems: "center"}} >
      <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'center', marginTop : 180,color: 'rgba(42, 37, 57, 1.0)'}}>Привет!</Text>
        <Text style={{fontSize: 17,textAlign: 'center', marginTop: 30, lineHeight:24, width:'80%', left: '11%',color: 'rgba(42, 37, 57, 1.0)'}}>
          Наш сервис поможет сэкономить на топливе <Text style={{fontWeight: 'bold',color: 'rgba(42, 37, 57, 1.0)'}}>до 20%!</Text>
          </Text>
          <Text style={{textAlign: 'center', marginTop:10,width:'80%', left: '11%',fontSize: 17,lineHeight:24,color: 'rgba(42, 37, 57, 1.0)'}}>
          Всего за время работы мы сэкономили <Text style={{fontWeight: 'bold', color: 'rgba(41, 37, 57, 1.0)'}}>13413554р.</Text>
          </Text>
          <Text style={{textAlign: 'center', marginTop:20,width:'80%', left: '11%',fontSize: 17,lineHeight:24,color: 'rgba(42, 37, 57, 1.0)'}}>
          Для начала зарегистрируйтесь по номеру телефона {"\n"}или войдите в свой аккаунт
          </Text>
      <View style={{marginTop: 45, borderRadius: 15,}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={[styles.buttonRegister]}>
          <Text style={styles.buttonText}>Регистрация</Text>
          </TouchableOpacity>
      </View>
      <View style={{marginTop: 17.5}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={[styles.button]}>
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
