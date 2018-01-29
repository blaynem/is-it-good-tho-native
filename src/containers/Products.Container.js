import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux';

import ItemCards from '../components/Cards/Item.Cards';
import FilterField from '../components/Filter.Field';

class ProductsContainer extends Component {
  state = {
    filterValue: ""
  }
  handleTextChange = (val) => {
    this.setState({ filterValue: val })
  }
  renderStrainCards = () => {
    const { strains } = this.props
    const filterVal = this.state.filterValue.toLowerCase()
    return strains.filter( item => {
      return item.strainName.toLowerCase().includes(filterVal)
    })
    .map( (item, i) => {
      return  <ItemCards key={item.strainName + i} data={item}/>
    })
  }
  render() {
    return (
      <View>
        <FilterField handleTextChange={this.handleTextChange} value={this.state.filterValue}/>
        <ScrollView>
          {this.renderStrainCards()}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    strains: state.strains.data
  }
}

export default connect(mapStateToProps, {})(ProductsContainer);