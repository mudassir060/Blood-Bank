import React, { useState, useEffect } from 'react';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import database from '@react-native-firebase/database';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const facebook_login=()=>{
    return(dispatch)=>{
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function (result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    let { data } = AccessToken.getCurrentAccessToken()
                        .then((data) => {
                            console.log("data====>", data)
                            fetch(`https://graph.facebook.com/me?access_token=${data.accessToken}&fields=id,name,email,picture.type(large)`)
                                .then((res) => res.json())
                                .then((user) => {
                                    dispatch({ type: "SETUSER", payload:user})
                                    database().ref('/').child(`App Users/${user.id}`).set(user)
                                    alert(`Welcome to Blood Bank App ${user.name}`)
                                    console.log("user===>", user)
                                })
                        })
                    console.log(
                        "Login success with permissions: " +
                        result.grantedPermissions.toString()
                    );
                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        );
    }
}

const br_set_data = (data) => {
    return (dispatch) => {
        console.log("data")
        dispatch({ type: "BR_SET_DATA", payload: data })
    }
}
const dr_set_data = (data) => {
    return (dispatch) => {
        console.log("data")
        dispatch({ type: "DR_SET_DATA", payload: data })
    }
}
const InCerment=()=>{
    return {
        type:"INCREMENT",
    };
};
const get_users=()=>{
    return (dispatch) => {
      let users=[];
      database().ref('/').child('user').on('child_added',(data)=>{
        users.push(data.val())
        console.log("firebase.database==>",data.val())
        dispatch({type:"SETFIERBASEUASERS",payload:users })
      })
      }
    }
export { 
    // set_data,
    InCerment,
    facebook_login,
    br_set_data,
    dr_set_data
 }   