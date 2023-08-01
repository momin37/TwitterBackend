import { Router } from "express";

const router = Router();


// create user

router.post("/",(req,res)=>{
    res.status(501).json({
        error: "Not found"
    })
})


// list of users

router.get("/",(req, res)=>{
    res.status(501).json({
        error:"not found"
    })
})

// get user

router.get("/:id",(req,res)=>{
    const {id} = req.params
    res.status(501).json({
        error:"not found"
    })
})

// update user

router.put("/:id",(req,res)=>{
    const {id} = req.params;

    res.status(501).json({
        error:"not found"
    })
})


// delete user

router.delete("/:id",(req,res)=>{
    const {id} = req.params;

    res.status(501).json({
        error:"not found"
    })
})



export default router;