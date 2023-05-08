import cartStyle from "./Cartstyle.module.css";
import { Button } from "@chakra-ui/react";
import Address from "./Address"
import { useSelector } from "react-redux";

import CartBox from "./CartBox";

const CartPage = () => {
 let { cart, subtotal, discountTotal } = useSelector((store)=>store.cartReducer)
  
  if (cart) {
    for (let i = 0; i < cart.length; i++) {
      subtotal += cart[i].o_price;
      discountTotal += cart[i].price;
    }  
  }

  if(cart.length===0){
    subtotal=0;
    discountTotal=0;
}

  return (
    <div className={cartStyle.main}>
    <br></br>
    <br></br>
    <br></br>
    <div className={cartStyle.left}>
      
      <div className={cartStyle.leftTop}>
        <span>
          <h1>{cart.length} Item in your Cart</h1>
        </span>
      </div>
      
      <div >
        {cart.map((elem)=>{
          return <CartBox key={elem.id} elem={elem}/>
        })}
      </div>
    </div>
    <div className={cartStyle.right}>
      <div className={cartStyle.rightBottom}>
        <div className={cartStyle.rightBottomHeading}>
          <h1>CART BREAKDOWN</h1>
        </div>
        <div className={cartStyle.rightBottomCartTotal}>
          <div>
            <span>Cart Total</span>
            <span>Rs. {discountTotal}</span>
          </div>
          <div>
            <span>Discount on MRP</span>
            <span>Rs. {(discountTotal - subtotal)}</span>
          </div>
          <div>
            <span>Delivery charges</span>
            <span>Rs. 0</span>
          </div>
        </div>
        <hr style={{ marginTop: "30px" }} />
       
        <div className={cartStyle.rightBottomAmount}>
          <span>Amount to be paid</span>
          <span>Rs. {subtotal}</span>
        </div>
      </div>
      <div className={cartStyle.rightTop}>
          <div style={{ marginTop: "-20px" }}>
                  {" "}
                  <Button mt={4} colorScheme="teal">
                   <Address /> 
                  </Button>
          </div> 
      </div>
     <div style={{border:"2px solid teal", marginTop:"30px",padding:"2%", color:"#053f41" ,fontWeight:"bold"}}>
      <p>Free delivery with cart value above ₹999.</p>
     </div>
    </div>
    
  </div>
  )
}


export default CartPage;