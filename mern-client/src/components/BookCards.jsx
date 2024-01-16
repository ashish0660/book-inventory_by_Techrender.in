import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

function BookCards({ headline, books }) {
  return (
    <div className="my-16 px-4 lg:px-24 mt-20">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      <div className="overflow-x-auto mt-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper z-10" // Add z-10 for a higher z-index
          style={{ paddingTop: "56px" }} // Adjust padding top to account for the fixed navbar height
        >
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <Link to={`/book/${book._id}`}>
                <div className="relative">
                  <img src={book.imageURL} alt={book.bookTitle} />
                  <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <div>
                    <h3>{book.bookTitle}</h3>
                    <p className="font-bold text-black">{book.authorName}</p>
                  </div>
                  <div>
                    <p>$10.00</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BookCards;
