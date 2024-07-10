import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const RecipeDetails = ({ route }) => {
    const { idMeal } = route.params;

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState("instructions")

    const fetchRecipeDetails = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            setData(response.data.meals);
            setLoading(false);
        } catch (error) {
            console.log('There is an error', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipeDetails();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <Text style={styles.loadingText}>Loading...</Text>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.idMeal.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={{ uri: item.strMealThumb }} style={styles.Image} />
                            <View style={styles.mealOrigin}>
                                <Text>Recipe: {item.strMeal}</Text>
                                <Text>Category: {item.strCategory}</Text>
                                <Text>Area: {item.strArea}</Text>
                            </View>
                            <View style={styles.recipeTabs}>
                                <View style={styles.tabButtons}>
                                    <TouchableOpacity style={[styles.tabButton, activeTab === "instructions" && styles.activeTabButton]} onPress={() => setActiveTab("instructions")}>
                                        <Text style={styles.tabText}>Instructions</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.tabButton, activeTab === "ingredients" && styles.activeTabButton]} onPress={() => setActiveTab("ingredients")}>
                                        <Text style={styles.tabText}>Ingredients</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.instructions}>
                                {
                                    activeTab === "instructions" && (
                                        <View style={styles.instructionsDetails}>
                                            <Text>{item.strInstructions}</Text>
                                        </View>
                                    )}
                                {
                                    activeTab === "ingredients" && (
                                        <View style={styles.ingredientsDetails}>
                                            <Text> {item.strIngredient1}&nbsp; || &nbsp;{item.strMeasure1}</Text>
                                            <Text> {item.strIngredient2}&nbsp; || &nbsp;{item.strMeasure1}</Text>
                                            <Text> {item.strIngredient3}&nbsp; || &nbsp;{item.strMeasure1}</Text>
                                            <Text> {item.strIngredient4}&nbsp; || &nbsp;{item.strMeasure1}</Text>
                                            <Text> {item.strIngredient5}&nbsp; || &nbsp;{item.strMeasure1}</Text>
                                            <Text> {item.strIngredient6}&nbsp; || &nbsp;{item.strMeasure1}</Text>
                                            <Text> {item.strIngredient7}&nbsp; || &nbsp;{item.strMeasure1}</Text>
                                            <Text> {item.strIngredient8}&nbsp; || &nbsp;{item.strMeasure1}</Text>
                                        </View>
                                    )}
                            </View>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    loadingText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    },
    card: {
        backgroundColor: '#f8f8f8',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    Image: {
        width: '100%',
        height: 400,
        marginBottom: 10,
    },
    mealOrigin: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#7373ff29',
        borderTopColor: '#7373ff29',
        borderTopWidth: 1,
        padding: 5,
    },
    recipeTabs: {
        margin: 2,
        justifyContent: 'space-between',
    },
    tabButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    tabButton: {
        width: 100,
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: '#c4b0ff',
        borderRadius: 5,
    },
    instructions: {
        padding: 40,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // This elevation is for Android
    },
    activeTabButton: {
        backgroundColor: '#c4b0ff',
        color: 'red',
        borderRadius: 5,
    },
    tabText: {
        color: 'black',
        textAlign: 'center',
    },
});

export default RecipeDetails;
