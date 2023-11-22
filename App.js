import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent'; // Para WhatsApp

// Puedes importar otras librerías para SMS y llamadas aquí

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {

    SendIntentAndroid.sendText({
      text: message,
      type: SendIntentAndroid.TEXT_PLAIN,
      title: 'Enviar mensaje por WhatsApp',
      phoneNumber: `+549${phoneNumber}`,
    });

  };
  const handleSendEmail = () => {
    SendIntentAndroid.sendMail({
      subject: "Dale Jessik",
      text: "Aprobame",
      title: 'Enviar mensaje por Mail',
      email: "dantolin45@gmai.com"
    })
  }
  const handleSendSMS=()=>{
    SendIntentAndroid.sendSms({
      phoneNumber:"+5491151180090", 
      text:"SMS body text here",
    });
  }

  const handleSendPhoneCall=()=>{
    SendIntentAndroid.sendPhoneCall("+5491151180090", true);
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
      <Button title="Enviar mensaje" onPress={handleSendMessage} />
    </View>
  );
};