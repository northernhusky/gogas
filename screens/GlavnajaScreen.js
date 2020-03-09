import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
  button: {
    height: hp('9%'),
    width: '95%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 21,
    fontWeight:'200',
  },
  safeArea: {
    width: '100%',
    height: '100%'
  },
  menuButtons: {
    width: '100%',
    flex: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 10,
    top: '-7%'
  },
  // button: {
  //   height: hp('10%'),
  //   width: '95%',
  //   borderRadius: 15
  // }
});

export default class GlavnajaScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageBackground source={require('../assets/images/gazekobg.png')} imageStyle={{ opacity: 0.43,}} style={{ width: '100%', height: '100%', flex: 1, alignItems: "center",  }} >
          <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center", width: '100%', height: '100%' }}>
            <TouchableOpacity style={{ top: '0%', left: '0%' }} onPress={() => this.props.navigation.openDrawer()} >
              <Image source={require('../assets/images/burger.png')} imageStyle={{ opacity: 1 }} style={{ height: 20, width: 30 }} />
            </TouchableOpacity>
              <View style={{ flex: 4, justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                <Text style={{ fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', left:'-10%', top: '-36%', color:'#002651', }}>Добрый день !</Text>
              </View>
              <View style={styles.menuButtons}>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Мои карты', { name: 'Jane' })} style={[styles.button, { backgroundColor: 'rgba(21,146,241,0.7) 0%' }]}>
                    <Text style={styles.buttonText}>Мои карты</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Получить карту', { name: 'Jane' })} style={[styles.button, { backgroundColor: '#002651' }]}>
                    <Text style={styles.buttonText}>Заказать карту</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Привязать карту', { name: 'Jane' })} style={[styles.button, { backgroundColor: '#002651' }]}>
                    <Text style={styles.buttonText}>Привязать карту</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Пополнить баланс', { name: 'Jane' })} style={[styles.button, { backgroundColor: '#002651' }]}>
                    <Text style={styles.buttonText}>Пополнить баланс</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('История транзакций', { name: 'Jane' })} style={[styles.button, { backgroundColor: '#002651' }]}>
                    <Text style={styles.buttonText}>История транзакций</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}
