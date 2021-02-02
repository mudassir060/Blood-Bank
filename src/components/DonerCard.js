import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';
function DonerCard() {
    return (
      <View >
        <MyHeader title="Blood_Doner"/>
        <View style={styles.text}>
        <Text>Doner Card!</Text>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    // container:{
    //   flex:1,
    // },
    text:{
      justifyContent: 'center',
      alignItems: 'center',
    }
  })
  export default DonerCard;

