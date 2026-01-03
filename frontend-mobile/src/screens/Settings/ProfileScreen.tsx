import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  const handleSave = () => {
    // API Call to PUT /profile
    console.log('Saved:', { name, about });
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Full Name" value={name} onChangeText={setName} />
      <Input placeholder="About" value={about} onChangeText={setAbout} />
      <Button title="Save Profile" variant="secondary" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#FFF' }
});
