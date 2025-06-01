import { LikeImg, LoveImg } from "@/src/assets/images";
import CustomScreenWrapper from "@/src/components/common/CustomScreenWrapper";
import MusicModal from "@/src/components/MusicModal";
import MusicPlayCard from "@/src/components/MusicPlayCard";
import SongCardGridView from "@/src/components/SongCardGridView";
import SongPlaylistCard from "@/src/components/SongPlaylistCard";
import { playlistArr } from "@/src/constants/data";
import COLORS from "@/src/themes/colors";
import { IPlayList } from "@/src/types/common.types";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LibraryScreen = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderTopBarFilterButtons = () => {
    return (
      <View style={styles.topBar}>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <Text style={{ color: "gray" }}>Recent activity</Text>
          <SimpleLineIcons name="arrow-down" size={14} color="gray" />
        </Pressable>
        <Pressable onPress={() => setIsGridView(!isGridView)}>
          {isGridView ? (
            <Ionicons name="grid" size={15} color={COLORS.white} />
          ) : (
            <Ionicons name="grid-outline" size={15} color={COLORS.white} />
          )}
        </Pressable>
      </View>
    );
  };

  const renderLikeLibrary = () => {
    if (isGridView) {
      return (
        <Pressable
          android_ripple={{ color: "red" }}
          style={styles.musicCardGrid}
        >
          <Image
            width={wp("42%")}
            height={hp("18%")}
            blurRadius={10}
            source={{
              uri: LikeImg,
            }}
          />
          <View style={styles.musicList}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              Liked Music
            </Text>
            <Text style={{ color: "gray", fontSize: 12 }}>Auto playlist</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <SimpleLineIcons
              name="options-vertical"
              size={12}
              color={COLORS.white}
            />
          </View>
        </Pressable>
      );
    }

    return (
      <Pressable android_ripple={{ color: "red" }} style={styles.musicCard}>
        <Image
          width={wp("16%")}
          height={wp("14%")}
          source={{
            uri: LoveImg,
          }}
        />
        <View style={styles.musicList}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 14,
              fontWeight: "400",
            }}
          >
            Liked Music
          </Text>
          <Text style={{ color: "gray", fontSize: 12 }}>Auto playlist</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <SimpleLineIcons
            name="options-vertical"
            size={12}
            color={COLORS.white}
          />
        </View>
      </Pressable>
    );
  };

  const renderLibraryList = (item: IPlayList) => {
    if (isGridView) {
      return <SongCardGridView item={item} onPress={() => {}} />;
    }
    return <SongPlaylistCard item={item} />;
  };

  return (
    <CustomScreenWrapper>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.optionBar}>
            <Text style={{ color: COLORS.white }}>Playlist</Text>
          </View>
          <View style={styles.optionBar}>
            <Text style={{ color: COLORS.white }}>Songs</Text>
          </View>
          <View style={styles.optionBar}>
            <Text style={{ color: COLORS.white }}>Albums</Text>
          </View>
          <View style={styles.optionBar}>
            <Text style={{ color: COLORS.white }}>Artists</Text>
          </View>
        </View>

        {renderTopBarFilterButtons()}

        <View style={isGridView && styles.cardView}>{renderLikeLibrary()}</View>

        <FlatList
          key={isGridView ? "grid" : "list"} // Force re-render when isGridView changes
          numColumns={isGridView ? 2 : 1} // Ensure numColumns is 1 when not in isGridView
          columnWrapperStyle={
            isGridView ? { justifyContent: "space-between" } : null
          }
          data={playlistArr}
          renderItem={({ item, index }) => renderLibraryList(item)}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      <MusicPlayCard toggleModal={() => setIsModalVisible(!isModalVisible)} />
      <MusicModal
        isModalVisible={isModalVisible}
        toggleModal={() => setIsModalVisible(!isModalVisible)}
      />
    </CustomScreenWrapper>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp("6%"),
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: wp("3%"),
  },
  optionBar: {
    flexDirection: "row",
    backgroundColor: COLORS.transparentBlack,
    paddingHorizontal: wp("5%"),
    paddingVertical: wp("1.5%"),
    gap: 10,
    borderRadius: 5,
  },
  cardView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  musicCardGrid: {
    width: wp("42%"),
    marginVertical: hp("1%"),
    gap: 4,
  },
  musicCard: {
    paddingVertical: wp("3%"),
    flexDirection: "row",
    height: hp("9%"),
    gap: 20,
  },
  musicModalCard: {
    padding: wp("3%"),
    flexDirection: "row",
    height: hp("8%"),
    gap: 20,
    backgroundColor: COLORS.darkGray,
  },
  musicList: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 1,
  },
  active: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Black with 20% opacity
  },
});
