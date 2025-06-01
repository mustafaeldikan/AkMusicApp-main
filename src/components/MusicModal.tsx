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

interface IMusicModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const MusicModal = (props: IMusicModalProps) => {
  const { isModalVisible, toggleModal } = props;

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
          </View>

          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <Image
              width={wp("85%")}
              height={wp("75%")}
              borderRadius={15}
              source={{
                uri: "https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
              }}
            />
          </View>

          <View>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "400" }}>
              Sabki Baaratein Aayi
            </Text>
            <Text style={{ color: "gray", fontSize: 15 }}>
              4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...
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
          </View>

          <View style={{ marginVertical: 20 }}>
            <Slider
              style={{}}
              minimumValue={1}
              maximumValue={10}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ color: "#fff", fontSize: 10, paddingHorizontal: 15 }}
              >
                00.01
              </Text>
              <Text
                style={{ color: "#fff", fontSize: 10, paddingHorizontal: 15 }}
              >
                00.01
              </Text>
            </View>
          </View>

          <View style={styles.musicIcon}>
            <Entypo name="line-graph" size={34} color="#fff" />
            <Entypo name="controller-jump-to-start" size={36} color="#fff" />
            <View
              style={{
                padding: 12,
                borderRadius: wp("50%"),
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                // width: wp('18%'),
                // height: wp('18%'),
              }}
            >
              <MaterialCommunityIcons name="play" size={45} color="black" />
            </View>
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
