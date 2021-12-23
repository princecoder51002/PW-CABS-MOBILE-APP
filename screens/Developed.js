import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements'

const Developed = () => {
    return (
        <View>
            <Image source={require("../assets/pw.jpg")} style={styles.mypic} />
        </View>
    )
}

export default Developed

const styles = StyleSheet.create({})
