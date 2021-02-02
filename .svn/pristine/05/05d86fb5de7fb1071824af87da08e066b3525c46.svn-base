import Facebook_auth from './src/Config/facebook_auth'
import Blood_Doner from './src/Screen/Blood_Doner'
import Blood_Request from './src/Screen/Blood_Request'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { store } from './src/reduxConfig/store';
import BR_form from "./src/Screen/BR_form";
import BD_form from "./src/Screen/BD_form";
const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}
const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Facebook Auth" component={Facebook_auth} />
        <Stack.Screen name="BR_form" component={BR_form} />
        <Stack.Screen name="BD_form" component={BD_form} />
        <Stack.Screen name="Blood Doner" component={Blood_Doner} />
        <Stack.Screen name="Blood Request" component={Blood_Request} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;