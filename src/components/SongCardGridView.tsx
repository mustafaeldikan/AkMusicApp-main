import { IPlayList } from "@/src/types/common.types";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface ISongCardGridViewProps {
  item: IPlayList;
  onPress?: () => void;
}

const SongCardGridView = (props: ISongCardGridViewProps) => {
  const { item, onPress } = props;

  const isSingleImg = (item: IPlayList) => {
    return !(item.img1 && item.img2 && item.img3 && item.img4);
  };

  return (
    <Pressable
      android_ripple={{ color: "red" }}
      style={styles.musicCardGrid}
      onPress={onPress}
    >
      <View style={{ width: wp("42%"), height: hp("18%") }}>
        {isSingleImg(item) ? (
          <Image
            width={wp("42%")}
            height={hp("18%")}
            source={{
              uri: item.img1,
            }}
          />
        ) : (
          <>
            <View style={{ flexDirection: "row" }}>
              <Image
                width={wp("21%")}
                height={hp("9%")}
                source={{
                  uri: item.img1,
                }}
              />
              <Image
                width={wp("21%")}
                height={hp("9%")}
                source={{
                  uri: item.img2,
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                width={wp("21%")}
                height={hp("9%")}
                source={{
                  uri: item.img3,
                }}
              />
              <Image
                width={wp("21%")}
                height={hp("9%")}
                source={{
                  uri: item.img4,
                }}
              />
            </View>
          </>
        )}
      </View>
      <View>
        <Text style={{ color: "#fff", fontSize: 14, fontWeight: "400" }}>
          {item.title}
        </Text>
        <Text style={{ color: "gray", fontSize: 12 }}>{item.desc}</Text>
      </View>
    </Pressable>
  );
};

export default SongCardGridView;

const styles = StyleSheet.create({
  musicCardGrid: {
    marginVertical: hp("1%"),
    gap: 4,
  },
});
