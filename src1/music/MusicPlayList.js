import { FlatList, Image, Pressable, RefreshControl, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MusicModal from './MusicModal';
import { useNavigation } from '@react-navigation/native';

const playlistArr = [
    {
        id: 1,
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef_b84s52sJo3fBibb7-VGenkRTabstp7Mg&s',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjPsCS75kKC6bp9xARZ60xg69rTfGTsxQRw&s',
        img3: 'https://png.pngtree.com/thumb_back/fh260/background/20210918/pngtree-note-music-logo-watercolor-background-image_903000.png',
        img4: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
        title: 'Hip-Hop Songs',
        desc: 'Playlist - Akash Sahu - 12 tracks'
    },
    {
        id: 2,
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef_b84s52sJo3fBibb7-VGenkRTabstp7Mg&s',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjPsCS75kKC6bp9xARZ60xg69rTfGTsxQRw&s',
        img3: 'https://png.pngtree.com/thumb_back/fh260/background/20210918/pngtree-note-music-logo-watercolor-background-image_903000.png',
        img4: '',
        title: 'Hip-Hop Songs',
        desc: 'Playlist - Akash Sahu - 12 tracks'
    },
    {
        id: 3,
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef_b84s52sJo3fBibb7-VGenkRTabstp7Mg&s',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjPsCS75kKC6bp9xARZ60xg69rTfGTsxQRw&s',
        img3: 'https://png.pngtree.com/thumb_back/fh260/background/20210918/pngtree-note-music-logo-watercolor-background-image_903000.png',
        img4: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
        title: 'Hip-Hop Songs',
        desc: 'Playlist - Akash Sahu - 12 tracks'
    },
    {
        id: 4,
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef_b84s52sJo3fBibb7-VGenkRTabstp7Mg&s',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjPsCS75kKC6bp9xARZ60xg69rTfGTsxQRw&s',
        img3: 'https://png.pngtree.com/thumb_back/fh260/background/20210918/pngtree-note-music-logo-watercolor-background-image_903000.png',
        img4: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
        title: 'Hip-Hop Songs',
        desc: 'Playlist - Akash Sahu - 12 tracks'
    },
]

const CardGridView = ({ item, index }) => {
    const isSingleImg = (item) => {
        if (item.img1 && item.img2 && item.img3 && item.img4) {
            return false;
        } else {
            return true;
        }
    }
    return (
        <Pressable android_ripple={{ color: 'red' }} style={styles.musicCardGrid} key={index}>
            <View style={{ width: wp('42%'), height: hp('18%') }}>

                {
                    isSingleImg(item) ?
                        <Image width={wp('42%')} height={hp('18%')} source={{
                            uri: item.img1,
                        }} /> :
                        <>
                            <View style={{ flexDirection: 'row' }}>
                                <Image width={wp('21%')} height={hp('9%')} source={{
                                    uri: item.img1,
                                }} />
                                <Image width={wp('21%')} height={hp('9%')} source={{
                                    uri: item.img2,
                                }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image width={wp('21%')} height={hp('9%')} source={{
                                    uri: item.img3,
                                }} />
                                <Image width={wp('21%')} height={hp('9%')} source={{
                                    uri: item.img4,
                                }} />
                            </View>
                        </>
                }
            </View>
            <View style={styles.musicList}>
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '400' }}>{item.title}</Text>
                <Text style={{ color: 'gray', fontSize: 12 }}>{item.desc}</Text>
            </View>
        </Pressable>
    )
}

const CardFlatView = ({ item, index, handleNavigation }) => {
    const isSingleImg = (item) => {
        if (item.img1 && item.img2 && item.img3 && item.img4) {
            return false;
        } else {
            return true;
        }
    }
    return (
        <Pressable android_ripple={{ color: 'red' }} style={styles.musicCard} key={index} onPress={() => handleNavigation(item.id)}>
            <View style={{ width: wp('16%'), height: wp('14%') }}>
                {
                    isSingleImg(item) ?
                        <Image width={wp('16%')} height={wp('14%')} source={{
                            uri: item.img1,
                        }} /> :
                        <>
                            <View style={{ flexDirection: 'row' }}>
                                <Image width={wp('8%')} height={wp('7%')} source={{
                                    uri: item.img1,
                                }} />
                                <Image width={wp('8%')} height={wp('7%')} source={{
                                    uri: item.img2,
                                }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image width={wp('8%')} height={wp('7%')} source={{
                                    uri: item.img3,
                                }} />
                                <Image width={wp('8%')} height={wp('7%')} source={{
                                    uri: item.img3,
                                }} />
                            </View>
                        </>
                }
            </View>
            <View style={styles.musicList}>
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '400' }}>{item.title}</Text>
                <Text style={{ color: 'gray', fontSize: 12 }}>{item.desc}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
            </View>
        </Pressable>
    )
}

const MusicPlayList = () => {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);
    const [gridView, setGridView] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleNavigation = (musicId = 'test') => {
        navigation.navigate('MusicList', { id: musicId });
    }

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#414345', '#6e1d34', '#592804', '#0d0d0d']}
                style={{ flex: 1 }}>

                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <View style={styles.optionBar}>
                            <Text style={{ color: '#fff' }}>Playlist</Text>
                        </View>
                        <View style={styles.optionBar}>
                            <Text style={{ color: '#fff' }}>Songs</Text>
                        </View>
                        <View style={styles.optionBar}>
                            <Text style={{ color: '#fff' }}>Albums</Text>
                        </View>
                        <View style={styles.optionBar}>
                            <Text style={{ color: '#fff' }}>Artists</Text>
                        </View>
                    </View>
                    <View style={styles.topBar}>
                        <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 15 }}>
                            <Text style={{ color: 'gray' }}>Recent activity</Text>
                            <SimpleLineIcons name="arrow-down" size={14} color="gray" />
                        </Pressable>
                        <Pressable onPress={() => setGridView(!gridView)}>
                            {gridView ?
                                <Ionicons name="grid" size={15} color="#fff" /> :
                                <Ionicons name="grid-outline" size={15} color="#fff" />}
                        </Pressable>
                    </View>
                    <View style={gridView && styles.cardView}>
                        {gridView ?
                            <Pressable android_ripple={{ color: 'red' }} style={styles.musicCardGrid}>
                                <Image width={wp('42%')} height={hp('18%')} blurRadius={10} source={{
                                    uri: 'https://media.istockphoto.com/id/1358646426/vector/hand-symbol-like-approved-and-red-heart-love-realistic-3d-cartoon-style-design-social-media.jpg?s=612x612&w=0&k=20&c=_9rnjvC6E8vdOhDMQRPF_rpP50cBJY9O-U7tPb1zPZE=',
                                }} />
                                <View style={styles.musicList}>
                                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: '400' }}>Liked Music</Text>
                                    <Text style={{ color: 'gray', fontSize: 12 }}>Auto playlist</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
                                </View>
                            </Pressable> :
                            <Pressable android_ripple={{ color: 'red' }} style={styles.musicCard}>
                                <Image width={wp('16%')} height={wp('14%')} source={{
                                    uri: 'https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png',
                                }} />
                                <View style={styles.musicList}>
                                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: '400' }}>Liked Music</Text>
                                    <Text style={{ color: 'gray', fontSize: 12 }}>Auto playlist</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
                                </View>
                            </Pressable>}
                    </View>
                    <FlatList
                        key={gridView ? 'grid' : 'list'} // Force re-render when gridView changes
                        numColumns={gridView ? 2 : 1} // Ensure numColumns is 1 when not in gridView
                        columnWrapperStyle={gridView ? { justifyContent: 'space-between' } : null}
                        data={playlistArr}
                        renderItem={({ item, index }) => (
                            gridView ?
                                <CardGridView
                                    item={item}
                                    index={index}
                                    handleNavigation={handleNavigation}
                                /> :
                                <CardFlatView
                                    item={item}
                                    index={index}
                                    handleNavigation={handleNavigation}
                                />
                        )}
                        keyExtractor={(_, index) => index.toString()}
                    />
                </View>

                <Pressable android_ripple={{ color: 'red' }} style={styles.musicModalCard} onPress={toggleModal}>
                    <Image width={wp('15%')} height={wp('10%')} source={{
                        uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
                    }} />
                    <View style={styles.musicList}>
                        <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Sabki Baaratein Aayi</Text>
                        <Text style={{ color: 'gray', fontSize: 10 }}>4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <MaterialCommunityIcons name="play" size={25} color="#fff" />
                    </View>
                </Pressable>
                <MusicModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
            </LinearGradient>
        </SafeAreaView>
    )
}

export default MusicPlayList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp('6%')
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: wp('3%'),
    },
    optionBar: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        paddingHorizontal: wp('5%'),
        paddingVertical: wp('1.5%'),
        gap: 10,
        borderRadius: 5
    },
    cardView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    musicCardGrid: {
        width: wp('42%'),
        marginVertical: hp('1%'),
        gap: 4,
    },
    musicCard: {
        paddingVertical: wp('3%'),
        flexDirection: 'row',
        height: hp('9%'),
        gap: 20,
    },
    musicModalCard: {
        padding: wp('3%'),
        flexDirection: 'row',
        height: hp('8%'),
        gap: 20,
        backgroundColor: '#1e1e1e'
    },
    musicList: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 1
    },
    active: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Black with 20% opacity
    }
})