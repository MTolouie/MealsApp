import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import {store} from "./store/redux/store";
const stack = createNativeStackNavigator();
const drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <drawer.Navigator
      screenOptions={{
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "All The Categories",
          drawerIcon: ({ color, size, focused }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorite Foods",
          drawerIcon: ({ color, size, focused }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </drawer.Navigator>
  );
};

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{ headerShown: false }}
            />
            <stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </stack.Navigator>
        </NavigationContainer>
      </Provider>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {},
});
