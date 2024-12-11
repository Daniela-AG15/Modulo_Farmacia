import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

const RegisterUserScreen = ({ navigation }) => {
  const [personaID, setPersonaID] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [numeroTelefonicoMovil, setNumeroTelefonicoMovil] = useState('');
  const [estatus, setEstatus] = useState('');

  const handleCreateUser = () => {
    if (!personaID || !nombreUsuario || !correoElectronico || !contrasena) {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios.');
      return;
    }

    const nuevoUsuario = {
      personaID,
      nombreUsuario,
      correoElectronico,
      contrasena,
      numeroTelefonicoMovil,
      estatus,
    };

    Alert.alert(
      'Usuario Creado',
      `El usuario ${nombreUsuario} ha sido creado con éxito.`
    );

    // Redirigir a otra pantalla si es necesario
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear Usuario</Text>
      <Text style={styles.span}>Completa los campos para registrar un nuevo usuario</Text>

      {/* Persona ID */}
      <TextInput
        style={styles.input}
        placeholder="Identificador*"
        keyboardType="numeric"
        value={personaID}
        onChangeText={setPersonaID}
      />

      {/* Nombre de Usuario */}
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario*"
        value={nombreUsuario}
        onChangeText={setNombreUsuario}
      />

      {/* Correo Electrónico */}
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico*"
        keyboardType="email-address"
        value={correoElectronico}
        onChangeText={setCorreoElectronico}
      />

      {/* Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña*"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />

      {/* Número Telefónico Móvil */}
      <TextInput
        style={styles.input}
        placeholder="Número Telefónico Móvil"
        keyboardType="phone-pad"
        value={numeroTelefonicoMovil}
        onChangeText={setNumeroTelefonicoMovil}
      />

      {/* Estatus */}
        <Text style={styles.label}>Estatus</Text>
      <View>
        <Picker
          selectedValue={estatus}
          onValueChange={(itemValue) => setEstatus(itemValue)} style={styles.picker}>
          <Picker.Item label="Seleccione un estatus" value="" />
          <Picker.Item label="Activo" value="Activo" />
          <Picker.Item label="Inactivo" value="Inactivo" />
          <Picker.Item label="Bloqueado" value="Bloqueado" />
          <Picker.Item label="Suspendido" value="Suspendido" />
        </Picker>
      </View>

      {/* Botón para Crear Usuario */}
      <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
      <LinearGradient
          colors={['#1C3150', '#4D6489']} // Colores del degradado
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Crear Usuario</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    padding: 16,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  span: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    backgroundColor: '#FFF',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
},
  label: {
    fontSize: 14,
    color: '#555',
    padding: 8,
  },
  buttonGradient: {
    width: '100%',
    height: 50, // Altura del botón
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // Bordes redondeados
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterUserScreen;