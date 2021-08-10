import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import React from 'react';

import { RestaurantsScreen } from './src/features/restaurants/components/screens/restaurant.screen'
export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      <RestaurantsScreen />

      <ExpoStatusbar style='auto' />
    </>
  );
}


