import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'orange', fontSize: 28, fontWeight: 'bold' }}>AkPortfolio</Text>
    </View>
  );
};

export default Splash;
