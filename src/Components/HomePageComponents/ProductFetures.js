import React, { useState } from 'react';
import Categorys from './CategoryData';
import Marquee from 'react-fast-marquee';

const ProductFetures = () => {
    const [products, setProducts] = useState(Categorys)
    return (
        <div className='mt-10'>
            <p className='text-center mb-10'>
                <h1 className='text-4xl font-bold'>Top Rated Products</h1>
                <hr className='bg-orange-300 w-20 m-auto font-bold'></hr>
                <h4 className='text-2xl'>Find best quality products at Goenkas Fashion Stores</h4>
            </p>
            <Marquee
                pauseOnHover={true}
                gradient={false}
                className='cursor-pointer'>
                {
                    products.map((tool, i) => {
                        const { img, title, Price, name } = tool;
                        return (
                            <div>

                                <a href="#" className="group relative block bg-black ml-4 w-60">
                                    <img
                                        alt="Developer"
                                        src={img}
                                        className="absolute inset-0 h-full  w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                    />

                                    <div className="relative p-4 sm:p-6 lg:p-8">


                                        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{name}</p>

                                        <div className="mt-32 sm:mt-48 lg:mt-64">
                                            <div
                                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                            >
                                                <p className="text-sm text-white">
                                                    {title}
                                                </p>
                                                <p className="text-sm text-white">
                                                    {Price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </Marquee>
        </div>
    );
};

export default ProductFetures;