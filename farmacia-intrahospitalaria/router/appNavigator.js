import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// Login
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import ResetPasswordScreen from '../screens/resetPassword';
// Pnatallas principales
import LoadingScreen from '../screens/loadingScreen';
import HomeScreen from '../screens/modules/homeScreen';
// Seccion Consumibles
import ConsumiblesScreen from '../screens/modules/consumibles/homeConsumibles';
import AgregarConsumibleScreen from '../screens/modules/consumibles/registerConsumibles';
import ActualizarConsumibleScreen from '../screens/modules/consumibles/updateConsumible';
// Seccion de Lotes
import LotesScreen from '../screens/modules/lotes/homeLotes';
import AgregarLoteScreen from '../screens/modules/lotes/registerLote';
import ActualizarLoteScreen from '../screens/modules/lotes/updateLote';
// Seccion de Medicamentos
import MedicamentosScreen from '../screens/modules/medicamentos/homeMedicamentos';
import AgregarMedicamentoScreen from '../screens/modules/medicamentos/registerMedicamentos';
import ActualizarMedicamentoScreen from '../screens/modules/medicamentos/updateMedicamentos';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Pnatallas Principales */}
        <Stack.Screen name="Splash" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        {/* Consumibles */}
        <Stack.Screen name="Consumibles" component={ConsumiblesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='AgregarConsumible' component={AgregarConsumibleScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ActualizarConsumible' component={ActualizarConsumibleScreen} options={{headerShown: false}}/>
        {/* Lotes */}
        <Stack.Screen name="Lotes" component={LotesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AgregarLote" component={AgregarLoteScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ActualizarLote" component={ActualizarLoteScreen} options={{ headerShown: false }}/>
        {/* Medicamentos */}
        <Stack.Screen name="Medicamentos" component={MedicamentosScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AgregarMedicamento" component={AgregarMedicamentoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ActualizarMedicamento" component={ActualizarMedicamentoScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
