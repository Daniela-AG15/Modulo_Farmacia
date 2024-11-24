import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const progress = useRef(new Animated.Value(0)).current;
  const [message, setMessage] = useState('');

  const messages = [
    'Cuidamos de tu salud con tecnología avanzada.',
    'El bienestar del paciente es nuestra prioridad.',
    'Hospital PrivilegeCare: calidad y confianza.',
    'Estamos aquí para ti, 24/7.',
    'Innovación al servicio de tu salud.',
  ];

  useEffect(() => {
    // Barra de progreso
    Animated.timing(progress, {
      toValue: 1,
      duration: 10000, // Duración
      useNativeDriver: false, // Necesario para animar el estilo de ancho
    }).start(() => {
      navigation.replace('Login');
    });

    // Cambiar mensajes
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setMessage(messages[randomIndex]);
    }, 2000);

    // Limpiar intervalo 
    return () => clearInterval(interval);
  }, [progress, navigation]);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cargando...</Text>
      <View style={styles.progressBar}>
        <Animated.View style={[styles.progressFill, { width }]} />
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E1E19E',
  },
  text: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressBar: {
    width: '80%',
    height: 10,
    backgroundColor: '#BBB',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default LoadingScreen;