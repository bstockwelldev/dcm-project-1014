import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
const HomeScreen = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error(error));
  }, []);

  return (
  <View className="flex-1 items-center justify-center bg-bg">
    <Text className="text-2xl font-heading text-privacy">
        {message}
    </Text>
  </View>
);
};

export default HomeScreen;