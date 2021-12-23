import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, _ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { selectDestination } from '../slices/navSlice'
import tw from 'tailwind-react-native-classnames'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const RideOptionsCard = () => {

    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

    const data = [
        {
            id: "Uber-X-123",
            title: "Uber-X",
            multiplier: 1,
            image: "https://links.papareact.com/3pn",
        },

        {
            id: "Uber-XL-456",
            title: "Uber XL",
            multiplier: 1.2,
            image: "https://links.papareact.com/5w8",
        },

        {
            id: "Uber-LUX-789",
            title: "Uber LUX",
            multiplier: 1.75,
            image: "https://links.papareact.com/7pf",
        },
    ];

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            
            <View>
                <TouchableOpacity style={tw`top-2 right-44 rounded-full`} onPress={() =>  navigation.navigate("NavigateCard")}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
            <Text style={tw`text-center text-xl`}>
              Select a Ride
          </Text>
            </View>

            

          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item : {id, title, multiplier, image}, item}) => (
                <View>
               <TouchableOpacity style={tw`flex-row items-center justify-between ${id===selected?.id && "bg-gray-200"}`} onPress={() => setSelected(item)}>
                   <Image style={{
                       width: 100, height: 100, resizeMode: "contain"
                   }}
                     source={{uri: image}}
                   />

                   <View style={tw`-ml-6`}>
                       <Text style={tw`text-xl font-semibold`}>{title}</Text>
                       <Text>Travel time...</Text>
                   </View>

                   <Text style={tw`text-lg`}>675 Rs</Text>

               </TouchableOpacity>

               </View>
            )}
          />
 
          <View style={tw`px-2`}>
             <TouchableOpacity style={tw`bg-black py-2 m-3 ${!selected && "bg-gray-300"}`} disabled={!selected}>
                 <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title} </Text>
             </TouchableOpacity>
         </View>
         
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
