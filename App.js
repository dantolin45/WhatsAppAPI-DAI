import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, TextInput, Button, Linking, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Vibracion from './components/Vibration';

import MyQRCode from './components/MyQRCode';
export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [showQR, setShowQR] = useState(false);
  const handleSendMessage = () => {
    let url = `whatsapp://send?text=${message}&phone=+549${phoneNumber}`;
    Linking.openURL(url).then((data) => {
      console.log('WhatsApp Opened');
    }).catch(() => {
      alert('Make sure Whatsapp installed on your device');
    });
  };

  const handleSendEmail = () => {
    let url = `mailto:dantolin45@gmai.com?subject=Dale Jessik&body=Aprobame`;
    Linking.openURL(url);
  }

  const handleSendPhoneCall = () => {
    let url = `tel:+5491151180090`;
    Linking.openURL(url);
  }

  return (
    <View style={{ padding: 20, display:"flex",flex:1 }}>
      <TextInput
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
        placeholder="Ingrese su número de teléfono"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
        placeholder="Escriba su mensaje"
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Enviar mensaje por WhatsApp" onPress={handleSendMessage} />
      <Button title="Enviar email" onPress={handleSendEmail} />
      <Button title="Realizar llamada" onPress={handleSendPhoneCall} />
      <Vibracion />

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => setShowQR(!showQR)} >
          <Text style={styles.buttonText}>Mostrar QR</Text>
        </TouchableOpacity>
        {showQR && <MyQRCode />}
      </View>
      <View style={{ flex: 1, paddingTop: 100, width: 300, height: 500 }}>
        <Text> Calendario jjijiji</Text>
        <Calendar theme={{
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 16
        }} />

      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'end',
    alignItems: 'center'
  },
  button: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});