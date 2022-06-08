import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default () => { 
  return (
    <>
      <View style={styles.container}>

        <View style={styles.lineTop} />

        <Image
          source={require('../assets/Cover.png')}
          style={styles.tinyLogo}
        />
        <Text 
          style={[styles.title, { paddingBottom: 0}]}>Fechar e abrir
        </Text>
        <Text 
          style={styles.title}>as mãos
        </Text>
        <TouchableOpacity 
          style={styles.button}
        >
          <Text style={styles.titleButton}>Feito!</Text>
        </TouchableOpacity>

        <View style={styles.tab}>
          <View >
            <Text style={styles.titleTab}>Séries</Text>
            <Text style={styles.textValue}>10</Text>
          </View>
          <View>
            <Text style={styles.titleTab}>Repetições</Text>
            <Text style={styles.textValue}>10</Text>
          </View>
          <View>
            <Text style={styles.titleTab}>Descanso</Text>
            <Text style={styles.textValue}>10 Seg</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  tinyLogo: {
    resizeMode: "cover",
    width: 303,
    height: 246,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Actor-Regular',
    color: '#333333',
    paddingBottom: 49,
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
  tab: {
    flexDirection: "row",
  },
  titleTab: {
    fontSize: 25,
    fontFamily: 'Actor-Regular',
    color: '#938989',
    paddingTop: 40,
    padding: 10,
  },
  textValue: {
    fontSize: 25,
    color: "#9E2D8C",
    textAlign: "center"
  },
  lineTop: {
    borderTopColor: '#E5E5E5',
    borderTopWidth: 1,
    width: "100%",
    paddingBottom: 14,
  }
})