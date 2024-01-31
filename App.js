import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <stack.Screen
            name="Categories"
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: "Meals",
            }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {},
});
