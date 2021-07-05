import React from "react";
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "../data/space";
import islamQuestions from "../data/islam";
import tauheedQuestions from "../data/tauheed";
import westernsQuestions from "../data/westerns";
import quranQuestions from "../data/Quran";
import salahQuestions from "../data/Salah";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Space",
          questions: spaceQuestions,
          color: "#36b1f0"
        })
      }
    />
       <RowItem
      name="Islam"
      color="#024239"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Islam",
          questions: islamQuestions,
          color: "#024239"
        })
      }
    />
    <RowItem
      name="Tauheed"
      color="#2fe8f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Tauheed",
          questions: tauheedQuestions,
          color: "#2fe8f0"
        })
      }
    />
    <RowItem
      name="Westerns"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Westerns",
          questions: westernsQuestions,
          color: "#799496"
        })
      }
    />
       <RowItem
      name="Quran"
      color="#096129"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Quran",
          questions: quranQuestions,
          color: "#096129"
        })
      }
    />
    <RowItem
      name="Salah"
      color="#975b13"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Salah",
          questions: salahQuestions,
          color: "#975b13"
        })
      }
    />
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);
