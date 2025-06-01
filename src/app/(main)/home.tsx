import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { playlistArr, songList } from "@/src/constants/data";
import CustomScreenWrapper from "@/src/components/common/CustomScreenWrapper";
import SongCardGridView from "@/src/components/SongCardGridView";
import SongCard from "@/src/components/SongCard";
import TopBarFilters from "@/src/components/TopBarFilters";
import MusicPlayCard from "@/src/components/MusicPlayCard";
import { useState } from "react";
import MusicModal from "@/src/components/MusicModal";
import COLORS from "@/src/themes/colors";

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderSongCardGrid = () => {
    return (
      <FlatList
        horizontal={true}
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 15,
          paddingStart: wp("4%"),
          paddingEnd: wp("4%"),
        }}
        data={playlistArr}
        renderItem={({ item, index }) => (
          <SongCardGridView item={item} key={index} />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    );
  };

  const renderSongList = () => {
    return (
      <View>
        {songList.map((item, index) => (
          <SongCard item={item} key={index} />
        ))}
      </View>
    );
  };

  return (
    <CustomScreenWrapper>
      <StatusBar backgroundColor={COLORS.pitchBlack} />
      <View style={styles.headerBar}>
        <View>
          <Text style={{ color: COLORS.white }}>Music</Text>
        </View>
        <View>
          <AntDesign name="search1" size={20} color={COLORS.white} />
        </View>
      </View>

      <ScrollView style={styles.container}>
        <TopBarFilters />

        <View style={{ marginTop: wp("5%") }}>
          <Text style={styles.sectionTitle}>From your library</Text>
          {renderSongCardGrid()}
        </View>

        <View style={{ marginTop: wp("5%") }}>
          <Text style={styles.sectionTitle}>Artist list</Text>
          {renderSongCardGrid()}
        </View>

        <View style={{ marginTop: wp("5%") }}>
          <Text style={styles.sectionTitle}>Resent Watch</Text>
          {renderSongList()}
        </View>

        <View style={{ marginTop: wp("5%") }}>
          <Text style={styles.sectionTitle}>Populer Songs</Text>
          {renderSongList()}
        </View>
      </ScrollView>
      <MusicPlayCard toggleModal={() => setIsModalVisible(!isModalVisible)} />
      <MusicModal
        isModalVisible={isModalVisible}
        toggleModal={() => setIsModalVisible(!isModalVisible)}
      />
    </CustomScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: wp("2.5%"),
    paddingHorizontal: wp("4%"),
  },
  container: {
    flex: 1,
    // paddingLeft: wp('6%')
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginHorizontal: wp("4%"),
  },
});
