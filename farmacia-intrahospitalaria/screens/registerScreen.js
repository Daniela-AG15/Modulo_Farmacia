import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RegisterScreen = ({ navigation }) =>  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  
  const isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Text style={styles.span}>Date de alta rellenando los siguientes campos</Text>

      {/* Campo de Nombre */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#A9A9A9"
          value={name}
          onChangeText={setName}
        />
        <Icon name="person" size={24} color="#A9A9A9" />
      </View>

      {/* Campo de Email */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#A9A9A9"
          value={email}
          onChangeText={setEmail}
        />
        <Icon
          name={isValidEmail ? 'checkmark-circle' : 'ellipse-outline'}
          size={24}
          color={isValidEmail ? '#4CAF50' : '#A9A9A9'}
        />
      </View>

      {/* Campo de Contraseña */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="#A9A9A9"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Icon
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="#A9A9A9"
          />
        </TouchableOpacity>
      </View>

      {/* Confirmar Contraseña */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          secureTextEntry={!isConfirmPasswordVisible}
          placeholderTextColor="#A9A9A9"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}>
          <Icon
            name={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="#A9A9A9"
          />
        </TouchableOpacity>
      </View>

      {/* Si las contraseñas no coinciden */}
      {!passwordsMatch && confirmPassword.length > 0 && (
        <Text style={styles.errorText}>Las contraseñas no coinciden</Text>
      )}

      {/* Crear Cuenta */}
      <TouchableOpacity
        style={[styles.button, !passwordsMatch && { backgroundColor: '#42418c' }]}
        disabled={!isValidEmail || !passwordsMatch}>
    <Text style={styles.buttonText}>Crear cuenta</Text>
    </TouchableOpacity>


      {/* Footer */}
      <Text style={styles.footerText}>
        ¿Ya tienes cuenta?{' '}
        <Text style={styles.footerLink} onPress={() => navigation.navigate('Login')}>Inicia sesión</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#F5F5F5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    span: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#A6AEBF',
      marginBottom: 16,
    },
    inputContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#DDD',
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    input: {
      flex: 1,
      height: 50,
      color: '#333',
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#003DA5',
      justifyContent: 'center',
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
      fontWeight: 'bold',
      fontSize: 16,
    },
    errorText: {
      color: '#FF0000',
      fontSize: 12,
      marginBottom: 8,
    },
    footerText: {
      marginTop: 16,
      fontSize: 14,
      color: '#555',
    },
    footerLink: {
      color: '#003DA5',
      fontWeight: 'bold',
    },
});
  
export default RegisterScreen;