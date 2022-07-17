import axios from 'axios';
import React,{useState} from 'react'

const AddCategory = () => {
    const [category, setCategory] = useState();

    let onInputChange = (e)=>{
        // console.log(e.target.value)
        setCategory({
          ...category,
          [e.target.id] : e.target.value
        })
      }

     let addCategory = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/categories",category).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})


     }

  return (
    <div className="container">
        <form method='POST' className='row'>
            <div className="col-md-12 mt-2">
                <label htmlFor="booktitle" className="form-label">Category Title : </label>
                <input type="text" className='form-control'    name="cattitle" id="cattitle" placeholder="Category Title"  onChange={(e)=>onInputChange(e)}  />
            </div>
            <div className="col-md-12 mt-2">
                <input type="submit" className='btn btn-success' value="Add Category" onClick={(e)=>addCategory(e)}  />
            </div>
        </form>
    </div>
  )
}

export default AddCategory