import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/TERRAlogo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo ao SuperApp</Text>
      <TextInput
        placeholder="Usuário"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        color="black" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#029f5a',
  },
  logo: {
    width: 400,
    height: 200,
    marginBottom: -16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontFamily: 'Arial', 
    color: 'white', 
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
    color: '#333', 
    backgroundColor: 'white', 
  },
});

export default LoginScreen;
