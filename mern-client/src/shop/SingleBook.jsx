import React from 'react';
import { useLoaderData } from 'react-router-dom';

function SingleBook() {
    const { bookTitle, imageURL,authorName,bookDescription } = useLoaderData();
  

    return (
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-center lg:gap-8 p-5 mt-28 px-4 lg:px-24'>
            
            <div className='aspect-w-50 aspect-h-50 sm:max-w-md md:max-w-lg lg:max-w-xl'>
            <img src={imageURL} alt="Book Cover" className='object-contain rounded-lg' />
            </div>

            <div className='lg:w-2/3'>
                <p className='text-3xl font-bold mt-4 text-black mb-3'>Title: {bookTitle}</p>
                <p className='text-base font-semibold text-black mb-3'>Author: {authorName}</p>
                <p className='text-base mb-6'>{bookDescription}</p>
                <div className='text-base font-semibold text-black mb-6'>
                    Other book suggestions:
                    {/* Render other book suggestions here */}
                </div>
                <div className='ad-space'>
                    {/* Ad space content */}
                </div>
            </div>
        </div>
    );
}

export default SingleBook;
