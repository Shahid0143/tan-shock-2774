import './App.css';
import MainRoutes from './component/MainRoutes';
import CartPage from './pages/CartPage';
import Payment from './pages/Payment';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div className="App">
      {/* <MainRoutes/> */}
      <CartPage/>
      <Payment/>
      {/* <Address/> */}
      {/* <SingleProductPage/>  */}
    </div>
  );
}

export default App;
