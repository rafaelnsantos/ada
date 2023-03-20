import { Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { ScreenProps } from "../Router";
import { useQuery } from "react-query";
import PokeAPI from "pokeapi-typescript";
import PokemonItem from "../components/PokemonItem";

const HomeScreen = ({ navigation }: ScreenProps<"Home">) => {
  const { data: pokemons, isLoading } = useQuery("pokemons", () =>
    PokeAPI.Pokemon.listAll(true)
  );

  if (isLoading) return <Text>Loading</Text>;

  return (
    <FlatList
      data={pokemons?.results}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { name: item.name })}
        >
          <PokemonItem {...item} id={index + 1} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

export default HomeScreen;
