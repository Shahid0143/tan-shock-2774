import './App.css';

import CartPage from './pages/CartPage';
import Payment from './pages/Payment';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div className="App">

      <SingleProductPage/>
      <CartPage/>
      <Payment/>
      {/* <Address/> */}
    </div>
  );
}

export default App;
