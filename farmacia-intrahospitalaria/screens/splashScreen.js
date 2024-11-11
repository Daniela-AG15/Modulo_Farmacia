import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = ({ navigation }) => {
  useEffect(() => {
    const prepare = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      SplashScreen.hideAsync();
      navigation.replace('Login');
    };

    prepare();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-3xl font-bold">Bienvenido</Text>
    </View>
  );
};

export default SplashScreenComponent;
