import React, { useState, useEffect } from 'react';
import database from '@react-native-firebase/database';
import { StyleSheet, View, Image, Text, Button, ScrollView, Pressable } from 'react-native';
import MyHeader from "../components/MyHeader";
import { connect } from "react-redux";
import { facebook_login } from "../reduxConfig/action";
import Icon from 'react-native-vector-icons/FontAwesome'

function Card(props) {
  return (
    // <Button onPress={() => props.navigation.navigate("BD_form")} title="Donte Blood" />

    <View style={styles.app} >
      <Pressable onPress={() => props.navigation.navigate("BdDataCard", { data: props.Data })}>
        <View style={styles.card} >
          <View style={styles.View1}>
            <View style={styles.col1}>
              <Text style={styles.col1_text}>{props.type}</Text>
            </View>
            <View style={styles.col2}>
              <View style={styles.col2_1}>
                <Text style={styles.col2_1_text}>{props.Data.user}</Text>
              </View>
              <View style={styles.col2_2}>
                <Text style={styles.col2_2_text}>Phone No: {props.PhNo}</Text>
                <Text style={styles.col2_2_text}>City: {props.City}</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  )
}


function Blood_Doner(props) {
  const [Donerlist, setDonerlist] = useState({})
  const [count, setCount] = useState(0)

  function NotDonate() {

  }
  useEffect((props) => {
    // if (typeof (props.user) != "undefined") {
    //     setUser(props.user)
    // }

  })
  useEffect(() => {
    if (count < 2) {
      setCount(count + 1)
      console.log("Blood Bank Counting.......", count)
      database().ref('/').child("Blood Doner List").on('value', snapshot => {
        let Donerlist = [];
        snapshot.forEach(snap => {
          Donerlist.push(snap.val())
        })
        setDonerlist(Donerlist)
      })
    }
  }), [];
  // console.log("Blood Bank database======>", Donerlist)


  return (
    <View style={styles.container}>
      <MyHeader title="Blood_Doner" />
      <ScrollView>
        {Object.keys(Donerlist).length ?
          Donerlist.map(data => {
            return <Card
              navigation={props.navigation}
              Data={data}
              type={data.Blood}
              name={data.user}
              PhNo={data.phone}
              City={data.location} />
          })
          :
          <Text>Looding.....</Text>
        }
      </ScrollView>

      <Button onPress={() => props.navigation.navigate("BD_form")}
        title="Donte Blood" />


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  text: {
    justifyContent: 'center',
    color: 'white',
    alignContent: "center",
    marginLeft: 20,
    fontWeight: "bold"
  },
  // // // // // card // // // // //
  View1: {
    flex: 1,
    margin: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  col1: {
    flex: 1,
    backgroundColor: "#DE2C2C",
    borderRadius: 16,
  },
  col1_text: {
    marginTop: 20,
    color: 'white',
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold"
  },
  col2: {
    flex: 3,
    marginLeft: 5,
  },
  col2_1: {
    flex: 1,
  },
  col2_1_text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  col2_2: {
    flex: 1.2,
  },
  col2_2_text: {
    textAlign: "center",
    fontSize: 10,
    marginTop: 3,
  },
  card: {
    backgroundColor: "white",
    margin: 13,
    marginBottom: 0,
    width: 336,
    height: 100,
    borderRadius: 16,
  }
})

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProp = (dispatch) => {
  return {
    inCerment: () => dispatch(InCerment()),
    facebook_login: () => dispatch(facebook_login()),
  }
}


export default connect(mapStateToProps, mapDispatchToProp)(Blood_Doner);

