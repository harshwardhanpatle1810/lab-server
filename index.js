import express from 'express'; 

const app = express();

app.use(express.json());

const PORT =5000;

app.get("/order/food",(req,res)=>{

    const { menu,price,quantity} = req.query;
    const {user, country} = req.headers;
    const totalPrice = parseInt(price) + parseInt(quantity);

    res.json({
        message:`you have ordered ${quantity} ${menu}`,
        bill:`Your Bill is ${totalPrice}`,
        user:`your are ${user} from ${country}`
    })
})

app.get("/food/:type",(req,res)=>{
    
    const{type}=req.params;
   if (type==="veg"){
    return res.json({
        message:"you have order veg foog"
    })
   }

    else{
        return res.json({
            message:"you have order non-veg food"
        })
    }

})

app.post('/user',(req,res)=>{
   const {name,age} = req.body;

    res.json({
        message:`hello ${name} ,you are ${age} Years`
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on the  port ${PORT}`);
})

