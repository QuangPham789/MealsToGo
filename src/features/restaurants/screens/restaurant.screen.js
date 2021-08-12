import React from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1,
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
padding: 16px, backgroundColor: "green"
`;

const RestaurantListContainer = styled(View)`
padding: 16, flex: 1, backgroundColor: "blue"
`;
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantsInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
