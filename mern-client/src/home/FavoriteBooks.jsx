import React from "react";
import favBookImg from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

function FavoriteBooks() {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img
          src={favBookImg}
          alt="Image"
          className="rounded-lg md:max-w-full"
        />
      </div>

      <div className="md:w-1/2 md:ml-10 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite <span className="text-blue-700">Book Here!</span>
        </h2>
        <p className="text-base md:text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sunt
          cupiditate, aspernatur possimus error nesciunt non dolores est, velit
          magnam optio tenetur rerum? Excepturi velit aperiam, laboriosam
          accusantium magnam inventore!
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listings</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">550+</h3>
            <p className="text-base">Register Users</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">1200+</h3>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FavoriteBooks;
