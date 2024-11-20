// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/farmacia.jpeg')} style={styles.image} />
      <Text style={styles.title}>Inicio de Sesión</Text>

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

      <Text style={styles.footerTextPassword}>
        ¿Olvidate tu contraseña?{' '}
        <Text style={styles.footerLink} onPress={() => navigation.navigate('ResetPassword')}>
          Recuperar Contraseña
        </Text>
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="#A9A9A9"
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#A9A9A9" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Inicia sesión</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-facebook" size={24} color="#4267B2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-discord" size={24} color="#5865F2" />
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        ¿No tienes cuenta?{' '}
        <Text style={styles.footerLink} onPress={() => navigation.navigate('Register')}>
          Regístrate
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 16,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#DDD',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    marginTop: 16,
    fontSize: 14,
    color: '#555',
  },
  footerTextPassword: {
    fontSize: 11,
    color: '#555',
    width: '100%',
    textAlign: 'right',
  },
  footerLink: {
    color: '#003DA5',
    fontWeight: 'bold',
  },
});

export default LoginScreen;