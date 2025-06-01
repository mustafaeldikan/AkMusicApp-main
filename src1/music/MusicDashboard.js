import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const topBarFilter = [
  "Plalist",
  "Songs",
  "Albums",
  "Artists",
  "Playlists",
  "Songs",
  "Albums",
  "Artists",
];

const playlistArr = [
  {
    id: 1,
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef_b84s52sJo3fBibb7-VGenkRTabstp7Mg&s",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjPsCS75kKC6bp9xARZ60xg69rTfGTsxQRw&s",
    img3: "https://png.pngtree.com/thumb_back/fh260/background/20210918/pngtree-note-music-logo-watercolor-background-image_903000.png",
    img4: "https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
    title: "Hip-Hop Songs",
    desc: "Playlist - Akash Sahu - 12 tracks",
  },
  {
    id: 2,
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef_b84s52sJo3fBibb7-VGenkRTabstp7Mg&s",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjPsCS75kKC6bp9xARZ60xg69rTfGTsxQRw&s",
    img3: "https://png.pngtree.com/thumb_back/fh260/background/20210918/pngtree-note-music-logo-watercolor-background-image_903000.png",
    img4: "",
    title: "Hip-Hop Songs",
    desc: "Playlist - Akash Sahu - 12 tracks",
  },
  {
    id: 3,
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef_b84s52sJo3fBibb7-VGenkRTabstp7Mg&s",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjPsCS75kKC6bp9xARZ60xg69rTfGTsxQRw&s",
    img3: "https://png.pngtree.com/thumb_back/fh260/background/20210918/pngtree-note-music-logo-watercolor-background-image_903000.png",
    img4: "https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
    title: "Hip-Hop Songs",
    desc: "Playlist - Akash Sahu - 12 tracks",
  },
  {
    id: 4,
    img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef_b84s52sJo3fBibb7-VGenkRTabstp7Mg&s",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjPsCS75kKC6bp9xARZ60xg69rTfGTsxQRw&s",
    img3: "https://png.pngtree.com/thumb_back/fh260/background/20210918/pngtree-note-music-logo-watercolor-background-image_903000.png",
    img4: "https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
    title: "Hip-Hop Songs",
    desc: "Playlist - Akash Sahu - 12 tracks",
  },
];

const songList = [
  {
    img: "https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
    title: "Sabki Baaratein Aayi",
    desc: "4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...",
  },
  {
    img: "https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
    title: "Sabki Baaratein Aayi",
    desc: "4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...",
  },
  {
    img: "https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
    title: "Sabki Baaratein Aayi",
    desc: "4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...",
  },
  {
    img: "https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg",
    title: "Sabki Baaratein Aayi",
    desc: "4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...",
  },
];

const CardGridView = ({ item, index }) => {
  const isSingleImg = (item) => {
    return !(item.img1 && item.img2 && item.img3 && item.img4);
  };
  return (
    <Pressable
      android_ripple={{ color: "red" }}
      style={styles.musicCardGrid}
      key={index}
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

const MusicDashboard = () => {
  const navigation = useNavigation();
  const handleNavigation = (musicId = "test") => {
    navigation.navigate("MusicList", { id: musicId });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#414345", "#6e1d34", "#592804", "#0d0d0d"]}
        style={{ flex: 1 }}
      >
        <View style={styles.headerBar}>
          <View>
            <Text style={{ color: "#fff" }}>Music</Text>
          </View>
          <View>
            <AntDesign name="search1" size={20} color={"#fff"} />
          </View>
        </View>

        <ScrollView style={styles.container} nestedScrollEnabled={true}>
          <View style={styles.topBar}>
            <FlatList
              horizontal={true}
              data={topBarFilter}
              renderItem={({ item, index }) => (
                <View style={styles.optionBar}>
                  <Text style={{ color: "#fff" }}>{item}</Text>
                </View>
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>

          {/* From Your Library Section */}
          <View style={{ marginTop: wp("5%") }}>
            <Text style={styles.sectionTitle}>From your library</Text>
            <FlatList
              horizontal={true}
              contentContainerStyle={{
                gap: 15,
                paddingStart: wp("4%"),
                paddingEnd: wp("4%"),
              }}
              data={playlistArr}
              renderItem={({ item, index }) => (
                <CardGridView
                  item={item}
                  index={index}
                  handleNavigation={handleNavigation}
                />
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>

          {/* Artist List Section */}
          <View style={{ marginTop: wp("5%") }}>
            <Text style={styles.sectionTitle}>Artist list</Text>
            <FlatList
              horizontal={true}
              contentContainerStyle={{
                gap: 15,
                paddingStart: wp("4%"),
                paddingEnd: wp("4%"),
              }}
              data={playlistArr}
              renderItem={({ item, index }) => (
                <CardGridView
                  item={item}
                  index={index}
                  handleNavigation={handleNavigation}
                />
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>

          {/* Resent Watch Section */}
          <View style={{ marginTop: wp("5%") }}>
            <Text style={styles.sectionTitle}>Resent Watch</Text>
            <View>
              {songList.map((item, index) => (
                <Pressable style={styles.musicCard} key={index}>
                  <Image
                    width={wp("15%")}
                    height={wp("10%")}
                    source={{
                      uri: item.img,
                    }}
                  />
                  <View style={styles.musicList}>
                    <Text
                      style={{ color: "#fff", fontSize: 12, fontWeight: "400" }}
                    >
                      {item.title}
                    </Text>
                    <Text style={{ color: "gray", fontSize: 10 }}>
                      {item.desc}
                    </Text>
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
                      color="#fff"
                    />
                  </View>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Populer Songs Section */}
          <View style={{ marginTop: wp("5%") }}>
            <Text style={styles.sectionTitle}>Populer Songs</Text>
            <View>
              {songList.map((item, index) => (
                <Pressable style={styles.musicCard} key={index}>
                  <Image
                    width={wp("15%")}
                    height={wp("10%")}
                    source={{
                      uri: item.img,
                    }}
                  />
                  <View style={styles.musicList}>
                    <Text
                      style={{ color: "#fff", fontSize: 12, fontWeight: "400" }}
                    >
                      {item.title}
                    </Text>
                    <Text style={{ color: "gray", fontSize: 10 }}>
                      {item.desc}
                    </Text>
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
                      color="#fff"
                    />
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MusicDashboard;

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
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: wp("3%"),
  },
  optionBar: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingHorizontal: wp("5%"),
    paddingVertical: wp("1.5%"),
    marginHorizontal: wp("4%"),
    borderRadius: 5,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginHorizontal: wp("4%"),
  },
  musicCardGrid: {
    marginVertical: hp("1%"),
    gap: 4,
  },
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
