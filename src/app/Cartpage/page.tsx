"use client";

import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating: 4.5,
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: 5,
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    rating: 4.5,
  },
  {
    name: "Olivia P.",
    date: "August 17, 2023",
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    rating: 5,
  },
];

function StarRating({ rating }: any) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
    );
  }
  if (halfStar) {
    stars.push(
      <div
        key="half"
        className="w-5 h-5 bg-yellow-400 rounded-full opacity-50"
      ></div>
    );
  }
  return <div className="flex gap-1">{stars}</div>;
}

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("brown");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: any) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <span>Home</span> &gt; <span>Shop</span> &gt; <span>Men</span> &gt;{" "}
        <span className="font-semibold text-black">T-shirts</span>
      </nav>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Images */}
        <div className="space-y-4">
          <div className="w-full aspect-square border border-gray-200">
            <Image
              src="/path-to-main-image.jpg"
              alt="Product Image"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-20 h-20 border border-gray-200">
              <Image
                src="/path-to-thumbnail-1.jpg"
                alt="Thumbnail 1"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="w-20 h-20 border border-gray-200">
              <Image
                src="/path-to-thumbnail-2.jpg"
                alt="Thumbnail 2"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="w-20 h-20 border border-gray-200">
              <Image
                src="/path-to-thumbnail-3.jpg"
                alt="Thumbnail 3"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          <h1 className="text-3xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center mt-2">
            <div className="flex space-x-1 text-yellow-500">
              {[...Array(4)].map((_, index) => (
                <span key={index}>★</span>
              ))}
              <span className="text-gray-400">☆</span>
            </div>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>

          {/* Price Section */}
          <div className="mt-4">
            <span className="text-2xl font-bold text-black">$260</span>
            <span className="line-through text-gray-400 ml-4">$300</span>
            <span className="ml-2 text-red-500">-40%</span>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-600">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Select Colors */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">
              Select Colors
            </h3>
            <div className="flex space-x-3 mt-2">
              {["brown", "green", "navy"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      color === "brown"
                        ? "#4A3629"
                        : color === "green"
                        ? "#3E4D3E"
                        : "#2E3248",
                  }}
                ></button>
              ))}
            </div>
          </div>

          {/* Select Size */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">Choose Size</h3>
            <div className="flex space-x-4 mt-2">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center space-x-4">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="px-4 py-2 border rounded-md"
            >
              -
            </button>
            <span className="font-semibold">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="px-4 py-2 border rounded-md"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 w-full bg-black text-white py-3 rounded-md text-lg">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Details, Reviews, FAQs */}
      <div className="mt-16 flex justify-between border-t pt-8 text-gray-600">
        <a href="#product-details" className="hover:text-black">
          Product Details
        </a>
        <a href="#reviews" className="hover:text-black">
          Rating & Reviews
        </a>
        <a href="#faqs" className="hover:text-black">
          FAQs
        </a>
      </div>

      {/* Review Section */}
      <div className="px-6 py-10">
        <h2 className="text-2xl font-semibold border-b pb-2">
          All Reviews (451)
        </h2>
        <div className="flex justify-end gap-2 my-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
            <Image src="/filter-icon.svg" alt="Filter" width={16} height={16} />
            Latest
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-lg">
            Write a Review
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md flex flex-col gap-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">
                    Posted on {review.date}
                  </p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
