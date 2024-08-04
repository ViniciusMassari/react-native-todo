import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  taskInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    gap: 8,
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  number: {
    color: '#fff',
    borderRadius: 8,
    paddingEnd: 8,
    paddingStart: 8,
    paddingBottom: 2,
    paddingTop: 2,
  },
});
