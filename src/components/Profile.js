import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import MyHeader from "./MyHeader";
import { connect } from "react-redux";

function Profile(props) {
  return (
    <View >
      <MyHeader title="Profile" />

      <View style={styles.Div1}>
        <Image
          source={{ uri: props.user.picture.data.url }}
          style={{ width: 100, height: 100, borderRadius: 30,  }}
          />
          </View>
      <View style={styles.Div}>
          <View style={styles.Div2}>
          <Text style={styles.Div2_text}>
            {props.user.name}</Text>
          </View>
      </View>
      <View>
      <Text>{props.user.id}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  // container:{
  //   flex:1,
  // },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Div:{
    flexDirection: 'row',
  },
  Div1:{
    // flex:1,
    justifyContent: 'center',
    alignContent: "center",
    // margin: 20,
  },
  Div2:{
    flex:2,
    justifyContent: 'center',
  },
  Div2_text:{
    fontWeight: "bold",
    fontSize:18
  },

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


export default connect(mapStateToProps, mapDispatchToProp)(Profile);



