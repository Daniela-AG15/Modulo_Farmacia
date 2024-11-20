import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import ResetPasswordScreen from '../screens/resetPassword';
import SplashScreen from '../screens/splashScreen';
import HomeScreen from '../screens/modules/homeScreen';
// Seccion Consumibles
import ConsumiblesScreen from '../screens/modules/consumibles/homeConsumibles';
import AgregarConsumibleScreen from '../screens/modules/consumibles/comsumiblesRegister';
import ActualizarConsumibleScreen from '../screens/modules/consumibles/updateConsumible';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Consumibles" component={ConsumiblesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='AgregarConsumible' component={AgregarConsumibleScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ActualizarConsumible' component={ActualizarConsumibleScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
