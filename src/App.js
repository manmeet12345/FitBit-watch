import logo from './logo.svg';
import React, { Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/TopBar';
import ProductData from './utils/ProductData';
class  App extends Component {
  state = {
    productData : ProductData,
    currentPreviewPos : 0,
    showHeartBeatSection: true,
    currentButtonSelected : 1,
  }

  onColorOptionClick = (pos) => {
    
    this.setState({currentPreviewPos : pos});
  }

  onButtonClick = (pos) => {
    this.setState({currentButtonSelected : pos})
      if(pos === 0){
        this.state.showHeartBeatSection = false;
      } else {
        this.state.showHeartBeatSection = true;
      }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewPos].imageUrl} showHeartBeatSection={this.state.showHeartBeatSection} />
          </div>
  
  
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewPos={this.state.currentPreviewPos} onButtonClick={this.onButtonClick} currentButtonSelected={this.state.currentButtonSelected}/>
          </div>
        </div>
      </div>
    );
  }
    
  

  
}

export default App;
