import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity,TextInput, ScrollView, SafeAreaView, Image } from 'react-native';
import Constants from 'expo-constants';

var styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF',
         flexDirection: 'column',
    },
    scrollView: {
      width:'100%',
    },
    safeArea:{
      flex: 1,
      marginTop: Constants.statusBarHeight,

    },
    phoneNumber: {
      color: 'grey',
      marginTop: 25,
      height: 60,
      paddingTop: 7.5,
      paddingBottom:7.5,
      paddingLeft: '21%',
      paddingRight: 7.5,
      marginLeft: 0,
      backgroundColor: '#f1f1f1',
      borderRadius: 7,
      width: 323,
      fontSize:19,
      shadowColor: "rgba(21,146,241,1)",
      shadowOffset: {
      	width: 0,
      	height: 18,
      },
      shadowOpacity: 0.03,
      shadowRadius: 15.49,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    button: {
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center'
    },
    buttonText: {
      color: '#c94e4e',
      fontSize: 22,
      fontWeight: '500',
      opacity: 0.56,
    },
    buttonTextGetCard: {
      color: '#c94e4e',
      fontSize: 22,
      fontWeight: 'bold',
      opacity: 0.56,
      justifyContent: 'center',
      alignItems:'center',
      top: '2%',
      left: '23%',
      paddingBottom:'9%'
    }

});

export default class OrderCardScreen extends Component {
  render() {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground source={require('../assets/images/test4.gif')} imageStyle={{opacity: 0.07}} style={{width: '100%', height: '100%', flex: 1, alignItems: "center"}} >
      <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <TouchableOpacity style={{ top: '5%', left: '0%' }} onPress={() => this.props.navigation.openDrawer()} >
        <Image source={require('../assets/images/burger.png')} imageStyle={{ opacity: 1 }} style={{ height: 20, width: 30 }} />
      </TouchableOpacity>
        <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : 60, marginLeft: 0, color:'#002651'}}>Получить</Text>
        <Text style={{fontSize: 37, lineHeight: 37, fontWeight: 'bold', textAlign: 'left', marginTop : 5, marginLeft: 0, color:'#002651'}}>карту</Text>
        <View style={{ flex: 1, backgroundColor: 'rgba(300,198,42,0.82)', paddingBottom: '7%', borderRadius: 8, marginTop:20, shadowColor: "rgba(300,198,42,1)",
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.43,
        shadowRadius: 15.49,}}>
        <Text style={{fontSize:15 ,color:'#002651', textAlign: 'center', marginTop:30, paddingLeft:'3%'}}>
        Для заказа карты нужно внести
        </Text>
        <Text style={{fontSize:16 ,color:'#002651', textAlign: 'center', marginTop:10, fontWeight:'bold',}}>
        предоплату 500р<Text style={{fontSize:16 ,color:'#002651', textAlign: 'center', marginTop:10, fontWeight:'500',}}>,</Text>
        </Text>
        <Text style={{fontSize:15 ,color:'#002651', textAlign: 'center', marginTop:10, paddingLeft:'3%', paddingRight:'3%'}}>
        которая будет зачислена на вашу карту
        </Text>
        </View>
        <Text style={{fontSize:17 ,color:'#002651', textAlign: 'center', marginTop:30,}}>
        Если у вас еще нет бонусной карты,
        </Text>
        <Text style={{fontSize:17 ,color:'#002651', textAlign: 'center', marginTop:10, fontWeight:'bold',}}>
        просто введите ваш адрес.
        </Text>
        <TextInput placeholder="Введите ваш адрес" onFocus={this.onFocusChange} style={[styles.phoneNumber]}/>

      <View style={{width: 323, marginTop: 28, borderRadius: 15}}>
          <TouchableOpacity style={[styles.button, {      backgroundColor: 'rgba(300,198,42,1)'
, height: 60}]}>
          <Text style={styles.buttonText}>Заказать карту</Text>
          </TouchableOpacity>
      </View>

      <Text style={{fontSize:17 ,color:'#002651', textAlign: 'center', marginTop:30,}}>
      Если у вас уже есть карта, то вы можете
      </Text>
      <Text onPress={() => this.props.navigation.navigate('Привязать карту', {name: 'Jane'})} style={styles.buttonTextGetCard}>Привязать карту
      </Text>
      </ScrollView>
    </SafeAreaView>
        </ImageBackground>
      </View>

    );
  }
}
