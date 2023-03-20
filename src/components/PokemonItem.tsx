import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { INamedApiResource, IPokemon } from "pokeapi-typescript";
import { capitalize } from "../utils/capitalize";

const PokemonItem = (props: INamedApiResource<IPokemon> & { id: number }) => {
  return (
    <View style={styles.container}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`,
          }}
          style={{ height: 75, width: 50 }}
        />
      <Text>{capitalize(props.name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PokemonItem;
