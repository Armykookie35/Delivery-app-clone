import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import product from '../Data/Products'; 
import colors from '../constants/Colors';

const ProductListItem = () => (
return(
    <View style={styles.container}>
    <Image source={product.image} style={styles.image} />
    <Text>{product.title}</Text>
    <Text>{product.description}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </View>
);
);


export default ProductListItem;

const styles = StyleSheet.create({
  price: {
    color: colors.light.tint,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginBottom: 10, 
  },
  image: {
    height: 150,
    width: 300,
    borderRadius: 20,
  },
});
