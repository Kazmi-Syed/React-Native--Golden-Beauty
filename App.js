import { StyleSheet, Text, View , Image , SafeAreaView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Nails from './src/screens/Nails';
import Contact from './src/screens/Contact';
import Waxing from './src/screens/Waxing';
import Relaxing from './src/screens/Relaxing';
import Error from './src/screens/Error';
// import SideBar from './src/screens/SideBar';
// import { createDrawerNavigator } from 'react-navigation-drawer';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown : false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown : false}} name="Error" component={Error} />
        <Stack.Screen options={{headerShown : false}} name="Nails" component={Nails} />
        <Stack.Screen options={{headerShown : false}} name="Waxing" component={Waxing} />
        <Stack.Screen options={{headerShown : false}} name="Relaxing" component={Relaxing} />
        <Stack.Screen options={{headerShown : false}} name="Contact" component={Contact} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});


// const DrawerNavigator = createDrawerNavigator({
//   Home, 
//   Nails, 
//   Waxing , 
//   Relaxing ,
//   Contact ,
//   Error ,
// },
// {
//   contentComponent : props=> <SideBar {...props} />
// }
// )