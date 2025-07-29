import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addtocart, RemovetoCart } from './Action';
import { useDispatch, useSelector } from 'react-redux';

const Product = ({ val }) => {
  const dispatch = useDispatch();
  const cartitems = useSelector(state => state.reducer);
  const [added, setAdded] = useState(false);

 
  const handleAdd = () => {
    dispatch(addtocart(val));
  };

  
  const handleDelete = () => {
    dispatch(RemovetoCart(val.id));
  };

  
  useEffect(() => {
    const isItemInCart = cartitems.some(item => item.id === val.id);
    setAdded(isItemInCart);
  }, [cartitems, val.id]);

  return (
    <View style={styles.card}>
      <Image source={{ uri: val.image }} style={styles.img} />
      <Text style={styles.title} numberOfLines={2}>{val.title}</Text>
      <Text style={styles.category}>{val.category}</Text>
      <Text style={styles.price}>${val.price}</Text>
      <View style={styles.buttonContainer}>
        {added ? (
          <Button title="Remove from Cart" color="#FF9800" onPress={handleDelete} />
        ) : (
          <Button title="Add to Cart" color="#FF9800" onPress={handleAdd} />
        )}
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  category: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9900',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
