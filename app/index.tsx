import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import products from '../Data/Products'; // Assuming this is an array of product data
import colors from '../constants/Colors';

const ProductListItem = ({ product }) => (
  <View style={styles.container}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text>{products.title}</Text>
    <Text>{products.description}</Text>
    <Text style={styles.price}>${products.price}</Text>
  </View>
);

const Index = () => {
  return (
    <FlatList
      data={products} 
      renderItem={({ item }) => <ProductListItem product={item} />} 
      keyExtractor={(item) => item.id.toString()} 
    />
  );
};

export default Index;

const styles = StyleSheet.create({
  price: {
    color: colors.light.tint,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginBottom: 10,
    padding: 10, 
  },
  image: {
    height: 150,
    width: 300,
    borderRadius: 20,
    marginBottom: 10,
  },
});
