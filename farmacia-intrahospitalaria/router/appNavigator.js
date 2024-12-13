import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// Login
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import RegisterUserScreen from '../screens/registerUser';
import ResetPasswordScreen from '../screens/resetPassword';
// Pnatallas principales
import LoadingScreen from '../screens/loadingScreen';
import HomeScreen from '../screens/modules/homeScreen';
import TerminosYCondicionesScreen from '../screens/TC';
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
// Seccion de Solicitudes
import SolicitudesScreen from '../screens/modules/solicitudes/homeSolicitudes';
import AgregarSolicitudScreen from '../screens/modules/solicitudes/registerSolicitudes';
import ActualizarSolicitudScreen from '../screens/modules/solicitudes/updateSolicitudes';
// Seccion de Dispensacion
import HomeDispensacion from '../screens/modules/dispensacion/homeDispensacion';
import AgregarDispensacionScreen from '../screens/modules/dispensacion/registerDispensacion';
import ActualizarDispensacionScreen from '../screens/modules/dispensacion/updateDispensacion';
// Graficas
import DashboardCharts from '../screens/modules/graficas/graficas';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Pantallas Principales */}
        <Stack.Screen name="Splash" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TC" component={TerminosYCondicionesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterUser" component={RegisterUserScreen} options={{ headerShown: false }}/>
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
        {/* Solicitudes */}
        <Stack.Screen name="Solicitudes" component={SolicitudesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AgregarSolicitud" component={AgregarSolicitudScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ActualizarSolicitud" component={ActualizarSolicitudScreen} options={{ headerShown: false }}/>
        {/* Dispensacion */}
        <Stack.Screen name="Dispensacion" component={HomeDispensacion} options={{ headerShown: false }}/>
        <Stack.Screen name="AgregarDispensacion" component={AgregarDispensacionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ActualizarDispensacion" component={ActualizarDispensacionScreen} options={{ headerShown: false }}/>
        {/* Graficas */}
        <Stack.Screen name="Graficas" component={DashboardCharts} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
