import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomLinearGradient from "./common/CustomLinearGradient";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";
import { useAudio } from "@/src/contexts/AudioContext";

interface IMusicModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const MusicModal = (props: IMusicModalProps) => {
  const { isModalVisible, toggleModal } = props;
  const { 
    currentSong, 
    isPlaying, 
    position, 
    duration, 
    isLoading,
    playSound, 
    pauseSound, 
    resumeSound, 
    seekTo 
  } = useAudio();

  const handlePlayPause = async () => {
    if (isPlaying) {
      await pauseSound();
    } else {
      await resumeSound();
    }
  };

  const handleSliderChange = async (value: number | number[]) => {
    const seekPosition = Array.isArray(value) ? value[0] : value;
    await seekTo(seekPosition);
  };

  const formatTime = (timeInMs: number) => {
    const totalSeconds = Math.floor(timeInMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!currentSong) {
    return null;
  }

  return (
    <Modal
      style={{ backgroundColor: "#fff" }}
      isVisible={isModalVisible}
      coverScreen={false}
      deviceWidth={1}
      hideModalContentWhileAnimating={true}
      swipeDirection={["down", "up"]} // Swipe down to close
      onSwipeComplete={toggleModal} // Close when swiped down
      backdropOpacity={0.5} // Background overlay
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={500}
      animationOutTiming={500}
    >
      <CustomLinearGradient>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <Pressable onPress={toggleModal}>
              <SimpleLineIcons name="arrow-down" size={14} color="#fff" />
            </Pressable>
            <SimpleLineIcons name="options-vertical" size={14} color="#fff" />
          </View>        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Image
            width={wp("85%")}
            height={wp("75%")}
            borderRadius={15}
            source={{
              uri: currentSong.img,
            }}
          />
        </View>

        <View>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "400" }}>
            {currentSong.title}
          </Text>
          <Text style={{ color: "gray", fontSize: 15 }}>
            {currentSong.desc}
          </Text>
        </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 20,
              justifyContent: "space-between",
            }}
          >
            <View style={[styles.optionBar, { gap: 25 }]}>
              <AntDesign name="like2" size={18} color="#fff" />
              <AntDesign name="dislike2" size={18} color="#fff" />
            </View>
            <View style={styles.optionBar}>
              <Entypo name="add-to-list" size={18} color="#fff" />
              <Text style={{ color: "#fff" }}>Save</Text>
            </View>
            <View style={styles.optionBar}>
              <Entypo name="forward" size={18} color="#fff" />
              <Text style={{ color: "#fff" }}>Share</Text>
            </View>
          </View>          <View style={{ marginVertical: 20 }}>
            <Slider
              value={position}
              minimumValue={0}
              maximumValue={duration || 1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={handleSliderChange}
              thumbStyle={{
                backgroundColor: '#FFFFFF',
                width: 20,
                height: 20,
              }}
              trackStyle={{
                height: 4,
                borderRadius: 2,
              }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ color: "#fff", fontSize: 10, paddingHorizontal: 15 }}
              >
                {formatTime(position)}
              </Text>
              <Text
                style={{ color: "#fff", fontSize: 10, paddingHorizontal: 15 }}
              >
                {formatTime(duration)}
              </Text>
            </View>
          </View>          <View style={styles.musicIcon}>
            <Entypo name="line-graph" size={34} color="#fff" />
            <Entypo name="controller-jump-to-start" size={36} color="#fff" />
            <Pressable
              style={{
                padding: 12,
                borderRadius: wp("50%"),
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={handlePlayPause}
              disabled={isLoading}
            >
              <MaterialCommunityIcons 
                name={isLoading ? "loading" : (isPlaying ? "pause" : "play")} 
                size={45} 
                color="black" 
              />
            </Pressable>
            <Entypo name="controller-next" size={36} color="#fff" />
            <FontAwesome name="exchange" size={34} color="#fff" />
          </View>
        </View>
      </CustomLinearGradient>
    </Modal>
  );
};

export default MusicModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("6%"),
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: wp("3%"),
  },
  optionBar: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingHorizontal: wp("5%"),
    paddingVertical: wp("1%"),
    gap: 10,
    borderRadius: 10,
  },
  musicIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
});
