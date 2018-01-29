import React, { Component } from 'react'
import { ScrollView } from 'react-native';

import AddProductForm from './components/Add.Product.Form';
import ProductsContainer from './containers/Products.Container';

class MainApp extends Component {
  render() {
    return (
      <ScrollView style={{ margin: 10 }}>
        <AddProductForm />
        <ProductsContainer />
      </ScrollView>
    )
  }
}

export default MainApp;