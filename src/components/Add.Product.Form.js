import React, { Component } from 'react'
import { Button, Picker, Text, TextInput, View } from 'react-native';

import { connect } from 'react-redux';

import { addStrain } from '../actions';

class AddProductForm extends Component {
  state = {
    strainName: "Test Strain",
    strainType: "sativa",
    consumptionMethod: "flower",
    rating: 1
  }
  handleSelect = (name, val) => {
    this.setState({ [name]: val })
  }
  handleInput = (val) => {
    this.setState({ strainName: val })
  }
  handleSubmit = () => {
    this.props.addStrain(this.state)
  }
  render() {
    return (
      <View style={{ marginTop: 25 }}>
        <Text>Product Name</Text>
        <TextInput value={this.state.strainName} onChangeText={this.handleInput}/>
        <Text>Strain Type</Text>
        <Picker
          prompt="what is this"
          selectedValue={this.state.strainType}
          onValueChange={(val) => this.handleSelect("strainType", val)}
          mode="dropdown">
          <Picker.Item label="Sativa" value="sativa"/>
          <Picker.Item label="Hybrid" value="hybrid"/>
          <Picker.Item label="Indica" value="indica"/>
        </Picker>
        <Text>Consumed</Text>
        <Picker
          selectedValue={this.state.consumptionMethod}
          onValueChange={(val) => this.handleSelect("consumptionMethod", val)}
          mode="dropdown">
          <Picker.Item label="Flower" value="flower"/>
          <Picker.Item label="Concentrates" value="concentrates"/>
          <Picker.Item label="Edibles" value="edibles"/>
          <Picker.Item label="Pre-Rolls" value="prerolls"/>
          <Picker.Item label="Other" value="other"/>
        </Picker>
        <Text>Rating</Text>
        <Picker
          selectedValue={this.state.rating}
          onValueChange={(val) => this.handleSelect("rating", val)}
          mode="dropdown">
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
        </Picker>
        <Button title="Submit!" onPress={this.handleSubmit}/>
      </View>
    )
  }
}

export default connect(null, { addStrain })(AddProductForm);