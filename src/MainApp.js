import React, { Component } from 'react'
import { View } from 'react-native';

import AddProductForm from './components/Add.Product.Form';
import ProductsContainer from './containers/Products.Container';

class MainApp extends Component {
  render() {
    return (
      <View style={{ margin: 10 }}>
        <AddProductForm />
        <ProductsContainer />
      </View>
    )
  }
}

export default MainApp;