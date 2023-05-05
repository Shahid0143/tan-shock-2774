import cartStyle from "./Cartstyle.module.css";
import { Button } from "@chakra-ui/react"

const CartPage = () => {
  return (
    <div className={cartStyle.main}>
    <br></br>
    <br></br>
    <br></br>
    <div className={cartStyle.left}>
      <div className={cartStyle.leftTop}>
        <span>
          <h1> Item in your Cart</h1>
        </span>
      </div>
      <div className={cartStyle.leftTop}>
        <span>
          <h1>Add Item</h1>
        </span>
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
            <span>Rs. 0</span>
          </div>
          <div>
            <span>Discount on MRP</span>
            <span>Rs.0</span>
          </div>
          <div>
            <span>Delivery charges</span>
            <span>Rs.0</span>
          </div>
        </div>
        <hr style={{ marginTop: "30px" }} />
       
        <div className={cartStyle.rightBottomAmount}>
          <span>Amount to be paid</span>
          <span>Rs.0</span>
        </div>
      </div>
      <div className={cartStyle.rightTop}>
          <div style={{ marginTop: "-20px" }}>
            {/* <NavLink to="/Payment"> */}
                  {" "}
                  <Button mt={4} colorScheme="teal">
                   {/* <Address cartTotal={cartTotal} />  */}
                  </Button>
                {/* </NavLink> */}
          </div>
      </div>
     <div style={{border:"2px solid teal", marginTop:"30px",padding:"2%", color:"teal" ,fontWeight:"bold"}}>
      <p>Free delivery with cart value above ₹999.</p>
     </div>
    </div>
    
  </div>
  )
}


export default CartPage;