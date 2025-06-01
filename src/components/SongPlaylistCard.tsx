import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { IPlayList } from "../types/common.types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SimpleLineIcons } from "@expo/vector-icons";

interface ISongPlaylistCardProps {
  item: IPlayList;
  onPress?: () => void;
}

const SongPlaylistCard = (props: ISongPlaylistCardProps) => {
  const { item, onPress } = props;

  const isSingleImg = (item: IPlayList) => {
    return !(item.img1 && item.img2 && item.img3 && item.img4);
  };

  return (
    <Pressable
      android_ripple={{ color: "red" }}
      style={styles.musicCard}
      onPress={onPress}
    >
      <View style={{ width: wp("16%"), height: wp("14%") }}>
        {isSingleImg(item) ? (
          <Image
            width={wp("16%")}
            height={wp("14%")}
            source={{
              uri: item.img1,
            }}
          />
        ) : (
          <>
            <View style={{ flexDirection: "row" }}>
              <Image
                width={wp("8%")}
                height={wp("7%")}
                source={{
                  uri: item.img1,
                }}
              />
              <Image
                width={wp("8%")}
                height={wp("7%")}
                source={{
                  uri: item.img2,
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                width={wp("8%")}
                height={wp("7%")}
                source={{
                  uri: item.img3,
                }}
              />
              <Image
                width={wp("8%")}
                height={wp("7%")}
                source={{
                  uri: item.img3,
                }}
              />
            </View>
          </>
        )}
      </View>
      <View style={styles.musicList}>
        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "400" }}>
          {item.title}
        </Text>
        <Text style={{ color: "gray", fontSize: 12 }}>{item.desc}</Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
      </View>
    </Pressable>
  );
};

export default SongPlaylistCard;

const styles = StyleSheet.create({
  musicCard: {
    paddingVertical: wp("3%"),
    flexDirection: "row",
    height: hp("9%"),
    gap: 20,
  },
  musicList: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 1,
  },
});
