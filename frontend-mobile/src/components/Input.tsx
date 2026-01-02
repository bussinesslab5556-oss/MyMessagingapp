import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'phone-pad' | 'number-pad';
}

export const Input = ({ placeholder, value, onChangeText, keyboardType = 'default' }: Props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholderTextColor="#999"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  input: { height: 50, color: '#000', fontFamily: 'Inter' }
});
