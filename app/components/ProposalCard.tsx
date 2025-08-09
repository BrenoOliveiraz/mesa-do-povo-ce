import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ProposalCard({ title, subTitle, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#e0e0e0', borderless: false }}
      style={({ pressed }) => [
        styles.card,
        Platform.OS === 'ios' && pressed ? { opacity: 0.9 } : {}
      ]}
    >
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          {subTitle ? (
            <Text style={styles.subTitle}>{`TPAF: ${subTitle}`}</Text>
          ) : null}
          <Text style={styles.hint}>Toque para ver detalhes</Text>
        </View>
        <Feather name="chevron-right" size={22} color="#999" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 90, 
    maxHeight: 80, 
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 2,
  },
  subTitle: {
    fontSize: 13,
    color: '#666666',
  },
  hint: {
    fontSize: 11,
    color: '#999999',
    marginTop: 4,
  },
});
