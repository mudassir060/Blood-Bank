import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';
function RequestCard() {
    return (
      <View style={styles.container}>
        <MyHeader title="Blood_Doner"/>
        <View style={styles.text}>
        <Text>Request Card!</Text>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    text:{
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
  export default RequestCard;

