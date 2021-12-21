import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch} from 'react-redux';
import { selectDestination, setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

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
            </View>
         </SafeAreaView>
       
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    textInput: {
        backgroundColor: "white",
        borderRadius: 0,
        fontSize: 18,
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
