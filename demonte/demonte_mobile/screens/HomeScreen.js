import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingContainerText}></Text>
        </View>
        <View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})