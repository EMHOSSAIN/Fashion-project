import React from 'react';

const ReviewSection = () => {
    return (
        <div className='mt-10'>
            <p className='text-center mb-10'>
                <h1 className='text-4xl font-bold'>Customers Review</h1>
                <hr className=' bg-orange-300 w-20 m-auto font-bold'></hr>
                <h4 className='text-2xl'>Find best quality products at Goenkas Fashion Stores</h4>
            </p>
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-10' >
                <div className='rounded-xl border-t-4  border-gray-600 shadow-xl px-4 pb-5'>

                    <figure className="mt-10">
                        <blockquote >
                            <p className='text-xs text-justify'>
                                “You have recently purchased amazing piece of clothing 
                                and you would like to leave the best review to the fashion
                                 designer that has created it? We got you covered! Just copy
                                  and paste one of these well crafted clothing review examples
                                   and you are good to go.”
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img
                                className="mx-auto h-10 w-10 rounded-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8V5m4Hz-cunLQV_Uexn-KV_JpOOHxaUBwzXRLNnc2SHvdp3DyOrzu8vcZEiv_qOp1F_w&usqp=CAU"
                                alt=""
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-gray-900">Lurkin katuor</div>
                                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-gray-600">CEO of World Place</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                {/* 2nd */}
                <div className='rounded-xl border-t-4  border-gray-600 shadow-xl px-4 pb-5'>

                    <figure className="mt-10">
                        <blockquote >
                            <p className='text-xs text-justify'>
                                “ Such a lovely experience. The girls made 
                                the experience really enjoyable even in the current climate.
                                 They were so helpful from start to finish.,
                                  offering great advise and going above a
                                 beyond to help me find the perfect dress.”
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img
                                className="mx-auto h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-gray-900">Judith Black</div>
                                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="text-gray-600">CEO of Workcation</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    );
};

export default ReviewSection;