import React, { Fragment, useEffect, useState } from "react";
import Product from "./Product";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useSelector } from "react-redux";
import { ClimbingBoxLoader } from "react-spinners";
//

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const selectedCategory = useSelector((state) => state.category.category);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setIsLoading(true);
    fetchFromAPI(`${selectedCategory}`)
      .then((data) => {
        setProducts(data.docs);
        setIsLoading(false);
      })
      .catch((err) => "No products were found :(");
  }, [selectedCategory]);
  return (
    <>
      <Fragment>
        {isLoading && (
          <div className="md:mt-40 sm:mt-24   relative block  h-screen bg-transparent">
            <div className=" flex justify-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ClimbingBoxLoader className="" color={"#12264b"} size={20} />
            </div>
          </div>
        )}
      </Fragment>
      <Fragment>
        <div className=" md:mx-18 md:mt-40 lg:mx-32 flex flex-wrap sm:justify-evenly justify-center items-center sm:gap-1 md:gap-4 sm:mt-24 mb-4">
          {!isLoading &&
            products?.map((product) => (
              <Product
                key={product.product_id}
                id={product.product_id}
                title={product.product_title}
                rate={product.evaluate_rate}
                price={product.original_price}
                image={product.product_main_image_url}
                salePrice={product.app_sale_price}
              />
            ))}
        </div>
      </Fragment>
    </>
  );
};

export default Home;
