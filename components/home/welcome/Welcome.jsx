import React from "react";
import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Joe</Text>
        <Text style={styles.userName}>Find Your Perfect Job</Text>
      </View>
    </View>
  );
};

export default Welcome;
