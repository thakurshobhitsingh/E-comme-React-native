import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { useSelector } from 'react-redux';

const Header = () => {
  const [Count, setCount] = useState(0);
  const cartdata = useSelector((state) => state.reducer); 

  useEffect(() => {
    setCount(cartdata.length);
  }, [cartdata]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchWrapper}>
        <FontAwesome name="search" size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          placeholder="Search products..."
          placeholderTextColor="#666"
          style={styles.searchInput}
        />
        <AntDesign name="scan1" size={22} color="#555" style={styles.scanIcon} />
      </View>

      <TouchableOpacity style={styles.iconWrapper}>
        <MaterialIcons name="keyboard-voice" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.cartWrapper}>
        <Feather name="shopping-cart" size={26} color="#fff" />
        <View style={styles.cartBadge}>
          <Text style={styles.cartBadgeText}>{Count}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    flex: 1,
    paddingHorizontal: 10,
    marginRight: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
  },
  scanIcon: {
    marginLeft: 8,
  },
  iconWrapper: {
    marginHorizontal: 8,
  },
  cartWrapper: {
    marginLeft: 8,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#ff4000ff',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
