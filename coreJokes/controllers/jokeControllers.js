const Note = require("../models/joke.model")
module.exports = 
{
    //++++++++++++++READ ALL NOTES++++++++++++++++++++++//
    findAll : (req,res)=>
    {
        Joke.find()
        .then(allJokes => {
            res.json({allJokes})
        })
        .catch(err=>res.status(400).json(err.errors))
    },
    //++++++++++++++++CREATE  NOTE+++++++++++++++++++++++//
    create:(req,res)=>
    {
        Joke.create(req.body)
        .then(newJoke => res.json({newJoke})) // najmou n7ottouha bel  {} ou non poour newnote
        .catch(err=>res.status(400).json(err.errors))
    },
    //++++++++++++++++READ ONE NOTE+++++++++++++++++++++++//
    findOne:(req,res)=>
    {
     // soit hedhi Note.findOne({_id:req.params.id}) ou l'autre 
        Joke.findById(req.params.id)
        .then(oneJoke=>res.json(oneJoke))
        .catch(err=>res.status(400).json(err))
    },
    //++++++++++++++++Update ONE NOTE+++++++++++++++++++++++//
    update:(req,res)=>
    {
        Note.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        .then(updatedJoke=>res.json(updatedJoke))
        .catch(err=>res.status(400).json(err.errors));
    },
     //++++++++++++++++Delete ONE NOTE+++++++++++++++++++++++//
     delete:(req,res)=>
     {
        Note.findByIdAndDelete(req.params.id)
        .then(result=> res.json(result))
        .catch(err=>res.json(err));
     }


}