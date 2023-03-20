import { View, Text, Image } from "react-native";
import React from "react";
import { ScreenProps } from "../Router";
import { useQuery } from "react-query";
import PokeAPI from "pokeapi-typescript";

export interface DetailsScreenProps {
  name: string;
}

const DetailsScreen = ({ route }: ScreenProps<"Details">) => {
  const { data: pokemon, isLoading } = useQuery(
    ["pokemon", route.params.name],
    () => PokeAPI.Pokemon.fetch(route.params.name)
  );

  if (isLoading) return <Text>Loading</Text>;

  return (
    <View>
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          style={{ height: 250 }}
        />
      {pokemon.types.map(({ type }) => (
        <Text key={type.name}>{type.name}</Text>
      ))}
    </View>
  );
};

export default DetailsScreen;
