import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";

const About = () => {
  return (
    <View>
      <View>
        <Image source={require("../assets/logo.jpg")} style={styles.mypic} />
      </View>

      <Text style={{fontWeight: "bold", marginTop: 20, marginLeft: 5}}>
        When it comes to hailing a taxi, pulling out your smartphone to order a
        ride has replaced waving one down. Let’s face it, it’s just easier—and
        in many cases, cheaper, depending on which app you’re tapping. We’ve
        collected the best services to load on your phone so that you can get
        hassle-free transportation no matter where you are in the world.
      </Text>

       <Text style={{fontSize: 40, marginTop: 10, marginLeft: 80}}>
           Developed By 
       </Text>

       <Text style={{fontStyle: "italic", fontSize: 30, marginLeft: 100, textDecorationLine: "underline"}}>
           Prince Wadhwa
       </Text>

    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  mypic: {
    width: 340,
    height: 305,
    marginTop: 20,
    borderRadius: 50,
    marginLeft: 25,
    marginTop: 140,
  },
});
