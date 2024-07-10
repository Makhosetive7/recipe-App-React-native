import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';

const CocktailPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      setData(response.data.drinks);
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
          keyExtractor={(item) => item.idDrink.toString()}
          numColumns={1}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
              <Text style={styles.category}>{item.strCategory} || {item.strGlass}</Text>
              <Text style={styles.instructions}>{item.strInstructions.substring(0, 150)}...</Text>
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
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  category: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  instructions: {
    padding: 10,
  }
});

export default CocktailPage;
