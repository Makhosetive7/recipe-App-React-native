import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from "react-native";

export default function Footer() {
    return (
        <View>
            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <Text style={styles.footerHeader}>Contact Developer</Text>
                    <Text>Email: sibandaMakhosetive7@gmail.com</Text>
                    <Text>Phone: +263 782 082 120</Text>
                    <Text>Address: Bulawayo, Zimbabwe</Text>
                    <Text>Creator: Frontend developer</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerHeader}>Follow Developer</Text>
                <TouchableOpacity onPress={() => handleLink('https://github.com/Makhosetive7')}>
                    <Text>Github</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLink('https://twitter.com/Makhoe_7')}>
                    <Text>Twitter</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLink('https://makhosetive7-portfolio.netlify.app/')}>
                    <Text>Portfolio</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerHeader}>Subscribe</Text>
                <View style={styles.subscribeForm}>
                    <TextInput style={styles.input} type="email" name="email" placeholder="Your email" required />
                    <Button style={styles.button} title='submit' />
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerHeader}>Legal</Text>
                <Text>© 2024 Food-Recipe-App. All rights reserved.</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    footer: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#7373ff29',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    footerHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    subscribeForm: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginRight: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
    },
})