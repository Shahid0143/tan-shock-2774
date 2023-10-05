import React, { useEffect, useState } from "react";
import "../style/Product.scss";
import { getproduct } from "../Redux/productReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { addToCart } from "../Redux/Cart/action";
import LoadingSpinner from "./Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify"; // Import toast notifications
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles

function ProductList() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);
  const product = useSelector((store) => store.ProductReducer.products);
  const isLoading = useSelector((store) => store.ProductReducer.isLoading);
  const [count, setcount] = useState(0);
  const [page, setpage] = useState(1);
  const [seaechParams, setseaechParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    const obj = {
      params: {
        cat: seaechParams.getAll("cat"),
        rating: seaechParams.getAll("rat"),
        _sort: seaechParams.get("order") && "price",
        _order: seaechParams.get("order"),
        _limit: 6,
      },
    };

    dispatch(getproduct(obj, page, setcount));
  }, [location.search, page]);

  const handleAdd = (id) => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      //  toast.error for an error notification
      toast.error("Product already present in the cart", {
        position: "top-center",
        autoClose: 3000, // Auto-close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      const itemToAdd = product.find((item) => item.id === id);
      addToCart(dispatch, itemToAdd);
      //  toast.success for a success notification
      toast.success("Product added to the cart", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="products" id="products">
      <div className="container">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          product.map((item) => (
            <div className="child" key={item.id}>
              <Link to={`/singleProduct/${item.id}`}>
                <div className="childimage">
                  <img src={item.img} alt="das" />
                </div>
              </Link>
              <div className="childnamem">
                <h2>{item.name}</h2>
                <p style={{ color: "orange" }}>{item.cat}</p>
              </div>
              <div className="price">
                <del
                  style={{ color: "grey", position: "relative", right: "40px" }}
                >
                  ₹{item.o_price}
                </del>
                <p style={{ color: "teal", fontWeight: "bold" }}>
                  ₹{item.price}
                </p>
                <p
                  style={{
                    color: "teal",
                    fontWeight: "bold",
                    position: "relative",
                    left: "40px",
                  }}
                >
                  ⭐{item.rating}
                </p>
              </div>

              <button className="cartbutton" onClick={() => handleAdd(item.id)}>
                ADD TO CART
              </button>
            </div>
          ))
        )}
      </div>
      <div className="but">
        <div>
          <button
            className="button"
            disabled={page === 1}
            onClick={() => {
              setpage(page - 1);
            }}
          >
            <span>Previous</span>
          </button>
        </div>
        <div>
          <h1 className="count">{page}</h1>
        </div>
        <div>
          <button
            className="button"
            disabled={page === Math.floor(25 / product.length)}
            onClick={() => {
              setpage(page + 1);
            }}
          >
            <span>Next</span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductList;
