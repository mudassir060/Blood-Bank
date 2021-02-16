import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';


function MyHeader(props ){
  // const _goBack = () => { window.location.href = 'Blood_Doner.js';};

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

    return(
        <Appbar.Header 
        style={{backgroundColor:'#DE2C2C'}} 
        >
        {/* <Appbar.BackAction onPress={() => props.navigation.navigate("BR_form")} /> */}
        
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      <Appbar.Content 
        title={props.title}
        // subtitle="Subtitle"
        style={{alignItems: 'center'}} 
        />
        {/* <Ionicons name="ios-information-circle"size="12" color="black" />; */}
        {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      </Appbar.Header>
    )
}
export default MyHeader;