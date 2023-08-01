import { Router } from "express";

const router = Router();


// create tweet

router.post("/",(req,res)=>{
    res.status(501).json({
        error: "mother fucker"
    })
})


// list of tweets

router.get("/",(req, res)=>{
    res.status(501).json({
        error:"mother fucker"
    })
})

// get tweet

router.get("/:id",(req,res)=>{
    const {id} = req.params
    res.status(501).json({
        error:"not found"
    })
})

// update tweet

router.put("/:id",(req,res)=>{
    const {id} = req.params;

    res.status(501).json({
        error:"not found"
    })
})


// delete tweet

router.delete("/:id",(req,res)=>{
    const {id} = req.params;

    res.status(501).json({
        error:"not found"
    })
})



export default router;