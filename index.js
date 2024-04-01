import express from 'express'; 

const app = express();

const PORT =5000;

app.get('/burger', (req, res) => {
    res.send("burger is ready")
})

app.get('/pizza',(req,res) =>{
    res.send("Pizza is ready")
})

app.get('/pasta',(req,res )=>{
    res.send("pasta is ready")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

