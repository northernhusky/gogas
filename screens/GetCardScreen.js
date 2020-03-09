import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity,TextInput, ScrollView, SafeAreaView, Image } from 'react-native';
import ReactDOM from 'react-dom';
import Constants from 'expo-constants';

var styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF',
         flexDirection: 'column',
    },
    cardNameField: {
      color: 'grey',
      top: -155,
      height: 60,
      paddingTop: 7.5,
      paddingBottom:7.5,
      paddingLeft: '31%',
      paddingRight: 7.5,
      marginLeft: '3%',
      borderRadius: 7,
      width: 323,
      fontSize:24,
      shadowColor: "rgba(21,146,241,1)",
      shadowOffset: {
      	width: 0,
      	height: 9,
      },
      shadowOpacity: 0.12,
      shadowRadius: 15.49,
    },
    cardNumberField: {
      color: 'grey',
      marginTop: -100,
      height: 60,
      paddingTop: 7.5,
      paddingBottom:7.5,
      paddingLeft: '28%',
      paddingRight: 7.5,
      marginLeft: '2%',
      borderRadius: 7,
      width: 323,
      fontSize:24,
      shadowColor: "rgba(21,146,241,1)",
      shadowOffset: {
      	width: 0,
      	height: 9,
      },
      shadowOpacity: 0.12,
      shadowRadius: 15.49,
    },
    scrollView: {
      width:'100%',
    },
    safeArea:{
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    card: {
    width: 340,
    height: 230,
    backgroundColor: 'rgba(255, 255, 255, 0.257843137254902)',
    borderRadius:15,
    marginTop:30,
    shadowColor: "rgba(21,146,241,1)",
    shadowOffset: {
    	width: 0,
    	height: 19,
    },
    shadowOpacity: 0.17,
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
      alignItems:'center',
      marginLeft: 0,
      width:333,
      backgroundColor: 'rgba(21,146,241,1) 0%'
    },
    buttonText: {
      color: '#a1eafb',
      fontSize: 22,
      fontWeight: '500',
      opacity: 0.96,
      justifyContent: 'center',
      alignItems:'center'
    },
    buttonTextOrderCard: {
      color: '#278ea5',
      fontSize: 22,
      fontWeight: 'bold',
      opacity: 0.63,
      justifyContent: 'center',
      alignItems:'center',
      top: '2%',
      left: '25%',
      paddingBottom:'9%'
    }
});

export default class GetCardScreen extends Component {
  render() {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground source={require('../assets/images/transaction.gif')} imageStyle={{opacity: 0.12 }} style={{width: '100%', height: '100%', flex: 1, alignItems: "center"}} >
      <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <TouchableOpacity style={{ top: '5%', left: '0%' }} onPress={() => this.props.navigation.openDrawer()} >
        <Image source={require('../assets/images/burger.png')} imageStyle={{ opacity: 1 }} style={{ height: 20, width: 30 }} />
      </TouchableOpacity>
      <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : '20%', marginLeft: 0, color:'#002651'}}>Привязать</Text>
        <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : 0, marginLeft: 0, color:'#002651'}}>карту</Text>
        <View style={styles.card} />
        <TextInput placeholder="номер карты" onFocus={this.onFocusChange} style={[styles.cardNumberField]}/>
        <TextInput placeholder="имя карты" onFocus={this.onFocusChange} style={[styles.cardNameField]}/>
      <View style={{width: 323, marginTop: 0, borderRadius: 15, left:'1%'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('')} style={[styles.button, {backgroundColor: 'rgba(21,146,241,1) 0%', height: 60}]}>
          <Text style={styles.buttonText}>Привязать карту</Text>
          </TouchableOpacity>
      </View>

      <Text style={{fontSize:17 ,color:'#002651', textAlign: 'center', marginTop:30,}}>
      Если у вас еще нет карты, то вы можете
      </Text>
      <Text onPress={() => this.props.navigation.navigate('Получить карту')} style={styles.buttonTextOrderCard}>Получить карту</Text>
      </ScrollView>
    </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}
