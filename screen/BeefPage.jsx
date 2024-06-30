<View style={styles.footerSection}>
<Text style={styles.footerHeader}>About Page</Text>
<Text>Delicious recipes at your fingertips. Discover, cook, and enjoy!</Text>
</View>

<View style={styles.footerSection}>
<Text style={styles.footerHeader}>Contact Developer</Text>
<Text>Email: sibandaMakhosetive7@gmail.com</Text>
<Text>Phone: +263 782 082 120</Text>
<Text>Address: Bulawayo, Zimbabwe</Text>
<Text>Creator: Frontend developer</Text>
</View>

<View style={styles.footerSection}>
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


<View style={styles.footerSection}>
<Text style={styles.footerHeader}>Legal</Text>
<Text>© 2024 Food-Recipe-App. All rights reserved.</Text>
</View>

<View style={styles.footerSection}>
<Text style={styles.footerHeader}>Subscribe</Text>
<View style={styles.subscribeForm}>
    <input style={styles.input} type="email" name="email" placeholder="Your email" required />
    <button style={styles.button} type="submit">Subscribe</button>
</View>
</View>