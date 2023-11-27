import React, { useState } from 'react'; 
import { Calendar } from 'react-native-calendars';
import { View, TextInput, Button, Linking } from 'react-native';
import Vibracion from './components/Vibration';
export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

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
    <View style={{ padding: 20 }}>
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
      <View style={{ flex: 1, paddingTop: 200 }}>
      <Calendar theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}/>
    </View>
    </View>
  );
};
