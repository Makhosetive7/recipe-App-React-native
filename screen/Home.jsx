import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity, Linking, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import Footer from '../components/Footer';
import PopularMeals from '../components/PopularMeals';

export default function Home() {
    const handlePress = () => {
        Linking.openURL('https://www.themealdb.com');
    };

    const [fontsLoaded] = useFonts({
        'Rajdhani-Regular': require('../assets/fonts/Rajdhani-Regular.ttf'),
        'Orbitron-Regular': require('../assets/fonts/Orbitron-Regular.ttf'),
    });

    // Data for the FlatList
    const benefitsData = [
        { key: "Explore diverse cuisines." },
        { key: "Spark new meal ideas." },
        { key: "Easy recipe search." },
        { key: "Healthy meal options." },
        { key: "Clear cooking instructions." },
        { key: "Save favorite recipes." },
        { key: "Connect with cooks." },
        { key: "Save on groceries." },
        { key: "Customize for needs." },
        { key: "Discover culinary insights." },
    ];

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.imageContainer}>
                    <View style={styles.shadowContainer}>
                        <Image
                            style={styles.bannerImage}
                            source={{ uri: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.overlay}>
                        <Text style={styles.bannerDetails1}>Unleash Culinary Skills</Text>
                        <Text style={styles.bannerDetails2}>Explore mouthwatering dishes. Cook anytime.</Text>
                    </View>
                </View>
                <View style={styles.about}>
                    <View style={styles.statement}>
                        <Text style={styles.statementHeader}>Statement</Text>
                        <Text style={styles.paragraph}>
                            Indulge in culinary creativity! With{" "}
                            <TouchableOpacity onPress={handlePress}>
                                <Text style={styles.link}>
                                    <Text style={styles.italic}>www.themealdb.com</Text>
                                </Text>
                            </TouchableOpacity>
                            {" "}as our guiding star, our website curates an exquisite collection of
                            recipes to ignite your imagination and elevate your dining experience.
                            From the bold flavors of street food to the refined elegance of
                            gourmet cuisine, we showcase the best of culinary innovation and
                            tradition from around the world. Whether you're looking for quick and
                            easy recipes for busy weeknights or impressive dishes for special
                            occasions, our platform has you covered. Join our culinary community
                            and unleash your creativity in the kitchen, inspired by the culinary
                            expertise and creativity of www.themealdb.com. It's time to discover
                            new flavors, experiment with ingredients, and create culinary
                            masterpieces that dazzle the taste buds!
                        </Text>
                    </View>
                    <View style={styles.benefits}>
                        <Text style={styles.benefitsHeader}>Benefits</Text>
                        <FlatList
                            data={benefitsData}
                            renderItem={({ item }) => (
                                <Text style={styles.benefitItem}>
                                    {item.key}
                                </Text>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    <View style={styles.popularMeals}>
                        <Text style={styles.popularMealsHeader}>Popular Meals</Text>
                        <PopularMeals />
                    </View>
                    <View>
                        <Footer />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
    },
    scrollContainer: {
        flexGrow: 1,
    },
    imageContainer: {
        margin: 10,
        height: 500,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#7373ff29',
        borderRadius: 10,
    },
    shadowContainer: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        elevation: 10,
        borderWidth: 1,
        borderColor: '#7373ff29',
        borderRadius: 10,
    },
    bannerImage: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
    },
    bannerDetails1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#c4b0ff',
        textAlign: 'center',
        fontFamily: 'Rajdhani-Regular',
    },
    bannerDetails2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Orbitron-Regular',
    },
    about: {
        margin: 10,
        borderWidth: 1,
        borderColor: '#7373ff29',
        borderRadius: 10,
        padding: 10,
    },
    statement: {
        marginBottom: 10,
    },
    statementHeader: {
        textAlign: "center",
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#c4b0ff',
    },
    benefits: {
        marginBottom: 10,
    },
    benefitsHeader: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        color: '#c4b0ff',
    },
    benefitItem: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 24,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    italic: {
        fontStyle: 'italic',
    },
    popularMealsHeader: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        color: '#c4b0ff',
        marginBottom: 10,
    }
});
