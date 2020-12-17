import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = ({ car }) => {

  return (
    <View style={styles.carContainer}>
      <ImageBackground 
        style={styles.image}
        source={car.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{car.name}</Text>
        <Text style={styles.subtitle}>{car.tagline}{' '}
          <Text style={styles.subtitleCTA}>{car.taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton type="primary" content={'Custom Order'} onPress={() => console.warn('custom order pressed')} />
        <StyledButton type="secondary" content={'Existing Inventory'} onPress={() => console.warn('inventory pressed')} />
      </View>
    </View>
  )
}

export default CarItem;
