import {Router} from 'express';

const router=Router();

router.get('/', (req, res)=>{
    res.send("Modular router")
});


export default router;