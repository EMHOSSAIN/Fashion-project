import React, { useState } from 'react';
import Categorys from './CategoryData';


const FindCategory = () => {
    const [details, setDetails] = useState(Categorys)
   

    const filterResult = (catItem) => {
        const result = Categorys.filter((carData) => {
            return carData.name === catItem
        })
        setDetails(result)

    }
    return (
        <div className='mt-8'>
            <div>
                <p className='text-center mb-10'>
                    <h1 className= 'text-4xl font-bold'>ALL Cotegory</h1>
                    <hr className='bg-orange-300 w-20 m-auto font-bold'></hr>
                    <h4 className='text-2xl'>Find best quality products at Goenkas Fashion Stores</h4>
                </p>

               <div className=''>
               <button onClick={() => filterResult('Womans')} class=" mr-6 bg-white text-black  font-semibold py-3 px-4 border border-gray-400 rounded shadow"> Woman's </button>
                <button onClick={() => filterResult('Indian')} class=" mr-6 bg-white text-black  font-semibold py-3 px-6 border border-gray-400 rounded shadow">Indian </button>
                <button onClick={() => filterResult('Kids')} class=" mr-6 bg-white text-black  font-semibold py-3 px-8 border border-gray-400 rounded shadow">Kids </button>
                <button onClick={() => filterResult('Western')} class=" mr-6 bg-white text-black  font-semibold py-3 px-5 border border-gray-400 rounded shadow">Western </button>
                <button onClick={() => filterResult('Jeans')} class=" mr-6 bg-white text-black  font-semibold py-3 px-7 border border-gray-400 rounded shadow">Jeans </button>
                <button onClick={() => filterResult('Formal')} class=" mr-6 bg-white text-black  font-semibold py-3 px-6 border border-gray-400 rounded shadow">Formal </button>
                <button onClick={() => filterResult('Party')} class=" mr-6 bg-white text-black  font-semibold py-3 px-2 border border-gray-400 rounded shadow"> Party Wear </button>
               </div>


            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 text-gray-900">
            {
                details.map(detail => <div >
                    <div >
                        <div>

                            <img src={detail.img} alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md" />

                            <div class="relative px-4 -mt-16  ">
                                <div class="bg-white p-6 rounded-lg shadow-lg">
                                    <div class="flex items-baseline">

                                        <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                            Category: {detail.name}
                                        </div>
                                    </div>

                                    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">Title: {detail.title}</h4>

                                    <div class="mt-1">Price :
                                        {detail.Price}

                                    </div>
                                    <a
                                        className="group relative rounded-full inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                                        href="/"
                                    >
                                        <span
                                            className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
                                        ></span>

                                        <span
                                            className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                                        >
                                           Shop Now
                                        </span>
                                    </a>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                )
            }
            </div>
           
        </div>
    );
};

export default FindCategory;