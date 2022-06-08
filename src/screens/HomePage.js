import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default () => { 

  const navigation = useNavigation();

	function handleClickNavigation(){
    navigation.navigate('Exercicio');
	}

	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/preload.png')}
				style={styles.tinyLogo}
			/>
			<Text 
				style={styles.title}>Olá, Lorena!
			</Text>
			<Text style={styles.subtitle}>Vamos iniciar o seu tratamento? :)</Text>
			<TouchableOpacity 
				onPress={handleClickNavigation}
				style={styles.button}
			>
			<Text style={styles.titleButton}>Iniciar tratamento</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  tinyLogo: {
    resizeMode: "cover",
    height: 182,
    width: 300,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Actor-Regular',
    color: '#333333',
  },
  subtitle: {
    fontSize: 25,
    fontFamily: 'ABeeZee-Regular',
    textAlign: 'center',
    paddingTop: 49,
    paddingBottom: 49,
    lineHeight: 24,
    color: '#333333',
  },
  button: {
    width: 284,
    height: 48,
    backgroundColor: '#5B3FFF',
    borderRadius: 7,
  },
  titleButton: {
    fontSize: 25,
    fontFamily: 'Actor-Regular',
    textAlign: 'center',
    paddingVertical: 5,
    color: '#fff'
  },
})