import React from 'react';
import { StyleSheet, Text, View, StatusBar  } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      
      <StatusBar barStyle="dark-content"/>
      <Text style={styles.text}>한국의 날씨...</Text>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6aa',
    paddingHorizontal: 30,
    paddingVertical: 100,
    justifyContent: 'flex-end',
    
  },
  text: {
    color : "#2c2c2c", 
    fontSize : 30,
  },

});
