import React from 'react';
import { View, Image } from 'react-native';

import Logo from '../../assets/logo.png';
import Menu from '../../assets/menu.png';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Image style={styles.menu} source={Menu} />
    </View>
  )
};

export default Header;
