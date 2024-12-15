import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const GOOGLE_CLIENT_ID = '652709953322-fi0qj0i0vqt5ruh42lm3pq44kmuulbrg.apps.googleusercontent.com';
const DISCORD_CLIENT_ID = '1316967528915927092';
const DISCORD_REDIRECT_URI = AuthSession.makeRedirectUri();


const LoginScreenAuth = ({ navigation }) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [numeroTelefonicoMovil, setNumeroTelefonicoMovil] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const isValidEmail = correoElectronico.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const handleLogin = () => {
    if (!nombreUsuario || !correoElectronico || !contrasena || !numeroTelefonicoMovil) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }
    Alert.alert('Inicio de Sesión', `Bienvenido, ${nombreUsuario}`);
    navigation.navigate('Home');
  };

    // Google Login Setup
  const [googleRequest, googleResponse, googlePromptAsync] = Google.useAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
  });

  useEffect(() => {
    if (googleResponse?.type === 'success') {
      const { authentication } = googleResponse;
      Alert.alert('Inicio de sesión con Google', `Token: ${authentication?.accessToken}`);
    }
  }, [googleResponse]);

  // Facebook Login Handler
  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        Alert.alert('Inicio de sesión cancelado');
        return;
      }
      const data = await AccessToken.getCurrentAccessToken();
      Alert.alert('Inicio de sesión con Facebook', `Token: ${data?.accessToken}`);
    } catch (error) {
      Alert.alert('Error', `Error al iniciar sesión con Facebook: ${error.message}`);
    }
  };

  // Discord Login Handler
  const handleDiscordLogin = async () => {
    const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      DISCORD_REDIRECT_URI
    )}&response_type=token&scope=identify%20email`;

    const result = await AuthSession.startAsync({ authUrl });
    if (result.type === 'success') {
      Alert.alert('Inicio de sesión con Discord', `Token: ${result.params.access_token}`);
    } else {
      Alert.alert('Inicio de sesión cancelado');
    }
  };
  

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/farmacia.jpeg')} style={styles.image} />
      <Text style={styles.title}>Inicio de Sesión</Text>

      {/* Nombre de Usuario */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de Usuario"
          placeholderTextColor="#A9A9A9"
          value={nombreUsuario}
          onChangeText={setNombreUsuario}
        />
        <Icon name="person-outline" size={24} color="#A9A9A9" />
      </View>

      {/* Correo Electrónico */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          placeholderTextColor="#A9A9A9"
          value={correoElectronico}
          onChangeText={setCorreoElectronico}
        />
        <Icon
          name={isValidEmail ? 'checkmark-circle' : 'ellipse-outline'}
          size={24}
          color={isValidEmail ? '#4CAF50' : '#A9A9A9'}
        />
      </View>

      <Text style={styles.footerTextPassword}>
        ¿Olvidaste tu contraseña?{' '}
        <Text style={styles.footerLink} onPress={() => navigation.navigate('ResetPassword')}>
          Recuperar Contraseña
        </Text>
      </Text>

      {/* Contraseña */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="#A9A9A9"
          value={contrasena}
          onChangeText={setContrasena}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#A9A9A9" />
        </TouchableOpacity>
      </View>

      {/* Número Telefónico Móvil */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Número Telefónico Móvil"
          keyboardType="phone-pad"
          placeholderTextColor="#A9A9A9"
          value={numeroTelefonicoMovil}
          onChangeText={setNumeroTelefonicoMovil}
        />
        <Icon name="call-outline" size={24} color="#A9A9A9" />
      </View>

      {/* Botón de Inicio de Sesión */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient
          colors={['#1C3150', '#4D6489']} // Colores del degradado
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Inicia sesión</Text>
        </LinearGradient>

      </TouchableOpacity>

      {/* Íconos de redes sociales */}
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity>
          <Icon name="logo-facebook" size={32} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="logo-google" size={32} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="logo-discord" size={32} color="#7289da" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
      {/* Google Login Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#DB4437' }]}
        disabled={!googleRequest}
        onPress={() => googlePromptAsync()}
      >
      </TouchableOpacity>

      {/* Facebook Login Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#3b5998' }]}
        onPress={handleFacebookLogin}
      >
      </TouchableOpacity>

      {/* Discord Login Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#7289da' }]}
        onPress={handleDiscordLogin}
      >
      </TouchableOpacity>
    </View>

      <Text style={styles.footerText}>
        ¿No tienes cuenta?{' '}
        <Text style={styles.footerLink} onPress={() => navigation.navigate('Register')}>
          Regístrate
        </Text>
      </Text>
      <Text style={styles.footerTextTC}>
        Conoces los{' '}
        <Text style={styles.footerLinkTC} onPress={() => navigation.navigate('TC')}>
          Terminos y Condicones
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
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerTextPassword: {
    fontSize: 11,
    color: '#555',
    width: '100%',
    textAlign: 'right',
  },
  footerText: {
    marginTop: 16,
    fontSize: 14,
    color: '#555',
  },
  footerTextTC: {
    marginTop: 16,
    fontSize: 14,
    color: '#555',
  },
  footerLink: {
    color: '#003DA5',
    fontWeight: 'bold',
  },
  footerLinkTC: {
    color: '#000000',
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 16,
    width: '60%',
  },
});

export default LoginScreenAuth;