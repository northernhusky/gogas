import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Coverflow from 'react-native-coverflow';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  phoneNumber: {
    color: 'white',
    marginTop: 25,
    height: 60,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    paddingLeft: 15.5,
    paddingRight: 7.5,
    marginLeft: 0,
    backgroundColor: '#f1f1f1',
    borderRadius: 7,
    width: 323
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '500',
    opacity: 0.78,
    justifyContent: 'center',
    alignItems:'center'
  },
  safeArea: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    width: '100%'
  },
  coverflow:{
    width:340,
    flex: 1,
    marginTop: 0,
    height: 300
  },
  menuButtons: {
    width: '100%',
    flex: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 10,
    top: '0%'
  },
  scrollView: {
    width:'100%',
  },
  safeArea:{
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  button: {
    justifyContent: 'center',
    alignItems:'center',
    width: 340,
    borderRadius:12,
    height: 90,
    margin: 4,
    marginLeft: '2%',
    backgroundColor: '#002651',
    shadowColor: "rgba(21,146,241,1)",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.03,
    shadowRadius: 15.49,
  },
  buttonBlue: {
    height: 90,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: '2%',
    margin: 4,
    width: 340,
    backgroundColor: 'rgba(21,146,241,1) 0%'
  },
  buttonTextBlue: {
    color: '#a1eafb',
    fontSize: 22,
    fontWeight: '500',
    opacity: 0.96,
    justifyContent: 'center',
    alignItems:'center'
  },
});

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageBackground source={require('../assets/images/test4.gif')} imageStyle={{ opacity: 0.091,}} style={{ width: '100%', height: '100%', flex: 1, alignItems: "center",  }} >
          <SafeAreaView style={styles.safeArea}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <TouchableOpacity  style={{ left:"4%", marginTop:'9%' }} onPress={() => this.props.navigation.openDrawer()} >
            <Image source={require('../assets/images/burger.png')} imageStyle={{ opacity: 1 }} style={{ height: 20, width: 30, }} />
          </TouchableOpacity>
              <View style={{ flex: 4, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                <Text style={{ fontSize: 37, lineHeight: 44, fontWeight: '500', textAlign: 'left', left:'3%', top: '-18%', color: '#002651', opacity: 0.73, marginTop: '15%' }}>Добрый день!</Text>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Мои карты')}>
                <View style={styles.buttonBlue} >
                    <Text style={styles.buttonTextBlue}>Мои карты</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Вид карты')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Привязать карту</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Вид карты')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Получить карту</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('История транзакций')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>История транзакций</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('История заправок')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>История заправок</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Выход</Text>
                </View>
                </TouchableOpacity>
                </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}
