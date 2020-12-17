import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import ModelX from '../../assets/ModelX.jpeg';
import styles from './styles';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
    <ImageBackground 
      style={styles.image}
      source={ModelX}
      />
      <View style={styles.titles}>
      <Text style={styles.title}>Model S</Text>
      <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
    </View>
  )
}

export default CarItem;
