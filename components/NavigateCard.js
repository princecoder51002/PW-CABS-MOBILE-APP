import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch} from 'react-redux';
import { selectDestination, setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const destination = useSelector(selectDestination)

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
               <View>
                   
                      <GooglePlacesAutocomplete 
                         placeholder='Where To?'
                         debounce={400}
                         nearbyPlacesAPI='GooglePlacesSearch'
                         styles={toInputBoxStyles}
                         query={{
                             key: GOOGLE_MAPS_APIKEY,
                             language: "en"
                         }}
                         fetchDetails={true}
                         returnKeyType={"search"}
                         onPress={(data, details=null) => {
                             dispatch(setDestination({
                                 location: details.geometry.location,
                                 description: data.description,
                             }));
                             navigation.navigate("RideOptionsCard");
                         }}
                         returnKeyType={"search"}
                      />
                      
               </View>

<NavFavourites />

            </View>

               <View style={tw`flex-row bg-white justify-evenly py-12 mt-auto border-t border-gray-100`}>
                   <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`} onPress={() => navigation.navigate("RideOptionsCard")}>
                       <Icon name="car" type="font-awesome" color="white" size={16}  />
                       <Text style={tw`text-white text-center`}>Rides</Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={tw`flex flex-row bg-black  justify-evenly w-24 px-4 py-3 rounded-full`}>
                       <Icon name="fast-food-outline" type="ionicon" color="white" size={16}  />
                       <Text style={tw`text-center text-white`}>Eats</Text>
                   </TouchableOpacity>

               </View>

         </SafeAreaView>
       
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    textInput: {
        backgroundColor: "gray",
        borderRadius: 0,
        fontSize: 18,
        color: "white"
    },

    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },

    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})
