import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const LoginScreen = ({ navigation }: any) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1: Phone, 2: OTP

  const handleSendOTP = async () => {
    if (phone.length < 10) return Alert.alert('Error', 'Invalid Phone');
    // API Call to /send-otp
    setStep(2);
  };

  const handleVerify = async () => {
    if (otp === '123456') {
      // Mock login success logic
      navigation.navigate('Profile');
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyMessagingApp</Text>
      {step === 1 ? (
        <>
          <Input placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
          <Button title="Continue" onPress={handleSendOTP} />
        </>
      ) : (
        <>
          <Input placeholder="Enter 6-digit OTP" value={otp} onChangeText={setOtp} keyboardType="number-pad" />
          <Button title="Verify & Login" onPress={handleVerify} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#FFF' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20, textAlign: 'center', color: '#0055FF' }
});
