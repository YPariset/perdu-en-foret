import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../core/theme';

export function GreenButton({ label = 'Test du label', ...props }) {
  return (
    <Pressable {...props} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 22,
    backgroundColor: colors.green,
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 18,
    color: colors.white,
    textAlign: 'center',
  },
});
