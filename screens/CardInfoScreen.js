import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity,TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StyleRoot } from 'radium';
import { CARDS_API_REQUEST } from '../store/driver/constants';
import { connect } from 'react-redux'
import Loader from '../components/Loader';

var styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF',
         flexDirection: 'column',
    },
    buttonBalance: {
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center',
      height: 60,
      width:339,
      backgroundColor: 'rgba(300,198,42,1)'
    },
    buttonHistory: {
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center',
      height: 60,
      width:339,
      backgroundColor: "rgba(255,255,255,0.5)",
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
    backgroundColor: 'rgba(255, 255, 255, 0.8607843137254902)',
    borderRadius:11,
    marginTop:20,
    shadowColor: "rgba(21,146,241,1)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.07,
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
    squares:{
      flexWrap: 'wrap',
      flexDirection:'row',
      width: '100%'
    },
    discount: {
    width: 120,
    opacity:0.97,
    height: 50,
    backgroundColor: '#a7ff83',
    borderRadius:4,
    top: '3%',
    left:230,
    alignSelf: 'flex-start',
    shadowColor: "#17b978",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.19,
    shadowRadius: 15.49,
},
    square: {
    width: 170,
    height: 170,
    borderRadius:11,
    marginTop:20,
    shadowColor: "rgba(21,146,241,1)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.07,
    shadowRadius: 15.49},
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
      fontWeight: '600',
      opacity: 0.56,
    },
    buttonHistoryText: {
      color: '#002651',
      fontSize: 22,
      opacity: 0.56,
      fontWeight: '600',
    }
});

export default class CardInfoScreen extends Component {

  render() {

  this.props.cards

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <ImageBackground source={require('../assets/images/giphy.gif')} imageStyle={{opacity: 0.07}} style={{width: '100%', height: '100%', flex: 1, alignItems: "center"}} >
      <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <TouchableOpacity style={{ top: '5%', left: '0%' }} onPress={() => this.props.navigation.openDrawer()} >
        <Image source={require('../assets/images/burger.png')} imageStyle={{ opacity: 1 }} style={{ height: 20, width: 30 }} />
      </TouchableOpacity>

        <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : '22%', marginLeft: 0, color:'#002651'}}>Карта</Text>
        <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : 0, marginLeft: 0, opacity:0.57, color:'#002651'}}>123 456 789</Text>
        <View style={styles.card}>
        <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginLeft: 231, top: 14, color:'#002651'}}>Ваша скидка
        </Text>
        <View style={styles.discount}>
        <Text style={{fontSize: 35, lineHeight: 44, fontWeight: '600', textAlign: 'left', left: 21, top: '4%', zIndex: 9999, color: '#17b978', opacity: 0.32}}>5%
        </Text>
        </View>
         <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginTop : -80, marginLeft: 20, color:'#002651'}}>Ваш текущий баланс
         </Text>
         <Text style={{fontSize: 43, lineHeight: 44, fontWeight: '600', textAlign: 'left', marginTop : 0, marginLeft: 20, color: '#17b978'}}>15222р.
         </Text>
         <Text style={{fontSize: 25, lineHeight: 44, fontWeight: '200', textAlign: 'left', marginTop : 10, marginLeft: 24,opacity: 0.4, color:'#002651'}}>о248вн77
         </Text>
         <Text style={{fontSize: 22, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : 20, marginLeft: 21,opacity: 0.17, color:'#002651'}}>123 123 123
         </Text>
         <ImageBackground source={require('../assets/images/rosneftlogo.png')} onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" imageStyle={{opacity: 0.71}} style={{top: -80, height: 70, width: 80, margin: 0, left: 250}} ></ImageBackground>
        </View>
        <View style={{marginTop: 20, borderRadius: 15,}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Главная')} style={[styles.buttonBalance]}>
            <Text style={styles.buttonText}>Пополнить баланс</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginTop: 15, borderRadius: 15,}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('История транзакций')} style={[styles.buttonHistory]}>
            <Text style={styles.buttonHistoryText}>История транзакций</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 15, borderRadius: 15,}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('История заправок')} style={[styles.buttonHistory]}>
            <Text style={styles.buttonHistoryText}>История заправок</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.squares}>
        <View style={styles.square}>
        <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginTop : 0, marginLeft: '10%', color:'#002651'}}>Сэкономлено всего
        </Text>
        <Text style={{fontSize: 43, lineHeight: 44, fontWeight: '200', textAlign: 'left', top : 20, marginLeft: '20%', color:'#002651'}}>1251р.
        </Text>
        </View>

        <View style={styles.square}>
        <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginTop : 0, marginLeft: '20%', color:'#002651'}}>В этом месяце
        </Text>
        <Text style={{fontSize: 43, lineHeight: 44, fontWeight: '200', textAlign: 'left', top : 20, marginLeft: '20%', color:'#002651'}}>1251р.
        </Text>
        </View>

        <View style={styles.square}>
        <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginTop : 0, marginLeft: '18%', color:'#002651'}}>Доход с друзей
        </Text>
        <Text style={{fontSize: 43, lineHeight: 44, fontWeight: '200', textAlign: 'left', top : 20, marginLeft: '20%', color:'#002651'}}>1251р.
        </Text>
        </View>

        <View style={styles.square}>
        <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginTop : 0, marginLeft: '10%', color:'#002651'}}>Приглашено друзей
        </Text>
        <Text style={{fontSize: 43, lineHeight: 44, fontWeight: '200', textAlign: 'left', top : 20, marginLeft: '40%', color:'#002651'}}>5
        </Text>
        </View>

         </View>

      </ScrollView>
    </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.driver.cards
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCardsList: () => dispatch({ type: CARDS_API_REQUEST })
  }
};
