const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectToDB = require("./DB/db"); // Import the database connection function
const { ObjectId } = require("mongodb");

require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world");
});

// Starting the server and connecting to the database
async function startServer() {
  try {
    const client = await connectToDB(); // Connect to the database
    const bookCollection = client.db("BookInventory").collection("books");

    // Insert a book to db
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;

        // Check if the book already exists in the collection
        const existingBook = await bookCollection.findOne({ bookTitle: data.bookTitle });
        
        if (existingBook) {
          res.send("This book is already uploaded.");
        } else {
          const result = await bookCollection.insertOne(data);
          if (result.acknowledged === true) {
            res.send(result);
          } else {
            res.send("Failed to upload the book.");
          }
        }
      } catch (error) {
        // Handle any potential errors
        console.error("Error uploading book:", error);
        res.status(500).send("Internal Server Error");
      }
    });
    

    //************ */ Upload many data in one time******************

  //   app.post("/upload-books", async (req, res) => {
  //     try {
  //         const data = req.body;
  
  //         if (!Array.isArray(data)) {
  //             return res.status(400).send("Invalid data format. Expected an array.");
  //         }
  
  //         // Extracting book titles to check for existing books in the collection
  //         const bookTitles = data.map(book => book.bookTitle);
  //         const existingBooks = await bookCollection.find({ bookTitle: { $in: bookTitles } }).toArray();
          
  //         const existingTitles = existingBooks.map(book => book.bookTitle);
  //         const newBooks = data.filter(book => !existingTitles.includes(book.bookTitle));
  
  //         if (existingBooks.length > 0) {
  //             return res.send(`Some books already exist: ${existingTitles.join(', ')}`);
  //         }
  
  //         if (newBooks.length === 0) {
  //             return res.send("All books are already uploaded.");
  //         }
  
  //         const result = await bookCollection.insertMany(newBooks);
  
  //         if (result.insertedCount > 0) {
  //             res.send(`${result.insertedCount} books uploaded successfully.`);
  //         } else {
  //             res.send("Failed to upload books.");
  //         }
  //     } catch (error) {
  //         console.error("Error uploading books:", error);
  //         res.status(500).send("Internal Server Error");
  //     }
  // });

  //***** Get all books from the database ******

    // app.get("/all-books", async (req, res) => {
    //   try {
    //     const books = await bookCollection.find().toArray();
    //     res.send(books);
    //   } catch (error) {
    //     console.error("Error finding books:", error);
    //     res.status(500).json({ error: "Unable to find books" });
    //   }
    // });

    // Update book data: update and patch method
    app.patch("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = { _id: new ObjectId(id) };
        const options = { update: true };

        const updateDoc = {
          $set: {
            ...updateBookData,
          },
        };

        const result = await bookCollection.updateOne(
          filter,
          updateDoc,
          options
        );
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating book" });
      }
    });

    //delete a book data
    app.delete("/book/:id", async (req, res) => {
        try {
          const id = req.params.id;
          const filter = { _id: new ObjectId(id) };
          const result = await bookCollection.deleteOne(filter);
      
          if (result.deletedCount === 0) {
            res.send("Already deleted");
          } else {
            res.send(result);
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Error deleting book" });
        }
      });

    //   find by category

    app.get("/all-books", async (req, res) => {
        let query = {};
        if(req.query?.category){
            query= {category: req.query.category}
        }
        const results = await bookCollection.find(query).toArray();
        res.send(results);
    })
      //delete all data **************

      app.delete("/delete-all-books", async (req, res) => {
        try {
            let query = {};
            if(req.query?.category){
                query= {category: req.query.category}
            }
            
            const deletion = await bookCollection.deleteMany(query);
            
            res.status(200).json({ message: 'All data deleted successfully', deletion });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    //Get single book
    app.get("/book/:id", async (req, res) =>{
      try {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await bookCollection.findOne(filter);
        res.send(result);
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to fetch book" });
      }
    });

    // Application port code
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });


  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

startServer();
