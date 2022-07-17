const categoryModel = require("../models/categories")


module.exports.getAllCategories = (req,res)=>{
    categoryModel.find({}).then(
       categories => res.status(200).send({categories})
    )
}

module.exports.addCategory = (req,res)=>{
    let newCat = new categoryModel({
        title:req.body.cattitle
    })
    newCat.save()
    // console.log(req.body)
    res.status(200).send("added successfully");

}

module.exports.deleteCategory = (req,res)=>{


    categoryModel.deleteOne({_id:req.params.catId}).then(category=>{
        res.status(200).send("deleted successfully" + {category})
    })

}

module.exports.updateCategory = (req,res)=>{
    categoryModel.updateOne({_id:req.params.catId},req.body).then((category)=>res.status(200).send("updated Successfully"))
    


}
module.exports.getCategory = (req,res)=>{
    categoryModel.findOne({_id:req.params.catId}).then((category)=>res.status(200).send({category}))

}
