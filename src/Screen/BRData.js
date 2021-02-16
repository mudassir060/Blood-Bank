import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import MyHeader from "../components/MyHeader";
function BRData(props) {
  let Rdata = props.route.params.Rdata

  return (
    <View style={styles.container}>
      <MyHeader title="Blood Request Profile" />
      <View style={styles.div1}>
        <Image
          source={{ uri: Rdata.Profile }}
          style={{ width: 150, height: 150, borderRadius: 50 }}
        />
        <Text style={styles.name}>{Rdata.user}</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: '#ecf0f1' }}>
        <ScrollView>
        {/* <---------------------Patient Name---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Patient Name</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.name}</Text>
          </View>
        </View>
        {/* <---------------------Blood---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Blood</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.Blood}</Text>
          </View>
        </View>
        {/* <---------------------Relation---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Relation</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.relation}</Text>
          </View>
        </View>
        {/* <---------------------Gander---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Gender</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.gander}</Text>
          </View>
        </View>
        {/* <---------------------Phone Number---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Phone No</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.phone}</Text>
          </View>
        </View>
        {/* <---------------------Dedline Date---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Dedline</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.Date.slice(4, 17)}</Text>
          </View>
        </View>
        {/* <---------------------Adress---------------------> */}
        <View style={styles.Card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CardText}>Adress</Text>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={styles.CardText}>{Rdata.location.slice(0, 19)}</Text>
          </View>
        </View>
        </ScrollView>
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
export default BRData;

