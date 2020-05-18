import React from "react";
import {StyleSheet, View, Text, StatusBar  } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName : "weather-lightning",
        gradient: ["#eb3349","#f45c43"],
        title:"천둥,비",
        subtitle:""
    },
    Drizzle: {
        iconName : "weather-hail",
        gradient: ["#89f7fe","#66a6ff"],
        title:"이슬비",
        subtitle:""
    },
    Rain: {
        iconName : "weather-rainy",
        gradient: ["#00c6fb","#005bea"],
        title:"비",
        subtitle:""
    },
    Snow: {
        iconName : "weather-partly-snowy",
        gradient: ["#7de2fc","#b9b6e5"],
        title:"눈",
        subtitle:""
    },
    Mist: {
        iconName : "weather-hail",
        gradient: ["#ddd6f3","#faaca8"],
        title:"안개",
        subtitle:""
    },
    Smoke: {
        iconName : "weather-hail",
        gradient: ["#bdc3c7","#2c3e50"],
        title:"연기",
        subtitle:""
    },
    Haze: {
        iconName : "weather-hail",
        gradient: ["#43cea2","#185a9d"],
        title:"안개",
        subtitle:""
    },
    Dust: {
        iconName : "weather-hail",
        gradient: ["#ffd89b","#19547b"],
        title:"먼지",
        subtitle:""
    },
    Fog: {
        iconName : "weather-hail",
        gradient: ["#4ca1af","#c4e0e5"],
        title:"안개",
        subtitle:""
    },
    Sand: { 
        iconName : "weather-hail",
        gradient: ["#ff9966 ","#ffedbc"],
        title:"모래",
        subtitle:""
    },
    Ash: {
        iconName : "weather-hail",
        gradient: ["#ff5f6d ","#ffc371"],
        title:"안개",
        subtitle:""
    },
    Squall: {
        iconName : "weather-hail",
        gradient: ["#ddd6f3","#faaca8"],
        title:"돌풍",
        subtitle:""
    },
    Tornado: {
        iconName : "weather-tornado",
        gradient: ["#56ab2f","#a8e063"],
        title:"폭풍",
        subtitle:""
    },
    Clear: {
        iconName : "weather-sunny",
        gradient: ["#fef253","#ff7300"],
        title:"화창",
        subtitle:""
    },
    Clouds: {
        iconName : "weather-cloudy",
        gradient: ["#d7d2cc","#304352"],
        title:"구름",
        subtitle:""
    },
    
}


export default function Weather({temp, condition}) {

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"/>
      <View style={styles.harfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={90}
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={{...styles.harfContainer, ...styles.textContainer}}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems: "center",
    
    },
    temp: {
        fontSize : 42,
        color : "white"
    },
    harfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color : "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 20

    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize : 24

    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"  /* 표시내용이 길 때 좌측정렬 */
    }
    

})