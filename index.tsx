import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Product from './Product';

const Index = () => {
  const [state, setState] = useState([]);

  const ApiCall = async () => {
    const result = await fetch('https://fakestoreapi.com/products');
    const res = await result.json();
    setState(res);
  };

  useEffect(() => {
    ApiCall();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.cardContainer}>
        {state.map((val)=><Product val={val}   />)
          
        }
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  
});

