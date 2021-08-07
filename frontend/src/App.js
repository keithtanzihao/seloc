
import SearchBar from './components/layout/searchbar/SearchBar'
import Navbar from './components/layout/navbar/Navbar';
import Carousel from './components/layout/carousel/Carousel';

import Container from './components/ui/container/Container';
import HighLights1 from './components/layout/highlights/row1-highlights/HighLights1';
import HighLights2 from './components/layout/highlights/row2-highlights/HighLights2';
import GroceryFlashAd from './components/layout/ads/SingleAds/grocery-flash/GroceryFlashAd';
import LiquorProduct from './components/layout/display-products/display-container/LiquorProduct';
import PopularProduct from './components/layout/display-products/display-container/PopularProduct';
import Footer from './components/layout/footer/Footer'

import './App.css'

function App() {

  return (
    <div className='mainContainer'>
      <SearchBar/>
      <Navbar/>
      <Carousel/>
      <Container><HighLights1/></Container>
      <Container><HighLights2/></Container>
      <Container><GroceryFlashAd/></Container>
      <Container><LiquorProduct/></Container>
      <Container><PopularProduct/></Container>
      <Footer/>
    </div>
  );
}

export default App;



