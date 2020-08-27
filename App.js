import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  JournalScreen,
  MeasuresScreen,
  TreatmentScreen,
  AddScreen,
  ProfileScreen,
} from "./screens";
import AddButton from "./components/AddButton";

// https://dribbble.com/shots/7046707-Nav-Bar-Animation

const TabNavigator = createBottomTabNavigator(
  {
    Journal: {
      screen: JournalScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="book-medical" size={24} color="#274ccd" />
        ),
      },
    },
    Measures: {
      screen: MeasuresScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="heartbeat" size={24} color="#274ccd" />
        ),
      },
    },
    Add: {
      screen: AddScreen,
      navigationOptions: {
        tabBarIcon: <AddButton />,
      },
    },
    Treatment: {
      screen: TreatmentScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="band-aid" size={24} color="#274ccd" />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="user" size={24} color="#274ccd" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
    },
  }
);

export default createAppContainer(TabNavigator);
