import React from 'react';

const TopProduct = () => {
    return (
        <div className='mt-10'>
            <p className='text-center mb-10'>
                <h1 className='text-4xl font-bold'>Top Rated Products</h1>
                <hr className='bg-orange-300 w-20 m-auto font-bold'></hr>
                <h4 className='text-2xl'>Find best quality products at Goenkas Fashion Stores</h4>
            </p>
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                    <img
                        src="https://i.insider.com/602bea612edd0f001a8d5dfe?width=750&format=jpeg&auto=webp"
                        alt=""
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img
                            src='https://media.4rgos.it/i/Argos/tu-0123-m050-ww-clp-newin?maxW=1200&qlt=75&fmt.jpeg.interlaced=true'
                            alt=''
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img
                            src='https://media.istockphoto.com/id/1360648166/photo/classic-business-style-of-clothing.jpg?s=612x612&w=0&k=20&c=2jqW59J49elWzKqcWoNeGIDWg0YR1_H94F0rrzSBRK0='
                            alt=''
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
                <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruaMEyORfqHXW2G5V6CNtvbH2uxHDSMaTHQ&usqp=CAU'
                        alt=''
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopProduct;