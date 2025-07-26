import React, { ReactNode } from 'react';
import { View, Text, Pressable, StyleSheet, GestureResponderEvent } from 'react-native';

interface ActionButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  icons?: ReactNode;
  outline?: boolean;
}

export default function ActionButton({ onPress, title, icons, outline }: ActionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, outline && styles.outlineButton]}>
      {icons}
      <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFB703',
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 8,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: '#B872FF',
    borderWidth: 2,
  },
  outlineButtonText: {
    color: '#B872FF',
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 16,
  },
});
