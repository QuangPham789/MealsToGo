import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, SafeAreaView, Platform, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight() }}>
        <View style={{ padding: 16, backgroundColor: 'green' }}>
          <Searchbar placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery} />
        </View>

        <View style={{ padding: 16, flex: 1, backgroundColor: 'blue' }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusbar style='auto' />
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
