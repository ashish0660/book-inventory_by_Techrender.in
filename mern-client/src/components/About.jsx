import React from "react";
import video from "../assets/about.mp4";

import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";

function About() {
  // Define socialLinks array
  const socialLinks = [
    {
      id: 1,
      icon: <FiGlobe />,
      url: "https://www.stoman.me/",
    },
    {
      id: 2,
      icon: <FiGithub />,
      url: "https://github.com/",
    },
    {
      id: 3,
      icon: <FiTwitter />,
      url: "https://twitter.com/",
    },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/ashish0660",
    },
    {
      id: 5,
      icon: <FiYoutube />,
      url: "https://www.linkedin.com/in/ashish0660",
    },
  ];

  return (
    <div className="px-4 lg:px-24 bg-teal-100 justify-center text-justify">
      <div className="max-w-screen-xl mx-auto md:flex md:flex-row md:justify-between md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 md:gap-4">
          {/* Grid 01: Social Links */}
          <div className="md:col-span-1 md:row-span-3 text-left ">
            {/* Welcome msg */}
            <h1 className="text-2xl font-bold text-black">
              Welcome to{" "}
              <span className="text-red-400">
                Book Invontory by{" "}
                <span className="animate-blink text-2xl text-blue-600 ">
                  Techrender.in
                </span>
              </span>{" "}
              - Where Stories Come to Life!
            </h1>

            <br />
            <div className="text-center md:text-left mt-16">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Follow Me Online
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 text-justify">
              <h1 className="text-2xl font-semibold mb-6 text-black-700">
                Our Story:
              </h1>
              <p>
                Embark on a literary adventure with us!{" "}
                <span className="text-red-400">
                  Book Invontory by{" "}
                  <span className="animate-blink text-2xl text-blue-600 ">
                    Techrender.in
                  </span>
                </span>{" "}
                was born out of a shared enthusiasm for the written word. Our
                founders, avid book lovers themselves, envisioned a haven where
                bibliophiles could connect, explore, and celebrate the rich
                tapestry of human stories.
              </p>
            </div>
          </div>

          {/* Grid 02: Video */}
          <div className="md:col-span-2">
            <div className="md:w-full items-center">
              <video autoPlay loop muted className="rounded-lg w-full">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Grid 03: Text Content */}
          <div className="md:col-span-2 md:row-span-2">
            <h1 className="text-3xl font-semibold mb-6 text-gray-700 font-serif">
              A Message From Our Co-Founder
            </h1>
            <p className="md:w-full">
              Welcome to our vibrant community of book lovers! At our online
              platform, we've created a space where individuals can seamlessly
              buy and sell high-quality books across a diverse range of
              categories. Explore the world of literature through our extensive
              collection, featuring everything from classic novels to
              contemporary bestsellers. Our mission is to connect book
              enthusiasts, offering a convenient marketplace to trade, discover,
              and cherish the written word. Whether you're passionate about
              fiction, non-fiction, mystery, science fiction, or any other
              genre, you'll find a treasure trove of literary wonders waiting
              for you. Sellers, unleash the stories you've loved and pass them
              on to a new reader. Buyers, embark on a journey of literary
              exploration, finding hidden gems and must-reads that resonate with
              your interests. Our platform fosters a sense of community, where
              every book holds a unique story and contributes to the collective
              tapestry of knowledge. Navigating our user-friendly interface, you
              can easily search for specific titles, explore various genres, and
              connect with fellow book enthusiasts. We believe in the power of
              sharing stories and creating a sustainable cycle of book love.
              Join us in promoting a culture of reading, sharing, and
              appreciating the art of storytelling. Whether you're a seasoned
              bibliophile or a newcomer to the world of books, our platform is
              designed to cater to your needs, making the buying and selling
              process a delightful experience. Immerse yourself in a community
              where every page turned opens up new possibilities. Welcome to our
              online haven for book aficionados, where the love for literature
              knows no bounds. <b> Happy reading and happy trading!</b>
            </p>
            <div className="mt-16">
              <h1 className="text-2xl font-semibold mb-6 text-black-700">
                What Defines Us:
              </h1>
              <p className="mt-6">
                <span className="font-medium">Diverse Collections:</span> Dive
                into a curated collection that spans genres and eras. From
                timeless classics to contemporary gems, our library is a
                testament to the richness of human creativity.
              </p>
              <p className="mt-6">
                <span className="font-medium">Community Spirit:</span> Join a
                vibrant community of readers, writers, and storytellers. Engage
                in discussions, share your favorite reads, and discover hidden
                literary treasures.
              </p>

              <p className="mt-6">
                <span className="font-medium">Seamless Transactions: </span>
                Whether you're a seller eager to pass on cherished books or a
                buyer on the hunt for your next literary companion, our platform
                ensures a smooth and enjoyable experience.
              </p>
            </div>
            <div className="mt-12">
              <h1 className="text-2xl font-semibold mb-6 text-black-700">
                Our Mission:
              </h1>
              <p>
                At <span className="text-red-400">
                Book Invontory by{" "}
                <span className="animate-blink text-2xl text-blue-600 ">
                  Techrender.in
                </span>
              </span>, we believe in the power of stories
                to inspire, connect, and transform lives. Our mission is to
                foster a culture of reading, where every page turned opens a
                gateway to new worlds and possibilities.
              </p>
            </div>

            <div className="mt-20 text-2xl font-extrabold"> 
            Welcome to <span className="text-red-400">
                Book Invontory by{" "}
                <span className="animate-blink  text-blue-600 ">
                  Techrender.in
                </span>
              </span> Once again - Where Every Book Has a Story, and Every Story Finds a Home.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
