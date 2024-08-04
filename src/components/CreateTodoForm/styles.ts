import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
    position: 'relative',
    bottom: 25,
  },
  input: {
    flex: 1,
    borderRadius: 5,
    marginLeft: 24,
    paddingLeft: 16,
    borderColor: 'red',
  },
  button: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    borderRadius: 5,
    marginRight: 24,
    backgroundColor: '',
  },
});
