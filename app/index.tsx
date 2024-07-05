import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import FoodLog from '../components/FoodLog';
import { Ionicons } from '@expo/vector-icons';

const FoodLogies = [
  { label: 'Salad', cal: 240, brand: 'Parsuma' },
  { label: 'Green Curry', cal: 340, brand: 'Burma Burma' },
  { label: 'Shrimp', cal: 140, brand: "Hong's" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Shivam!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/c.png')} style={styles.logo} />
        <Text style={styles.greet}>Here's a track of the food you ate today</Text>
      </View> 

      <View style={styles.footer}>
      <View style={styles.logContainer}>
          <View style={[styles.iconContainer, { backgroundColor: '#4cc9f0' }]}>
            <Ionicons name="water" size={24} color="white" />
            <Text style={styles.iconText}>6/7 glasses</Text>
          </View>
          <View style={[styles.iconContainer, { backgroundColor: '#ef476f' }]}>
            <Ionicons name="flame" size={24} color="white" />
            <Text style={styles.iconText}>1250 kcal</Text>
          </View>
        </View>
        <FlatList
          data={FoodLogies}
          renderItem={({ item }) => <FoodLog item={item} />}
          contentContainerStyle={{ gap: 5 }}
        />
        <View style={styles.addButton}>
          <Link href="/search" asChild>
            <TouchableOpacity style={styles.addButtonStyle} onPress={() => console.log('ADD FOOD pressed')}>
              <Text style={styles.buttonTitle}>ADD FOOD</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  logContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '100%'
  },
  iconContainer: {
    width: 160,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 15,
  },
  iconText: {
    marginLeft: 5,
    fontWeight: "bold",
    color: 'white',
    fontSize: 16
  },
  header: {
    alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 32,
    color: 'orange',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  addButton: {
    marginTop: 10,
    alignSelf: 'center', // Center the button horizontally
  },
  addButtonStyle: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  greet: {
    color: 'orange',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
