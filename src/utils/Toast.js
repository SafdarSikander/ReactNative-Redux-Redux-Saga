import Toast from 'react-native-simple-toast';

export const toast = (message) => {
  if (message) {
    Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
  }
};
