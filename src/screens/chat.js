import React from "react";
import {View,
Image,
Text,
SafeAreaView,
TouchableOpacity,
ScrollView} from 'react-native';

const Chat =({navigation})=>{
    return(
        <SafeAreaView style={{
            flex:1,
            justifyContent:'center',
                alignItems:'center'
        }}>
            
         <TouchableOpacity onPress={()=> navigation.navigate('Chat')}
         style={{
            backgroundColor:'#3a8c9d',
            borderRadius:10
         }}
         >
        <Text style={{
            color:'#fff',
            padding:10
        }}>
         Please Click GO To Chat Box
        </Text>
         </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Chat;