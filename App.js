import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Platform, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <View style={{padding:16, backgroundColor:'green'}}>
          <Text>Search</Text>
        </View>

        <View style={{flex: 1, backgroundColor:'blue'}}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
