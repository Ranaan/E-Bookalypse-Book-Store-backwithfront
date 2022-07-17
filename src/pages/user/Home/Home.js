import React, { useEffect, useState } from 'react';
import HomeSlider from '../../../components/HomeSlider/HomeSlider';
import axios from 'axios';
import HomeCategories from '../../../components/HomeCategories/HomeCategories';
import FlashSaleSlider from "../../../components/HomeSlider/FlashSaleSlider"
import TrendingBooksUp from '../../../components/TrendingBooksUp/TrendingBooksUp';

function Home() {
  // Testing Starter Api 

  const [books, setBooks] = useState();
  const [newBook,setNewBook]= useState({
    id: Math.random(),
    title:'',
    description:'',
  });
  useEffect(()=>{
    
    axios.get('http://localhost:5000/api/books')
    .then((res)=>{setBooks(res.data.book)})
    .catch((err)=>{console.log(err)})


  })

  let onInputChange =(e)=>{
    setNewBook({
      ...newBook,
      [e.target.id] : e.target.value
    })
  }

  let addBook = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/books',newBook)
    .then(res => console.log(res))
    .catch((err)=>{console.log(err)});
 
  }

  // end Section ( TESTIING STARTER API)




      {/* Home Test Axios
      <>
        <div className='container mb-5'>
          <div className='row'>
          {books? 
            books.map((book)=>{
              return(
                <div key={book._id} className='col-lg-4'>
                  <div  className='card'>
                      <h5>{book.title}</h5>
                      <p>{book.description}</p>
                  </div>
                </div>
              )
            })
            :
            null
          }
        
          </div>
        </div>
          <div className="container formAddBook">
          <form method="POST">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" onChange={onInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input type="text" className="form-control" id="description" onChange={onInputChange} />
            </div>
            
            <button type="submit" onClick={addBook} className="btn btn-primary">Add Book</button>
          </form>
          </div>
        </> 
         End Section Test Axios */}
     


  return (
    <>

      <HomeSlider></HomeSlider>
      <TrendingBooksUp/>
      <HomeCategories />
      <FlashSaleSlider />
      {/* <OurPartners /> */}
    </>
  )
}

export default Home