import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ISongList } from "@/src/types/common.types";
import { useAudio } from "@/src/contexts/AudioContext";

interface ISongCardProps {
  item: ISongList;
  onPress?: () => void;
}

const SongCard = (props: ISongCardProps) => {
  const { item, onPress } = props;
  const { playSound } = useAudio();

  const handlePress = async () => {
    if (onPress) {
      onPress();
    } else {
      // Play the song
      await playSound(item);
    }
  };

  return (
    <Pressable style={styles.musicCard} onPress={handlePress}>
      <Image
        width={wp("15%")}
        height={wp("10%")}
        source={{
          uri: item.img,
        }}
      />
      <View style={styles.musicList}>
        <Text style={{ color: "#fff", fontSize: 12, fontWeight: "400" }}>
          {item.title}
        </Text>
        <Text style={{ color: "gray", fontSize: 10 }}>{item.desc}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
      </View>
    </Pressable>
  );
};

export default SongCard;

const styles = StyleSheet.create({
  musicCard: {
    padding: wp("3%"),
    paddingHorizontal: wp("4%"),
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
