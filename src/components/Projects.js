import React from "react";

function Project() {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-5xl font-bold mb-4">Projects</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg">
            <a
              href="https://winglovecola.github.io/vacation-inspiration/"
              className="inline-block text-blue-500 hover:text-blue-600"
            >
              <img
                src="https://raw.githubusercontent.com/winglovecola/vacation-inspiration/main/assets/images/headerbg.jpg"
                alt="Vacation Inspiration"
                className="mb-4"
              />
            </a>
            <h3 className="text-xl font-bold mb-2">Vacation Inspiration</h3>
            <p className="text-gray-700 mb-4">
              Your end all be all for Travel Locations. This app will allow you
              to search for Locations and the application will generate 10
              things to do at that location. 6 pictures and the weather at the
              moment. there is also a streetMap view from google maps of the
              location.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg">
            <a
              href="https://fierce-forest-79938.herokuapp.com/"
              className="inline-block text-blue-500 hover:text-blue-600"
            >
              <img
                src="https://raw.githubusercontent.com/Tweakiel/Recipe-Sharer/main/public/images/2004.i121.037_isometric_cooking_school_blog_set-01-removebg-preview.png"
                alt="Recipe Sharer"
                className="mb-4"
              />
            </a>
            <h3 className="text-xl font-bold mb-2">Recipe Sharer</h3>
            <p className="text-gray-700 mb-4">
              This is a recipe sharing app. You can create an account and share
              your receips with the world. you can also view recipes from other
              users via the categories that they belong to.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg">
            <a
              href="https://github.com/Tweakiel"
              className="inline-block text-blue-500 hover:text-blue-600"
            >
              <img
                src="https://www.meme-arsenal.com/memes/42794575c50298a6ddfe53af0119897c.jpg"
                alt="Project 3"
                className="mb-4"
              />
            </a>
            <h3 className="text-xl font-bold mb-2">Project 3</h3>
            <p className="text-gray-700 mb-4">Curently WIP</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg">
            <a
              href="https://github.com/Tweakiel"
              className="inline-block text-blue-500 hover:text-blue-600"
            >
              <img
                src="https://i.pinimg.com/originals/82/c4/56/82c45615f30c50b3b957a1124af4bf0f.jpg"
                alt="Project 4"
                className="mb-4"
              />
            </a>
            <h3 className="text-xl font-bold mb-2">Project 4</h3>
            <p className="text-gray-700 mb-4">CURRENTLY WIP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
