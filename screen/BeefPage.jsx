import React from 'react';
import { ScrollView,SafeAreaView, StyleSheet, View } from 'react-native';

const BeefPage = ({}) => (





    <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            hello world
          </View>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
  }
})

export default BeefPage;
