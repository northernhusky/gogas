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
    cardRosneft: {
    width: 340,
    height: 230,
    backgroundColor: 'rgba(300,198,42,0.86)',
    borderRadius:15,
    marginTop:30,

},
    cardEko: {
    width: 340,
    height: 230,
    backgroundColor: 'rgba(255,255,255,0.77)',
    borderRadius:15,
    marginTop:30,

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    buttonEko: {
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center',
      marginLeft: '3.3%',
      bottom: '110%',
      backgroundColor: 'rgba(21,146,241,1) 0%'
    },
    buttonTextEko: {
      color: '#ffffff',
      fontSize: 25,
      fontWeight: '500',
      opacity: 0.68,
      justifyContent: 'center',
      alignItems:'center'
    },
    buttonRosneft: {
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center',
      marginLeft: '3.3%',
      bottom: '110%',
      backgroundColor: 'rgba(255,255,255,0.43)'
    },
    buttonTextRosneft: {
      color: '#c94e4e',
      fontSize: 25,
      fontWeight: '600',
      opacity: 0.43
    },
    buttonTextOrderCard: {
      color: '#278ea5',
      fontSize: 25,
      fontWeight: 'bold',
      opacity: 0.43,
      justifyContent: 'center',
      alignItems:'center',
      top: '2%',
      left: '23%',
      paddingBottom:'9%'
    }
});

export default class ChooseCardTypeScreen extends Component {
  render() {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground source={require('../assets/images/test3.gif')} imageStyle={{opacity: 0.07 }} style={{width: '100%', height: '100%', flex: 1, alignItems: "center"}} >
      <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <TouchableOpacity style={{ top: '5%', left: '0%' }} onPress={() => this.props.navigation.openDrawer()} >
        <Image source={require('../assets/images/burger.png')} imageStyle={{ opacity: 1 }} style={{ height: 20, width: 30 }} />
      </TouchableOpacity>
      <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : '20%', marginLeft: 0, color:'#002651'}}>Выберите</Text>
        <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : 0, marginLeft: 0, color:'#002651'}}>вид карты</Text>

    <View style={styles.cardRosneft} />
    <View style={{width: 323, marginTop: 0, borderRadius: 15, left:'1%'}}>
    <ImageBackground source={require('../assets/images/rosneftlogo.png')} onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" imageStyle={{opacity: 0.82}} style={{top: -180, height: 70, width: 80, margin: 0, left: '40%'}} ></ImageBackground>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Привязать карту', {name: 'Jane'})} style={[styles.buttonRosneft, {height: 60}]}>
        <Text style={styles.buttonTextRosneft}>выбрать эту карту</Text>
        </TouchableOpacity>
    </View>

    <View style={[styles.cardEko, {marginTop:-120,}]}/>
    <View style={{width: 323, marginTop: 0, borderRadius: 15, left:'1%'}}>
    <ImageBackground source={require('../assets/images/gazekosetlogo.png')} onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" imageStyle={{opacity: 0.82}} style={{top: -150, height: 30, width: 130, margin: 0, left: '31%'}} ></ImageBackground>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Получить карту', {name: 'Jane'})} style={[styles.buttonEko, {height: 60}]}>
        <Text style={styles.buttonTextEko}>выбрать эту карту</Text>
        </TouchableOpacity>
    </View>

      </ScrollView>
    </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}
