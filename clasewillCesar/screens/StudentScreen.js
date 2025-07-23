import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import StudentCard from '../components/StudentCard';

export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StudentCard
        name="César Landaverde"
        age={21}
        image={require('../assets/student.jpg')} // Cambia por la ruta real de tu imagen
      />
      <Button title="Volver a la pantalla principal" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
