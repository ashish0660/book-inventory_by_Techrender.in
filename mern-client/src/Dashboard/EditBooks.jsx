import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

function EditBooks() {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFUrl,
  } = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Politics",
    "Bussiness",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleBookCategoryChange = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  //handle book Update
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;

    const UpdatebookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFUrl,
    };

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(UpdatebookObj)
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        alert("Book has been updated");
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the book Data</h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book Name"
              required
              type="text"
              defaultValue={bookTitle}
            />
          </div>

          {/* authorName */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Author Name"
              required
              type="text"
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* Image URL */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Book Image URL"
              required
              type="text"
              defaultValue={imageURL}
            />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book category" />
            </div>
            <select
              id="inputSate"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleBookCategoryChange}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* book Description */}
        <div>
          <div className="mb-2 block rounded">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write Book Description here..."
            required
            rows={6}
            defaultValue={bookDescription}
          />
        </div>

        {/* Book PDF Link */}

        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookPDFUrl" value="Book Link" />
            </div>
            <TextInput
              id="bookPDFUrl"
              type="text"
              placeholder="Book PDF URL"
              required
              defaultValue={bookPDFUrl}
            />
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
}

export default EditBooks;
