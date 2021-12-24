import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements'

const Developed = () => {
    return (
        <View>
            <Image source={require("../assets/self.jpg")} style={styles.mypic} />
        </View>
    )
}

export default Developed

const styles = StyleSheet.create({
    mypic: {
        width: 340,
        height: 605,
        marginTop: 20,
        borderRadius: 50,
        marginLeft: 25,
        marginTop: 140
      },
})
