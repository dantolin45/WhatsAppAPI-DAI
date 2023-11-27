import React from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function MyQRCode() {
  const url = 'https://www.youtube.com/watch?v=-WYRPCSpk_0&ab_channel=PoliciasenAcci%C3%B3n';

  return (
    <QRCode 
      value={url}
      size={200}
    />
  );
}