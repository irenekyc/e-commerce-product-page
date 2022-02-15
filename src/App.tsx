import React, { useEffect } from "react";

import "./App.scss";
import Header from "./components/header";
import ProductDescription from "./widgets/product-description";

import { useDispatch } from "react-redux";
import { loadUser } from "./reducer/user/actions";
import { loadProduct } from "./reducer/product/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadProduct());
  }, [dispatch]);

  return (
    <main className="container">
      <Header />
      <ProductDescription />
    </main>
  );
}

export default App;
