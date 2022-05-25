import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Popular",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Cocktail Type",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cocktail Strength",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Cocktail Color",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Moments",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Celebrations",
    },
  ];
  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='category-box' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
