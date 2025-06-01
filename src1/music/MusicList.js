import { Image, Pressable, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import MusicModal from './MusicModal';

const GetHeader = () => {
    return (
        <View style={styles.container1}>
            <Image width={wp('55%')} height={wp('50%')} source={{
                uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
            }} />
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginVertical: 10 }}>Music</Text>
            <View style={styles.musicIcon}>
                <View style={styles.iconStyle}>
                    <MaterialCommunityIcons name="download" size={25} color="#fff" />
                </View>
                <View style={styles.iconStyle}>
                    <MaterialCommunityIcons name="play" size={30} color="#fff" />
                </View>
                <View style={styles.iconStyle}>
                    <MaterialCommunityIcons name="share" size={25} color="#fff" />
                </View>
            </View>
            <Pressable android_ripple={{ color: 'red' }} style={styles.addSong}>
                <View style={[styles.iconStyle, { borderRadius: 0 }]}>
                    <MaterialCommunityIcons name="plus" size={25} color="#fff" />
                </View>
                <Text style={{ color: '#fff', fontSize: 12, marginVertical: 10 }}>Add a song</Text>
            </Pressable>
        </View>
    )
}

const MusicList = ({ route }) => {
    const id = route.params?.id;
    console.log(id);

    const [isModalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#414345', '#6e1d34', '#592804', '#0d0d0d']}
                style={{ flex: 1 }}>

                <View style={styles.topBar}>
                    <View style={styles.optionBar}>
                        <Text style={{ color: '#fff' }}>Playlist Songs</Text>
                    </View>
                    <View style={styles.optionBar}>
                        <AntDesign name='search1' size={20} color={'#fff'} />
                    </View>
                </View>

                <ScrollView>
                    <GetHeader />
                    <Pressable style={[styles.musicCard, styles.active]}>
                        <Image width={wp('15%')} height={wp('10%')} borderRadius={10} source={{
                            uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
                        }} />
                        <View style={styles.musicList}>
                            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Sabki Baaratein Aayi</Text>
                            <Text style={{ color: 'gray', fontSize: 10 }}>4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.musicCard}>
                        <Image width={wp('15%')} height={wp('10%')} source={{
                            uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
                        }} />
                        <View style={styles.musicList}>
                            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Sabki Baaratein Aayi</Text>
                            <Text style={{ color: 'gray', fontSize: 10 }}>4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.musicCard}>
                        <Image width={wp('15%')} height={wp('10%')} source={{
                            uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
                        }} />
                        <View style={styles.musicList}>
                            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Sabki Baaratein Aayi</Text>
                            <Text style={{ color: 'gray', fontSize: 10 }}>4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.musicCard}>
                        <Image width={wp('15%')} height={wp('10%')} source={{
                            uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
                        }} />
                        <View style={styles.musicList}>
                            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Sabki Baaratein Aayi</Text>
                            <Text style={{ color: 'gray', fontSize: 10 }}>4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.musicCard}>
                        <Image width={wp('15%')} height={wp('10%')} source={{
                            uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
                        }} />
                        <View style={styles.musicList}>
                            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Sabki Baaratein Aayi</Text>
                            <Text style={{ color: 'gray', fontSize: 10 }}>4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.musicCard}>
                        <Image width={wp('15%')} height={wp('10%')} source={{
                            uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
                        }} />
                        <View style={styles.musicList}>
                            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Sabki Baaratein Aayi</Text>
                            <Text style={{ color: 'gray', fontSize: 10 }}>4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.musicCard}>
                        <Image width={wp('15%')} height={wp('10%')} source={{
                            uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
                        }} />
                        <View style={styles.musicList}>
                            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Sabki Baaratein Aayi</Text>
                            <Text style={{ color: 'gray', fontSize: 10 }}>4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
                        </View>
                    </Pressable>
                    <Pressable style={styles.musicCard}>
                        <Image width={wp('15%')} height={wp('10%')} source={{
                            uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
                        }} />
                        <View style={styles.musicList}>
                            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Sabki Baaratein Aayi</Text>
                            <Text style={{ color: 'gray', fontSize: 10 }}>4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <SimpleLineIcons name="options-vertical" size={12} color="#fff" />
                        </View>
                    </Pressable>
                </ScrollView>

                <Pressable android_ripple={{ color: 'red' }} style={[styles.musicCard, { backgroundColor: '#1e1e1e' }]} onPress={toggleModal}>
                    <Image width={wp('15%')} height={wp('10%')} source={{
                        uri: 'https://t4.ftcdn.net/jpg/04/10/17/95/360_F_410179527_ExxSzamajaCtS16dyIjzBRNruqlU5KMA.jpg',
                    }} />
                    <View style={styles.musicList}>
                        <Text style={{ color: '#fff', fontSize: 12, fontWeight: '400' }}>Sabki Baaratein Aayi</Text>
                        <Text style={{ color: 'gray', fontSize: 10 }}>4 mins 27 secs. Dev Negi, Seepi Jha, jaspi...</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        {/* <SimpleLineIcons name="options-vertical" size={12} color="#fff" /> */}
                        <MaterialCommunityIcons name="play" size={25} color="#fff" />
                    </View>
                </Pressable>
                <MusicModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
            </LinearGradient>
        </SafeAreaView>
    )
}

export default MusicList

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: hp('2%'),
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: wp('2.5%'),
        paddingHorizontal: wp('4%'),
    },
    musicIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    iconStyle: {
        padding: 10,
        borderRadius: wp('50%'),
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Black with 20% opacity
    },
    addSong: {
        marginLeft: 25,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    musicCard: {
        padding: wp('3%'),
        flexDirection: 'row',
        height: hp('8%'),
        gap: 20,
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