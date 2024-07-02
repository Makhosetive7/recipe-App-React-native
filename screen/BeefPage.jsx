import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';

const BeefPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Beef');
      setData(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.log('The error is:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.idMeal.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <Text style={styles.title}>{item.strMeal}</Text>
              <Text style={styles.category}>{item.strCategory} || {item.strArea}</Text>
            </View>
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#c4b0ff',
    margin: 10,
    flex: 1,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start'
  },
  category: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
    alignSelf: 'flex-start'
  },
});

export default BeefPage;
