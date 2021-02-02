import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Blood_Doner from "../Screen/Blood_Doner";
import Blood_Request from "../Screen/Blood_Request";
import { View, Text } from 'react-native';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      //  screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === 'Blood_Doner') {
      //       iconName = focused
      //         ? 'ios-information-circle'
      //         : 'ios-information-circle-outline';
      //     }else if (route.name === 'Blood_Request') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      // })}
      >
        <Tab.Screen name="Blood_Doner" component={Blood_Doner} />
        <Tab.Screen name="Blood Request" component={Blood_Request} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// export default Navigationa;

