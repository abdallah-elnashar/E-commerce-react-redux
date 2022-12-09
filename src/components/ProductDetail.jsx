import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../utils/fetchFromAPI";
import { ClimbingBoxLoader } from "react-spinners";
import { AiOutlineHeart } from "react-icons/ai";
//

const ProductDetail = () => {
  const { id, title } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isDiscount, setIsDiscount] = useState(null);
  const [productDetails, setProductDetails] = useState({});
  let newTitle = title.slice(0, 95);

  useEffect(() => {
    setIsLoading(true);
    fetchProductDetails(`${id}`).then((data) => {
      setProductDetails(data);
      setIsLoading(false);
      if (productDetails.app_sale_price === productDetails.original_price) {
        setIsDiscount(false);
      } else {
        setIsDiscount(true);
      }
    });
  }, [id]);

  return (
    <Fragment>
      {isLoading && (
        <div className=" flex justify-center items-center h-screen">
          <ClimbingBoxLoader className="" color={"#12264b"} size={20} />
        </div>
      )}
      {!isLoading && (
        <div className="md:mx-32 sm:mx-4 rounded shadow-lg sm:mt-20 md:mt-36 ">
          <div className=" flex flex-wrap sm:flex-col bg-white sm:items-center sm:justify-center  mt-7 px-10 py-8 gap-6">
            <Fragment>
              <div className="flex-1 p-3 flex flex-col bg-white justify-center items-center gap-4 sm:h-screen ">
                <div className="sm:h-72 sm:w-72">
                  <img
                    className="  sm:w-72 sm:h-72 w-96 h-96"
                    src={productDetails.product_main_image_url}
                    alt="image product"
                  />
                </div>
                <div className="flex justify-center items-center gap-3">
                  {productDetails?.product_small_image_urls
                    .slice(0, 4)
                    .map((img) => (
                      <img
                        key={img}
                        className=" w-14 h-14 cursor-pointer"
                        src={img}
                        alt="image product"
                      />
                    ))}
                </div>
              </div>
              <div className=" flex-1 pt-6 flex justify-center items-center bg-white ">
                <div className="flex flex-col justify-between items-start border-b-2 border-gray-300 ">
                  <p className=" mb-6 sm:mb-3  text-primary text-xl sm:text-lg font-bold">
                    {newTitle}
                  </p>
                  {isDiscount && (
                    <p className="mb-1 px-2 text-primary text-lg  font-bold">
                      ${productDetails.original_price}
                    </p>
                  )}
                  {/* 
                  <p
                    className={`mb-6 px-3 ${
                      isDiscount
                        ? "line-through text-sm text-secondary "
                        : " text-lg text-primary"
                    } font-bold`}
                  >
                    ${productDetails.original_price}
                  </p> */}

                  <div className="flex items-center justify-between sm:mt-3 mt-5 w-full">
                    <button
                      // onClick={addToCartHandler}
                      className="bg-primary text-white sm:px-3 sm:py-2 sm:text-xs px-3 py-1 mb-2 rounded-md "
                    >
                      Add To Cart
                    </button>
                    <AiOutlineHeart className=" ml-8 text-2xl" />
                  </div>
                </div>
              </div>
            </Fragment>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductDetail;
