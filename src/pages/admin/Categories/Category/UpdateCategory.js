import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const UpdateCategory = () => {
  let params = useParams()
  const [category, setCategory] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/api/categories/"+params.id).then((res)=>setCategory(res.data.category))
    .catch((err) => console.log(err))
  }, []);


    let onInputChange = (e)=>{
        // console.log(e.target.value)
        setCategory({
          ...category,
          [e.target.id] : e.target.value
        })
      }

     let updateCategory = (e)=>{
        e.preventDefault();
        axios.put("http://localhost:5000/api/categories/"+params.id,category).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})


     }

  return (
    <div className="container">
        <form method='POST' className='row'>
            <div className="col-md-12 mt-2">
                <label htmlFor="booktitle" className="form-label">Category Title : </label>
                <input type="text" className='form-control' value={category ? category.title : "category"}   name="cattitle" id="title" placeholder="Category Title"  onChange={(e)=>onInputChange(e)}  />
            </div>
            <div className="col-md-12 mt-2">
                <input type="submit" className='btn btn-success' value="Update Category" onClick={(e)=>updateCategory(e)}  />
            </div>
        </form>
    </div>
  )
}

export default UpdateCategory