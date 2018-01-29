import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ItemCard extends Component {
  render() {
    const { consumptionMethod, rating, strainName, strainType } = this.props.data
    const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        borderWidth: 1,
        height: 100,
        margin: 5,
        borderColor: "#bbb",
        backgroundColor: "#eee",
        borderWidth: 1,
        elevation: 3,
        padding: 5
      },
      textBig: {
        borderWidth: 1,
        borderColor: "red",
        width: 100,
        height: 50,
        fontSize: 24
      },
      textSmall: {
        borderWidth: 1,
        borderColor: "red",
        height: 25,
        fontSize: 12
      }
    })
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{strainName}</Text>
        <View style={styles.container}>
          <Text style={styles.textSmall}>Strain: {strainType}</Text>
          <Text style={styles.textSmall}>Consumption: {consumptionMethod}</Text>        
          <Text style={styles.textSmall}>Rating: {rating}</Text>
        </View>
      </View>
    )
  }
}

export default ItemCard