import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { searchFood } from "../api/api";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

const FoodLogies = [
  { label: 'Salad', cal: 240, brand: 'Parsuma' },
  { label: 'Green Curry', cal: 340, brand: 'Burma Burma' },
  { label: 'Shrimp', cal: 140, brand: "Hong's" },
  { label: 'Burger', cal: 240, brand: 'Parsuma' },
  { label: 'Pizza', cal: 340, brand: 'Burma Burma' },
];

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const performSearch = async () => {
    if (!search.trim()) return; // Skip if search is empty or contains only spaces

    setLoading(true);
    setError(null);

    try {
      const data = await searchFood(search);
      setSearchResults(data.hints);
    } catch (error) {
      console.error('Error searching for food:', error);
      setError('Error searching for food');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href="/" asChild>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Link>
        <View style={styles.searchContainer}>
          <TextInput
            value={search}
            onChangeText={(text) => {
              setSearch(text);
              if (!text.trim()) {
                setSearchResults([]);
              }
            }}
            placeholder="Search..."
            style={styles.input}
          />
          <Button title="Search" color="#ffa500" onPress={performSearch} />
        </View>
      </View>
      <FlatList
        data={FoodLogies}
        renderItem={({ item }) => (
          <View style={styles.foodLogContainer}>
            <Text style={styles.foodLogText}>{`${item.label} - ${item.cal} kcal, ${item.brand}`}</Text>
          </View>
        )}
        keyExtractor={(item, index) => `${item.label}-${index}`}
      />
      {loading ? (
        <ActivityIndicator style={styles.loadingIndicator} size="large" color="#ffa500" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={searchResults}
          renderItem={({ item }) => <FoodListItem item={item} />}
          keyExtractor={(item, index) => `${item.food.foodId}-${index}`}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  loadingIndicator: {
    marginTop: 20,
  },
  errorText: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
  foodLogContainer: {
    backgroundColor: '#f6f6f8',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  foodLogText: {
    fontSize: 16,
  },
});

export default Search;
