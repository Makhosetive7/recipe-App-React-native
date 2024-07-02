import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator, Image } from "react-native";
import axios from "axios";

export default function PopularMeals() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=Beef`);
            setData(response.data.meals);
            setLoading(false);
        } catch (error) {
            console.log("The error is:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    // Slice the data array to only show the first two items
    const slicedData = data.slice(0, 2);

    return (
        <FlatList
            data={slicedData}
            horizontal
            keyExtractor={(item) => item.idMeal.toString()}
            renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                </View>
            )}
            contentContainerStyle={styles.listContainer}
        />
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    listContainer: {
        paddingHorizontal: 5,
    },
    imageContainer: {
        marginHorizontal: 5,
    },
    image: {
        width: 300, 
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
    },
});
