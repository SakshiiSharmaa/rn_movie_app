import { StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import { useSelector } from "react-redux";

const rendercarauselItem = ({ item }) => {
  return <MovieCard item={item} />;
};

const MoviesList = ({ movies }) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(movies);
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={rendercarauselItem}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MoviesList;

const styles = StyleSheet.create({});
