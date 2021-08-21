import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>JOHN DOE'S MUSIC</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        placeholderTextColor="grey"
      />
      <TouchableOpacity
        onPress={() => alert('Thank You, Check Your Email')}
        style={styles.Button}>
        <Text style={styles.buttontext}>Request Mail When Live</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAD02C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 11,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 300,
  },
  input: {
    height: 40,
    margin: 12,
    borderColor: 'black',
    borderWidth: 2,
  },
  Button: {
    backgroundColor: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 8,
  },
  buttontext: {
    margin: 5,
    fontSize: 20,
    color: '#fff',
  },
});
