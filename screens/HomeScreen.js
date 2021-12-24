import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";
import Developed from "./Developed";
import About from "./About";
import { createStackNavigator } from '@react-navigation/stack';


const HomeScreen = () => {
  const dispatch = useDispatch();
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>

            

      <View style={tw`p-5 mt-3`}>
        
      <View style={styles.mainNav}>
            <Image source={require("../assets/pw.jpg")} style={styles.mypic} />
            </View>
        

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
              marginTop: 140
            },
            textInput: {
              fontSize: 18,
            },
          }}
          currentLocationLabel="Set Your Current Location"
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }))
            dispatch(setDestination(null));
          }}
          minLength={2}
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="Where From?"
          debounce={400}
        />

       

        <NavOptions />
        <NavFavourites />
        
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
  mainNav: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 50,
    alignItems: "center",
  },
  mypic: {
    width: 340,
    height: 205,
    marginTop: 20,
    borderRadius: 50,
    marginLeft: -45,
    marginTop: 140
  },
});
