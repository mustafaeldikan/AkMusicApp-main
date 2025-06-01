import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useAudio } from "@/src/contexts/AudioContext";

interface IMusicPlayCardProps {
  toggleModal: () => void;
}

const MusicPlayCard = (props: IMusicPlayCardProps) => {
  const { toggleModal } = props;
  const { currentSong, isPlaying, pauseSound, resumeSound } = useAudio();

  const handlePlayPause = async () => {
    if (isPlaying) {
      await pauseSound();
    } else {
      await resumeSound();
    }
  };

  // Don't show the card if no song is selected
  if (!currentSong) {
    return null;
  }

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
          uri: currentSong.img,
        }}
      />
      <View style={styles.musicList}>
        <Text style={{ color: "#fff", fontSize: 12, fontWeight: "400" }}>
          {currentSong.title}
        </Text>
        <Text style={{ color: "gray", fontSize: 10 }}>
          {currentSong.desc}
        </Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        <Pressable onPress={handlePlayPause}>
          <MaterialCommunityIcons 
            name={isPlaying ? "pause" : "play"} 
            size={25} 
            color="#fff" 
          />
        </Pressable>
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
