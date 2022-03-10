import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import HeaderTop from "../components/HeaderTop";

const WatchListScreen = () => {
  return (
    <>
      <HeaderTop moviesScreen={true} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>WatchListScreen</Text>
      </View>
      <StatusBar />
    </>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({});
