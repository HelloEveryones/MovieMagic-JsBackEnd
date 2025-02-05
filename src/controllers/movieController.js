import { Router } from "express";
import movieService from "../services/movieService.js";


const movieController = Router();

movieController.get('/create', (req, res)=>{
    res.render('create')
});

movieController.get('/search', (req, res)=>{
    const movies=movieService.getAll;

res.render('search',{movies});
})

movieController.post('/create', (req, res)=>{
    const newMovie=req.body;
   
    movieService.create(newMovie);
    
    res.redirect('/');
    
});
movieController.get('/:movieId/details', (req, res)=>{
    const movieId=req.params.movieId;
    const movie =movieService.findOne(movieId);
    

    res.render('details',{movie})
});


export default movieController;
 