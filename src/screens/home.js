import React from "react";
import {
    View,
    Image,
    Text,
    ScrollView,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {
    backImg,
    menu,
    notification,
    homeSave,
    banner,
    banner2,
    villa,
    notification1,
    back,
    home
} from '../assets/image';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <ImageBackground source={backImg}
                    imageStyle={{
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    }}
                    style={[{
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                    }]}>
                    <View style={[styles.row]}>
                        <View>
                            <Image source={menu} style={styles.back} />
                        </View>
                        <View style={[styles.row, {

                        }]}>
                            <View>
                                <Text style={[styles.h2]}>
                                    Sell Your home
                                </Text>
                            </View>
                            <View>
                                <Image source={notification} style={styles.back} />
                            </View>
                        </View>
                    </View>
                    <View style={{
                        paddingHorizontal: 20,
                        paddingVertical: 30
                    }}>
                        <View>
                            <Text style={[styles.h1]}>
                                Home
                            </Text>
                        </View>
                        <View >
                            <Text style={[styles.text2]}>
                                By Champion Lender
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{
                    marginTop: 10
                }}>
                    <Text style={[styles.text3, {
                        fontWeight: '700'
                    }]}>
                        Get Started With
                    </Text>
                </View>
                <View style={{
                    marginTop: 10
                }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{
                            backgroundColor: '#3a8c9d',
                            paddingVertical: 10,
                            borderRadius: 8,
                            paddingHorizontal: 5,
                            marginHorizontal: 10

                        }}>
                            <View style={{
                                paddingHorizontal: 10
                            }}>
                                <Image source={homeSave}
                                    style={[styles.icon, {
                                        tintColor: '#3a8c9d',
                                        backgroundColor: '#fff',
                                        transform: [{ rotateY: '180deg' }],
                                        borderRadius: 5
                                    }]} />
                            </View>
                            <View style={{
                                paddingVertical: 5
                            }}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 14,
                                    fontWeight: '600',
                                }}>
                                    Home Match
                                </Text>
                                <Text style={{
                                    width: 200,
                                    color: '#fff',
                                    fontSize: 13,
                                }}>
                                    Let's find homes matching your budget and requirements.
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            paddingVertical: 10,
                            borderRadius: 8,
                            paddingHorizontal: 5,
                            marginHorizontal: 10

                        }}>
                            <View style={{
                                paddingHorizontal: 10
                            }}>
                                <Image source={homeSave}
                                    style={[styles.icon, {
                                        tintColor: '#3a8c9d',
                                        backgroundColor: '#fff',
                                        transform: [{ rotateY: '180deg' }],
                                        borderRadius: 5
                                    }]} />
                            </View>
                            <View style={{
                                paddingVertical: 5
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontWeight: '600',
                                }}>
                                    Home Stash
                                </Text>
                                <Text style={{
                                    width: 200,
                                    color: '#000',
                                    fontSize: 13,
                                }}>
                                    Let's find homes matching your budget and requirements.
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity style={{
                        paddingHorizontal: 10,
                        paddingVertical: 10
                    }}>
                        <Text style={{
                            color: '#3a8c9d',
                            fontSize: 14,
                            fontWeight: '600'
                        }}>
                            See More
                        </Text>
                    </TouchableOpacity>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{
                            backgroundColor: '#fff',
                            borderRadius: 20,
                            marginHorizontal: 10
                        }}>
                            <View>
                                <Image source={banner} style={{
                                    width: 280,
                                    height: 130,
                                    resizeMode: 'contain',
                                    borderRadius: 20
                                }} />
                            </View>
                            <View style={{
                                paddingVertical: 10
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 14,
                                    paddingHorizontal: 10,
                                }}>
                                    First Time Home Buyers Course
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            borderRadius: 20,
                            marginHorizontal: 10
                        }}>
                            <View>
                                <Image source={banner2} style={{
                                    width: 280,
                                    height: 130,
                                    resizeMode: 'contain',
                                    borderRadius: 20
                                }} />
                            </View>
                            <View style={{
                                paddingVertical: 10
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 14,
                                    paddingHorizontal: 10,
                                }}>
                                    First Time Home Buyers Course
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{
                        paddingHorizontal: 10,
                        paddingVertical: 10
                    }}>
                        <Text style={{
                            color: '#000',
                            fontSize: 14,
                            fontWeight: '600'
                        }}>
                            Upcoming Webinars
                        </Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        marginHorizontal:10
                    }}>
                        <Image source={villa} style={{
                            width: '96%',
                            height: 150,
                            resizeMode: 'contain',
                            borderRadius: 20
                        }} />
                    </View>
                    <View style={{
                        paddingHorizontal: 30,
                        paddingVertical: 10
                    }}>
                        <View>
                            <Text style={{
                                color: '#3a8c9d',
                                fontSize: 14,
                                fontWeight: '600'
                            }}>
                                Live Demo Home Buying Source
                            </Text>
                            <Text style={{
                                color: '#000',
                                fontSize: 16,
                            }}>
                                Join us any day for a live demo of Home Buying Soure
                            </Text>
                            <Text style={{
                                color: '#000',
                                fontSize: 16,
                            }}>
                                Time 11:00 Am PT | 2:00 PM ET
                            </Text>
                            <Text style={{
                                color: '#000',
                                fontSize: 16,
                            }}>
                                Duration 30 minutes plus live Q&A
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 10,
                            marginVertical: 15
                        }}>
                            <View>
                                <TouchableOpacity style={{
                                    backgroundColor: '#3a8c9d',
                                    width: 100,
                                    borderRadius: 20
                                }}>
                                    <Text style={{
                                        color: '#fff',
                                        textAlign: 'center',
                                        paddingVertical: 5
                                    }}>
                                        Register Now
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Image source={notification1}
                                    style={[styles.icon, {
                                        tintColor: '#3a8c9d'
                                    }]}
                                />
                            </View>
                        </View>
                    </View>
                <View style={{
                    marginHorizontal:20,
                    backgroundColor:'#3e94a27a',
                    borderRadius:20,
                    paddingHorizontal:10,
                    paddingVertical:10,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginVertical:20
                }}>
                                <View>
                                    <Text style={{
                                        width:200
                                    }}>
                                        Find properties Which match your budget
                                    </Text>
                                    <Text style={{
                                        width:200
                                    }}>
                                         With Aftordablity Calculator
                                    </Text>
                                    <View style={{
                                        flexDirection:'row',
                                        alignItems:'center',
                                    }}>
                                    <Text style={{
                                        color:'#3a8c9d',
                                        fontSize:12,
                                    }}>
                                        Match Now
                                    </Text>
                                    <Image source={back} style={[styles.icon,{
                                        tintColor:'#3a8c9d',
                                        left:10,
                                        transform:[{rotateY:'180deg'}]
                                    }]} />
                                    </View>
                                </View>
                                <View>
                                    <Image source={home} style={{
                                        width:80,
                                        height:80,
                                        resizeMode:'contain',
                                        tintColor:'#3e94a27a'
                                    }}/>
                                </View>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    overlay: {
        backgroundColor: '#3e94a27a'
    },
    back: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: '#ffffff'
    },
    send: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        tintColor: '#286a83'
    },
    icon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        tintColor: '#ffffff'
    },
    headLayout: {
        borderRadius: 50,
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileLayout: {
        borderRadius: 50,
        width: 65,
        height: 65,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#3a8c9d',
        borderWidth: 1
    },
    chatprofile: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        borderRadius: 50,
    },
    profile: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        borderRadius: 50,
    },
    background: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        height: 490,
        top: 15,
        paddingBottom: 20
    },
    h1: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff'
    },
    h2: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        paddingHorizontal: 10
    },
    text1: {
        color: '#000',
        fontSize: 18,
        width: 200,
        paddingHorizontal: 15
    },
    text2: {
        color: '#fff',
        fontSize: 18,
        width: 200,
    },
    text3: {
        color: '#000',
        fontSize: 14,
        paddingHorizontal: 10
    }
});

export default Home;