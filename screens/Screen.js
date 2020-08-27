import React from "react";
import { View, StatusBar } from "react-native";

export default Screen = ({ name }) => (
  <View style={{ flex: 1, backgroundColor: "#0030ff" }}>
    <StatusBar
      barStyle="dark-content"
      hidden={true}
      backgroundColor="#00BCD4"
      translucent={true}
    />
  </View>
);
