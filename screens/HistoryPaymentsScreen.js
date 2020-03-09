import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity,TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StyleRoot } from 'radium';

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
    discount: {
    width: 160,
    height: 50,
    backgroundColor: '#a7ff83',
    borderRadius:4,
    top:10,
    left:200,
    alignSelf: 'flex-start',
    shadowColor: "#17b978",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.14,
    shadowRadius:15.49,
},
    card: {
    width: 340,
    height: 190,
    backgroundColor: 'rgba(255, 255, 255, 0.5607843137254902)',
    borderRadius:11,
    marginTop:12,
    shadowColor: "rgba(21,146,241,1)",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15.49,
},
    phoneNumber: {
      color: 'white',
      marginTop: 25,
      height: 60,
      paddingTop: 7.5,
      paddingBottom:7.5,
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
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center'
    },
    buttonText: {
      color: 'white',
      fontSize: 17
    }
});

export default class HistoryPaymentsScreen extends Component {
    render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <ImageBackground source={require('../assets/images/test3.gif')} imageStyle={{opacity: 0.033}} style={{width: '100%', height: '100%', flex: 1, alignItems: "center"}} >
      <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <TouchableOpacity style={{ top: '5%', left: '0%' }} onPress={() => this.props.navigation.openDrawer()} >
        <Image source={require('../assets/images/burger.png')} imageStyle={{ opacity: 1 }} style={{ height: 20, width: 30 }} />
      </TouchableOpacity>
        <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : '20%', marginLeft: 0, color:'#002651' }}>История</Text>
        <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : 0, marginLeft: 0, color:'#002651'}}>транзакций</Text>

        <View style={styles.card}>
        <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginLeft: 280, top: 14, color:'#002651'}}>Дата
        </Text>
        <View style={styles.discount}>
        <Text style={{fontSize: 21, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', left: 10, top: 3, zIndex: 9999, color: '#17b978',opacity: 0.43}}>20.01.2020
        </Text>
        </View>
         <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginTop : -80, marginLeft: 20, color:'#002651'}}>Пополнение баланса
         </Text>
         <Text style={{fontSize: 43, lineHeight: 44, fontWeight: '600', textAlign: 'left', marginTop : 0, marginLeft: 20, color:'#002651'}}>1251р.
         </Text>
         <Text style={{fontSize: 17, lineHeight: 44, fontWeight: '500', textAlign: 'left', marginTop : 39, marginLeft: 20,opacity: 0.4, color:'#002651'}}>435 163 967
         </Text>
         <Text style={{fontSize: 21, lineHeight: 24, fontWeight: '200', textAlign: 'center', marginTop : -38, marginLeft: 220,opacity: 0.4, color:'#002651'}}>о248вн77
         </Text>
         <Text style={{fontSize: 21, lineHeight: 24, fontWeight: 'bold', textAlign: 'center', marginTop : -55, marginLeft: 260,color:'#17b978', opacity: 0.43}}>15:00
         </Text>
        </View>

        <View style={styles.card}>
        <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginLeft: 280, top: 14, color:'#002651'}}>Дата
        </Text>
        <View style={styles.discount}>
        <Text style={{fontSize: 21, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', left: 10, top: 3, zIndex: 9999, color: '#17b978',opacity: 0.43}}>20.01.2020
        </Text>
        </View>
         <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginTop : -80, marginLeft: 20, color:'#002651'}}>Пополнение баланса
         </Text>
         <Text style={{fontSize: 43, lineHeight: 44, fontWeight: '600', textAlign: 'left', marginTop : 0, marginLeft: 20, color:'#002651'}}>1251р.
         </Text>
         <Text style={{fontSize: 17, lineHeight: 44, fontWeight: '500', textAlign: 'left', marginTop : 39, marginLeft: 20,opacity: 0.4, color:'#002651'}}>435 163 967
         </Text>
         <Text style={{fontSize: 21, lineHeight: 24, fontWeight: '200', textAlign: 'center', marginTop : -38, marginLeft: 220,opacity: 0.4, color:'#002651'}}>о248вн77
         </Text>
         <Text style={{fontSize: 21, lineHeight: 24, fontWeight: 'bold', textAlign: 'center', marginTop : -55, marginLeft: 260,color:'#17b978', opacity: 0.43}}>15:00
         </Text>
        </View>

        <View style={styles.card}>
        <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginLeft: 280, top: 14, color:'#002651'}}>Дата
        </Text>
        <View style={styles.discount}>
        <Text style={{fontSize: 21, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', left: 10, top: 3, zIndex: 9999, color: '#17b978',opacity: 0.43}}>20.01.2020
        </Text>
        </View>
         <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginTop : -80, marginLeft: 20, color:'#002651'}}>Пополнение баланса
         </Text>
         <Text style={{fontSize: 43, lineHeight: 44, fontWeight: '600', textAlign: 'left', marginTop : 0, marginLeft: 20, color:'#002651'}}>1251р.
         </Text>
         <Text style={{fontSize: 17, lineHeight: 44, fontWeight: '500', textAlign: 'left', marginTop : 39, marginLeft: 20,opacity: 0.4, color:'#002651'}}>435 163 967
         </Text>
         <Text style={{fontSize: 21, lineHeight: 24, fontWeight: '200', textAlign: 'center', marginTop : -38, marginLeft: 220,opacity: 0.4, color:'#002651'}}>о248вн77
         </Text>
         <Text style={{fontSize: 21, lineHeight: 24, fontWeight: 'bold', textAlign: 'center', marginTop : -55, marginLeft: 260,color:'#17b978', opacity: 0.43}}>15:00
         </Text>
        </View>

        <View style={styles.card}>
        <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginLeft: 280, top: 14, color:'#002651'}}>Дата
        </Text>
        <View style={styles.discount}>
        <Text style={{fontSize: 21, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', left: 10, top: 3, zIndex: 9999, color: '#17b978',opacity: 0.43}}>20.01.2020
        </Text>
        </View>
         <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginTop : -80, marginLeft: 20, color:'#002651'}}>Пополнение баланса
         </Text>
         <Text style={{fontSize: 43, lineHeight: 44, fontWeight: '600', textAlign: 'left', marginTop : 0, marginLeft: 20, color:'#002651'}}>1251р.
         </Text>
         <Text style={{fontSize: 17, lineHeight: 44, fontWeight: '500', textAlign: 'left', marginTop : 39, marginLeft: 20,opacity: 0.4, color:'#002651'}}>435 163 967
         </Text>
         <Text style={{fontSize: 21, lineHeight: 24, fontWeight: '200', textAlign: 'center', marginTop : -38, marginLeft: 220,opacity: 0.4, color:'#002651'}}>о248вн77
         </Text>
         <Text style={{fontSize: 21, lineHeight: 24, fontWeight: 'bold', textAlign: 'center', marginTop : -55, marginLeft: 260,color:'#17b978', opacity: 0.43}}>15:00
         </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}
