import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import MyHeader from "../components/MyHeader";
function BdDataCard(props) {
  let data = props.route.params.data
  return (
    <View style={styles.container}>
      <MyHeader title="Blood Doner Profile" />
      <View style={styles.div1}>
        <Image
          source={{ uri: props.route.params.data.Profile }}
          style={{ width: 150, height: 150, borderRadius: 50 }}
        />
        <Text style={styles.name}>{props.route.params.data.user}</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: '#ecf0f1' }}>
        {/* <---------------------Blood---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Blood</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{data.Blood}</Text>
          </View>
        </View>
        {/* <---------------------Age---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Age</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{data.age} Year</Text>
          </View>
        </View>
        {/* <---------------------Phone Number---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Phone No</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{data.phone}</Text>
          </View>
        </View>
        {/* <---------------------Donate Date---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Donate Date</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{data.Bonate_Date.slice(4, 17)}</Text>
          </View>
        </View>
        {/* <---------------------Adress---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Adress</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{data.location.slice(0, 19)}</Text>
          </View>
        </View>

      </View>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    width: 356,
  },
  div1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DE2C2C',
  },
  name: {
    color: 'white',
    margin: 10,
    fontSize: 26,
    fontWeight: "bold"
  },
  CardText: {
    margin: 15,
    fontSize: 16,
    fontWeight: "bold"
  },
  Card: {
    backgroundColor: "white",
    margin: 13,
    marginBottom: 0,
    width: 336,
    height: 50,
    borderRadius: 16,
    flexDirection: 'row',
  }
})
export default BdDataCard;

