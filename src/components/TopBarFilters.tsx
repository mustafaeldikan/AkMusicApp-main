import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { topBarFilter } from "@/src/constants/data";
import COLORS from "@/src/themes/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const TopBarFilters = () => {
  return (
    <View style={styles.topBar}>
      <FlatList
        horizontal={true}
        data={topBarFilter}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.optionBar}>
            <Text style={{ color: "#fff" }}>{item}</Text>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default TopBarFilters;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: wp("3%"),
  },
  optionBar: {
    flexDirection: "row",
    backgroundColor: COLORS.transparentBlack,
    paddingHorizontal: wp("5%"),
    paddingVertical: wp("2%"),
    marginHorizontal: wp("2%"),
    borderRadius: 5,
  },
});
