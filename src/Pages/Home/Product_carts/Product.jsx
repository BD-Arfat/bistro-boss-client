import React from "react";

const Product = ({ product }) => {
  const { name, recipe, image, category, price } = product;
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={image} // এখানে আপনার ইমেজ URL যোগ করুন
        alt="Caesar Salad"
        className="w-full h-48 rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{recipe}</p>
        <button className="mt-4 w-full px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg focus:outline-none">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
