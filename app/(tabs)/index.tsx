
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello React Native</ThemedText>
        <HelloWave />
      </ThemedView>
   
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 8,
    padding: 10
  }
  
  
});
