import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import StyledButton from '../StyledButton';
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
      <StyledButton type="primary" content={'Custom Order'} onPress={() => console.warn('custom order pressed')} />
      <StyledButton type="secondary" content={'Existing Inventory'} onPress={() => console.warn('inventory pressed')} />
    </View>
  )
}

export default CarItem;
