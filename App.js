import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEYS = "64a5b483da130e6e17afa530efe7c62b";   // https://home.openweathermap.org/api_keys  : ydsong

export default class extends React.Component {
  state = {
    isLoading: true
  };
  // 날씨 구하기
  getWeather = async(latitude, longitude) => {
    
    // http://api.openweathermap.org/data/2.5/weather?lat=37.4438253&lon=127.1523833&appid=64a5b483da130e6e17afa530efe7c62b 
    const {
      data: {
        main: { temp },
        weather
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEYS}&units=metric`
    );
    console.log(weather[0].main);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  }; 

  // 위치 구하기 : 안드로이드는 최초에 한번 위치 접근 권한 물음. 
  getLocation = async() => {
    try {
      // throw Error(); 
      await Location.requestPermissionsAsync();
      //const location = await Location.getCurrentPositionAsync();
      //const { coords } = await Location.getCurrentPositionAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      //console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
  
      console.log(latitude, longitude);

    } catch (error) {
      Alert.alert("내 위치를 찾을 수 없습니다.","위치찾기실패");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  
  render(){ 
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}  
 