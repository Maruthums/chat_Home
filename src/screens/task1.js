import React, { useEffect, useState,useRef } from "react";
import {
    View,
    Image,
    Text,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    FlatList,
    TextInput
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {
    back,
    profile,
    call,
    videocam,
    telegram
} from "../assets/image";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Task1 = () => {
       
    const myTextInput = useRef(null);
    const flatListRef = useRef()
            const now = new Date();
            const current = now.getHours() + ':' + now.getMinutes(); 
            // const current = now.toLocaleTimeString('en-US', {
            //     hour: '2-digit',
            //     minute: '2-digit',
            //   });
  
    const [data, setData] = useState([
        {
            id: 1,
            img: profile,
            recChart: 'Hi Victor! I am Jacob Jones',
            userChart: 'Hellow Jacb I know You',
            rtime: '13:20',
            utime: '13:20'
        },
        {
            id: 2,
            img: profile,
            recChart: 'Hi Victor! I am Jacob Jones',
            userChart: 'Hellow Jacb I know You',
            rtime: '13:22',
            utime: '13:22'

        },
        {
            id: 3,
            img: profile,
            recChart: 'Hi Victor! I am Jacob Jones',
            userChart: 'Hellow Jacb I know You',
            rtime: '13:24',
            utime: '13:24'
        },
        {
            id: 4,
            img: profile,
            recChart: 'Hi Victor! I am Jacob Jones',
            userChart: 'Hellow Jacb I know You',
            rtime: '13:25',
            utime: '13:25'
        },
        {
            id: 5,
            img: profile,
            recChart: 'Hi Victor! I am Jacob Jones',
            userChart: 'Hellow Jacb I know You',
            rtime: '13:26',
            utime: '13:26'
        },
        {
            id: 6,
            img: profile,
            recChart: 'Hi Victor! I am Jacob Jones',
            userChart: 'Hellow Jacb I know You',
            rtime: '13:27',
            utime: '13:27'
        },
    ]);

    const [userMessage, setUserMessage] = useState(null);
    const [isFetching, setIsFetching] = React.useState(false);
    // const sleep = (ms) => setTimeout(, ms);

    const dataSend=()=>{
        if(userMessage != null && userMessage != ''){
       var temp=data;
        temp.push({id:data.length + 1,userChart:userMessage,
            utime: current})
        setData(temp);
        flatListRef.current.scrollToEnd({ animated: true });
        }
    }

    const onRefresh =() => {
        setIsFetching(true);
        dataSend();
        myTextInput.current.clear();
        setIsFetching(false);
      };

    const _renderItem = ({ item, index }) => {
        return (
            <View key={index}>
                   {item.img &&
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 20
                }}>
                 <View style={[styles.profileLayout]}>
                        <Image source={item.img} style={[styles.chatprofile]} />
                    </View>
                    <View>
                        <View style={{
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            borderTopRightRadius: 50,
                            backgroundColor: '#c5c5c5',
                            marginHorizontal: 15,
                            padding: 5
                        }}>
                            <Text style={styles.text1}>
                                {item.recChart}
                            </Text>
                        </View>
                        <Text style={[styles.text3, {
                            textAlign: 'right'
                        }]}>
                            {item.rtime}
                        </Text>
                    </View>
                </View>
    }
                <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end'
                }}>
                    <View>
                        <View style={{
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            borderTopLeftRadius: 50,
                            backgroundColor: '#286a83',
                            marginHorizontal: 15,
                            padding: 5
                        }}>
                            <Text style={styles.text2}>
                                {item.userChart}
                            </Text>
                        </View>
                        <Text style={[styles.text3, {
                            textAlign: 'left'
                        }]}>
                            {item.utime}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex:1,
            backgroundColor:'#c5c5c5'
        }}>
            <LinearGradient
                colors={['#3a8c9d', '#286a83']}
                style={{
                    // padding: 20,
                    marginBottom: 1,
                    width: width * 1,
                    opacity: 0.9,
                }}>
                <View style={[styles.row, {
                    paddingHorizontal: 20,
                    paddingVertical: 20
                }]}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            paddingHorizontal: 10
                        }}>
                            <Image source={back} style={[styles.back]} />
                        </TouchableOpacity>
                        <View style={[styles.headLayout]}>
                            <Image source={profile} style={[styles.profile]} />
                        </View>
                        <View style={{
                            paddingHorizontal: 10
                        }}>
                            <Text style={styles.h1}>
                                Amma Watson
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            paddingHorizontal: 25
                        }}>
                            <Image source={call} style={[styles.icon]} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={videocam} style={[styles.icon]} />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                  ref={flatListRef}
                    data={data}
                    renderItem={_renderItem}
                    style={styles.background}
                    onRefresh={onRefresh}
                    refreshing={isFetching}
                    initialScrollIndex={data.length - 1}
                />
            </LinearGradient>
            <View style={{
                position:'absolute',
                bottom:0,
                left:0,
                right:0
            }}>
                <View style={[styles.row,{
                    marginHorizontal:25,
                    marginBottom:10
                }]}>
                    <TouchableOpacity style={{
                        backgroundColor:'#fff',
                        borderRadius:100,
                        height:40,
                        width:40,
                        borderWidth:1,
                        alignItems:'center',
                        justifyContent:'center',
                        borderColor: '#286a83'
                    }}>
                        <Text style={{
                            fontSize:30,
                            color: '#286a83',
                            textAlign:'center'
                        }}>
                            +
                        </Text>
                    </TouchableOpacity>
                    <View style={[styles.row,{
                        backgroundColor:'#fff',
                        borderRadius:50,
                        paddingHorizontal:10
                    }]}>
                    <TextInput 
                    placeholder="Type Something..."
                    onChangeText={(e)=>setUserMessage(e)}
                    ref={myTextInput}
                    style={{
                        width:'75%'
                    }}/>
                    <TouchableOpacity 
                    onPress={()=>{onRefresh(); setUserMessage('');}}
                    style={{
                        backgroundColor:'#17afcab0',
                        borderRadius:50,
                        width:30,
                        height:30,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Image source={telegram} style={styles.send}/>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        paddingBottom:20
    },
    h1: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff'
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
        paddingHorizontal: 15
    },
    text3: {
        color: '#000',
        fontSize: 14,
        paddingHorizontal: 30
    }
});

export default Task1;