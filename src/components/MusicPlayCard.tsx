import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface IMusicPlayCardProps {
  toggleModal: () => void;
}

const MusicPlayCard = (props: IMusicPlayCardProps) => {
  const { toggleModal } = props;
  return (
    <Pressable
      android_ripple={{ color: "red" }}
      style={[styles.musicCard, { backgroundColor: "#1e1e1e" }]}
      onPress={toggleModal}
    >
      <Image
        width={wp("15%")}
        height={wp("10%")}
        source={{
          uri: "https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
        }}
      />
      <View style={styles.musicList}>
        <Text style={{ color: "#fff", fontSize: 12, fontWeight: "400" }}>
          Sabki Baaratein Aayi
        </Text>
        <Text style={{ color: "gray", fontSize: 10 }}>
          4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...
        </Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        {/* <SimpleLineIcons name="options-vertical" size={12} color="#fff" /> */}
        <MaterialCommunityIcons name="play" size={25} color="#fff" />
      </View>
    </Pressable>
  );
};

export default MusicPlayCard;

const styles = StyleSheet.create({
  musicCard: {
    padding: wp("3%"),
    flexDirection: "row",
    height: hp("8%"),
    gap: 20,
  },
  musicList: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 1,
  },
});
