import React from 'react'
import { Text, TextInput, View } from 'react-native';

export default FilterField = ({ handleTextChange, value }) => (
  <View style={{ marginTop: 10 }}>
    <Text>Filter</Text>
    <TextInput value={value} onChangeText={handleTextChange}/>
  </View>
)