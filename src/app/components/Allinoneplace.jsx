'use client';
import React from 'react';
import Link from 'next/link';

const Alloneplace = () => {
  const products = [
    {
      id: 1,
      title: 'Woman Hoodie Mockup Front View PSD',
      price: '$2.99',
      oldPrice: '$3.99',
      image: 'https://i.postimg.cc/MKr3759W/Whats-App-Image-2025-05-06-at-11-27-48-AM-removebg-preview.png', 
    },
    {
      id: 2,
      title: 'Woman Hoodie Mockup Front View PSD',
      price: '$2.99',
      oldPrice: '$3.99',
      image: 'https://i.postimg.cc/MKr3759W/Whats-App-Image-2025-05-06-at-11-27-48-AM-removebg-preview.png',
    },
    {
      id: 3,
      title: 'Woman Hoodie Mockup Front View PSD',
      price: '$2.99',
      oldPrice: '$3.99',
      image: 'https://i.postimg.cc/MKr3759W/Whats-App-Image-2025-05-06-at-11-27-48-AM-removebg-preview.png',
    },
    {
      id: 4,
      title: 'Woman Hoodie Mockup Front View PSD',
      price: '$2.99',
      oldPrice: '$3.99',
      image: 'https://i.postimg.cc/MKr3759W/Whats-App-Image-2025-05-06-at-11-27-48-AM-removebg-preview.png',
    },
    {
      id: 5,
      title: 'Woman Hoodie Mockup Front View PSD',
      price: '$2.99',
      oldPrice: '$3.99',
      image: 'https://i.postimg.cc/MKr3759W/Whats-App-Image-2025-05-06-at-11-27-48-AM-removebg-preview.pngg',
    },
    {
      id: 6,
      title: 'Woman Hoodie Mockup Front View PSD',
      price: '$2.99',
      oldPrice: '$3.99',
      image: 'https://i.postimg.cc/MKr3759W/Whats-App-Image-2025-05-06-at-11-27-48-AM-removebg-preview.png',
    },
  ];

  return (
    <section className="py-7 bg-white text-center max-w-6xl mx-auto">
      <h2 className="text-2xl font-extrabold mb-2 text-black">Find the Right Mockup for Any Project — All in One Place!</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
      From minimal to bold, our diverse mockup library helps you showcase your work with style. Save time and impress clients — all with one platform.
      </p>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  px-4  ">
            {products.map((product) => (
              
             <Link href={`/product-details/${product.id}`} key={product.id}>
               <div
                key={product.id}
                className=" rounded-2xl shadow-md transition pb-4"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-t-2xl w-full h-full lg:w-[262] lg:h-[262px] object-contain mb-4 bg-[#E6E6E6]  "
                />
              <h3 className="text-[18px] font-bold text-gray-800 leading-tight  px-4">
      {product.title}
    </h3>
    
    <div className="mt-4 mb-4">
      <div className="text-[30px] font-extrabold text-gray-900">
        {product.price}
      </div>
      <div className="text-[14px] text-gray-400 line-through">
       Regular Price : {product.oldPrice}
      </div>
    </div>
    
               <div className='p-4'>
               <button className=" py-2 p-4  font-medium text-sm hover:bg-gray-100 transition bg-[#E8E8E8]  w-full rounded-full text-black">
                  + Add to Cart
                </button>
               </div>
              </div>
              </Link>
            ))}
          </div>
   
    </section>
  );
};

export default Alloneplace;
