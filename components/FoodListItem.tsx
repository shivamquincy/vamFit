import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FoodListItem = ({ item }) => {
  const { label, image, nutrients } = item.food;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.nutrientsContainer}>
          <View style={styles.nutrient}>
            <Ionicons name="flame" size={18} color="red" />
            <Text style={styles.nutrientText}>{nutrients.ENERC_KCAL} kcal</Text>
          </View>
          <View style={styles.nutrient}>
            <Ionicons name="nutrition" size={18} color="green" />
            <Text style={styles.nutrientText}>Protein: {nutrients.PROCNT}g</Text>
          </View>
          <View style={styles.nutrient}>
            <Ionicons name="nutrition" size={18} color="blue" />
            <Text style={styles.nutrientText}>Fat: {nutrients.FAT}g</Text>
          </View>
          <View style={styles.nutrient}>
            <Ionicons name="nutrition" size={18} color="orange" />
            <Text style={styles.nutrientText}>Carbs: {nutrients.CHOCDF}g</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nutrientsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  nutrient: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  nutrientText: {
    marginLeft: 5,
    fontSize: 14,
  },
});

export default FoodListItem;
