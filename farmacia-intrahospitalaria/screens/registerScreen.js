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

const RegisterScreen = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [nombre, setNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [curp, setCurp] = useState('');
  const [genero, setGenero] = useState('');
  const [tipoSangre, setTipoSangre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const handleRegister = () => {
    if (!nombre || !correo) {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios.');
      return;
    }

    // Generar un identificador único
    const identificador = Math.floor(1000 + Math.random() * 9000); // Número aleatorio de 6 dígitos

    const nuevaPersona = {
      id: identificador, // Agregar identificador al registro
      titulo,
      nombre,
      primerApellido,
      segundoApellido,
      curp,
      genero,
      tipoSangre,
      fechaNacimiento,
      telefono,
      correo,
    };

    // Simulación de registro exitoso
    Alert.alert(
      'Registro exitoso',
      `Se ha registrado a: ${nombre}, con el identificador ${identificador}`
    );

    // Redirigir a otra pantalla (opcional)
    navigation.navigate('RegisterUser');
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Registro</Text>
        <Text style={styles.span}>Verifique su usuario con los administradores</Text>
      </View>

      {/* Título */}
      <TextInput
        style={styles.input}
        placeholder="Título (Dr. o Dra.)"
        value={titulo}
        onChangeText={setTitulo}
      />

      {/* Nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre*"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Primer Apellido */}
      <TextInput
        style={styles.input}
        placeholder="Primer Apellido*"
        value={primerApellido}
        onChangeText={setPrimerApellido}
      />

      {/* Segundo Apellido */}
      <TextInput
        style={styles.input}
        placeholder="Segundo Apellido"
        value={segundoApellido}
        onChangeText={setSegundoApellido}
      />

      {/* CURP */}
      <TextInput
        style={styles.input}
        placeholder="CURP"
        value={curp}
        onChangeText={setCurp}
      />

      {/* Género */}
      <Text style={styles.label}>Género</Text>
      <Picker
        selectedValue={genero}
        onValueChange={(itemValue) => setGenero(itemValue)} style={styles.picker}>
        <Picker.Item label="Seleccione un género" value="" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Femenino" value="Femenino" />
        <Picker.Item label="Otro" value="Otro" />
      </Picker>

      {/* Tipo de Sangre */}
      <Text style={styles.label}>Tipo de Sangre</Text>
      <Picker
        selectedValue={tipoSangre}
        onValueChange={(itemValue) => setTipoSangre(itemValue)} style={styles.picker}>
        <Picker.Item label="Seleccione un tipo de sangre" value="" />
        <Picker.Item label="A+" value="AP" />
        <Picker.Item label="A-" value="AN" />
        <Picker.Item label="B+" value="BP" />
        <Picker.Item label="B-" value="BN" />
        <Picker.Item label="AB+" value="ABP" />
        <Picker.Item label="AB-" value="ABN" />
        <Picker.Item label="O+" value="OP" />
        <Picker.Item label="O-" value="ON" />
      </Picker>

      {/* Fecha de Nacimiento */}
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento (AAAA/MM/DD)*"
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
        keyboardType="numeric"
      />

      {/* Teléfono */}
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      />

      {/* Correo Electrónico */}
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico*"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />

      {/* Botón de Registro */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <LinearGradient
          colors={['#1C3150', '#4D6489']} // Colores del degradado
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Crear Registro</Text>
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
  header: {
    padding: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  span: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
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

export default RegisterScreen;