import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, TouchableOpacity,TextInput, SafeAreaView, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StyleRoot } from 'radium';
import { CARDS_API_REQUEST } from '../store/driver/constants';
import { connect } from 'react-redux'
import Loader from '../components/Loader';

let styles = StyleSheet.create({
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
      width: '100%'
    },
    buttonBalance: {
      height: 40,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center',
      height: 60,
      backgroundColor: 'rgba(255,198,42,1)',
      width: '90%',
      flex: 1,
      top: '0%',
      left: '5%',
    },
    card: {
    width: '94%',
    height: 230,
    backgroundColor: 'rgba(246,245,244,1)',
    borderRadius:11,
    marginTop:12,
    marginLeft:'3%',
    alignSelf: 'flex-start',
    shadowColor: "rgba(21,146,241,1)",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.12,
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
    discount: {
    width: 110,
    opacity:0.97,
    height: 50,
    backgroundColor: '#ffd460',
    borderRadius:3,
    top: '3%',
    left:'69%',
    alignSelf: 'flex-start',
    shadowColor: "#ffd460",
    shadowOffset: {
      width: 0,
      height: 21,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15.49,
},
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    button: {
      height: 80,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: "rgba(255,255,255,0.5)",
      marginTop: -86,
      width: '90%',
      marginLeft:'5%',
      shadowColor: "rgba(21,146,241,1)",
      shadowOffset: {
      	width: 0,
      	height: 9,
      },
      shadowOpacity: 0.12,
      shadowRadius: 15.49,

    },
    buttonText: {
      color: '#002651',
      fontSize: 25,
      opacity: 0.31,
      fontWeight:'500',
    }
});

class MyCardsScreen extends Component {

  componentDidMount() {
    this.props.getCardsList();
  }

  _scrollBeginDrag = () => {
    this.props.getCardsList();
  }

  render() {

    if (this.props.isLoading) {
      return <Loader/>
    }

    this.props.cards


    return (

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>

      <ImageBackground source={require('../assets/images/giphy.gif')} imageStyle={{opacity: 0.07}} style={{width: '100%', height: '100%', flex: 1, alignItems: "center"}} >
      <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <TouchableOpacity  style={{ left:"4%", marginTop:'15%' }} onPress={() => this.props.navigation.openDrawer()} >
        <Image source={require('../assets/images/burger.png')} imageStyle={{ opacity: 1 }} style={{ height: 20, width: 30, }} />
      </TouchableOpacity>
        <Text style={{fontSize: 37, lineHeight: 44, fontWeight: 'bold', textAlign: 'left', marginTop : 30, marginLeft: '4%', color:'#002651',}}>Мои карты</Text>
        <Text style={{fontSize:17 ,color:'#002651', textAlign: 'center', marginTop:'6%',}}>
        Выберите карту для
        </Text>
        <Text style={{fontSize:17 ,color:'#002651', textAlign: 'center', marginTop:10, fontWeight:'bold',}}>
        пополнения баланса
        </Text>
        <Text style={{fontSize:17 ,color:'#002651', textAlign: 'center', paddingTop:'2.5%', paddingBottom:'3%'}}>
        или для подробной информации.
        </Text>
        {this.props.cards && this.props.cards.map((card) =>
          <TouchableOpacity style={{ top: '0%', left: '0%' }} onPress={() => this.props.navigation.navigate('Карта')} >
        <View onPress={() => this.props.navigation.navigate('Карта')} key={card.card_number.toString()} style={styles.card}>
        <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginLeft: '70%', top: 14, color:'#002651' }}>Ваша скидка
        </Text>
        <View style={styles.discount}>
        <Text style={{fontSize: 35, lineHeight: 44, fontWeight: '600', textAlign: 'left', left: 21, top: '4%', zIndex: 9999, color: '#d3775d', opacity: 0.32}}>{card.discount}%
        </Text>
        </View>
         <Text style={{fontSize: 15, lineHeight: 44, fontWeight: '300', textAlign: 'left', marginTop : -80, marginLeft: 20, color:'#002651'}}>Ваш текущий баланс
         </Text>
         <Text style={{fontSize: 43, lineHeight: 44, fontWeight: '600', textAlign: 'left', marginTop : 0, marginLeft: 20, color: '#17b978'}}>{card.balance}р.
         </Text>
         <Text style={{fontSize: 25, lineHeight: 44, fontWeight: '200', textAlign: 'left', marginTop : 10, marginLeft: 24,color:'#002651', opacity: 0.31}}>{card.card_name}
         </Text>
         <Text style={{fontSize: 22, lineHeight: 44, fontWeight: '500', textAlign: 'left', marginTop : 25, marginLeft: 21,color:'#002651', opacity: 0.31}}>{card.card_number}
         </Text>
         <ImageBackground source={require('../assets/images/rosneftlogo.png')} onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" imageStyle={{opacity: 0.82}} style={{top: -120, height: 70, width: 80, margin: 0, left: '70%'}} ></ImageBackground>
        </View>
        </TouchableOpacity>
      )}

        <View style={{marginTop: 100, borderRadius: 15,}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Вид карты')} style={[styles.button]}>
            <Text style={styles.buttonText}>+ Добавить карту</Text>
            </TouchableOpacity>
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
    isLoading: state.driver.isLoading,
    cards: state.driver.cards
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCardsList: () => dispatch({ type: CARDS_API_REQUEST })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCardsScreen);
