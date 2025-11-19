import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/navbar';
import RoundedGrid from './components/roundedgrid';
import BoxLayout from './components/boxLayout';
import RoundedBtmButton from './components/bottomRounded';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <BoxLayout />
      {/* <RoundedBtmButton /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
