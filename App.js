import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { Fragment } from "react";

export default function App() {
  return <Fragment>
    <StatusBar style="light"/>
    <CategoryScreen />
  </Fragment>;
}

const styles = StyleSheet.create({
  container: {
    
  },
});
