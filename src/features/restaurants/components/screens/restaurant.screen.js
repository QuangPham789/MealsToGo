import React from 'react';
import { StatusBar, SafeAreaView, Platform, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const RestaurantsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <View style={{ padding: 16, backgroundColor: 'green' }}>
                <Searchbar placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery} />
            </View>

            <View style={{ padding: 16, flex: 1, backgroundColor: 'blue' }}>
                <Text>List</Text>
            </View>
        </SafeAreaView>
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