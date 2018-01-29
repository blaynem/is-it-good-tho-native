import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux';

import ItemCards from '../components/Cards/Item.Cards';

class ProductsContainer extends Component {
  renderStrainCards = () => {
    const { strains } = this.props
    return strains.map( (item, i) => {
      return  <ItemCards key={item.strainName + i} data={item}/>
    })
  }
  render() {
    return (
      <ScrollView>
        {this.renderStrainCards()}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    strains: state.strains.data
  }
}

export default connect(mapStateToProps, {})(ProductsContainer);