import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';

const NavFavourites = () => {

    const data = [
        {
            id:"123",
            icon: "person-circle-outline",
            location: "Developed By",
            destination: "Prince Wadhwa",
            screen: "Developed"
        },

        {
            id: "456",
            icon: "information-circle-outline",
            location: "About Us",
            destination: "Know More About PW Cabs",
            screen: "About"
        },
    ]

    const navigation = useNavigation();

    return (
        <FlatList
         data={data} 
         keyExtractor={(item) => item.id} 
         renderItem={({item: { location, destination, icon, screen }}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`} onPress={() => navigation.navigate(screen) }>

               <Icon 
                 name={icon}
                 type="ionicon"
                 color="white"
                 size={18}
                 style={tw`mr-4 rounded-full bg-gray-300 p-3`}
               />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
         )} 
         ItemSeparatorComponent={() => (
             <View style={[tw`bg-gray-200`], {height: 0.5}} />
         )}
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
