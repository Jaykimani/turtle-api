import  express  from "express";
import cors from "cors";
import pg from "pg";
import { customSmoothie } from "./content.js";


const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Turtle_Organics",
    password: "sunsetDRIVE98",
    port: 5432
});

db.connect();

const app = express();
app.use(cors());
app.use(express.json());


app.get("/all", async(req, res) => {

    try {
        let ingredients = await db.query("SELECT * FROM smoothie_list");
        res.send(ingredients.rows);
    } catch (error) {
        res.send("None found!!")
    }
   
});

app.post("/orders", async(req, res) => {
    let order = req.body;
    
    try {
       let currentId = await db.query("INSERT INTO user_info (name, phone_no, location, order_type, total_cost, date, time) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id", 
        [order.name, order.phone_no, order.location, order.order_types, order.total_cost, order.order_date, order.order_time]);
         
        try {
            order.smoothie_orders.forEach(async (item) => {
                await db.query("INSERT INTO smoothie_orders (user_id, name, ingredients, size, price, temperature, comment, bottles) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
                [currentId.rows[0]?.id, item.name, item.ingredients, item.size, item.price, item.temperature, item.comments, item.bottles]);
            });
           
        } catch (err) {
            console.log(err);
        }
        
    } catch (error) {
        console.log(error);
    }
})

app.get("/fruits", async(req, res) => {
    try {
        let itemsArr = [];
        const fruits = await db.query("SELECT fruit FROM fruits");
        fruits.rows.map((item)=>{
            itemsArr.push(item.fruit);
            return itemsArr;
        });

        res.send(itemsArr);
    } catch (error) {
        res.send("None found!!")
    }
   
});

app.get("/veggies", async(req, res) => {
    try {
        let itemsArr = [];
        const veggies = await db.query("SELECT veggie FROM veggies");
        veggies.rows.map((item)=>{
            itemsArr.push(item.veggie);
            return itemsArr;
        });

        res.send(itemsArr);
    } catch (error) {
        res.send("None found!!")
    }
   
});

app.get("/bases", async(req, res) => {
    try {
        let itemsArr = [];
        const bases = await db.query("SELECT base FROM bases");
        bases.rows.map((item)=>{
            itemsArr.push(item.base);
            return itemsArr;
        });

        res.send(itemsArr);
    } catch (error) {
        res.send("None found!!")
    }
   
});

app.get("/addins", async(req, res) => {
    try {
        let itemsArr = [];
        const addins = await db.query("SELECT addin FROM addins");
        addins.rows.map((item)=>{
            itemsArr.push(item.addin);
            return itemsArr;
        });

        res.send(itemsArr);
    } catch (error) {
        res.send("None found!!")
    }
   
});
app.get("/salad", async(req, res) => {
    try {
        let itemsArr = [];
        const saladItems = await db.query("SELECT name FROM salad_items");
        saladItems.rows.map((item)=>{
            itemsArr.push(item.name);
            return itemsArr;
        });

        res.send(itemsArr);
    } catch (error) {
        res.send("None found!!")
    }
   
});


app.listen(8080, ()=>{
    console.log("App is running");
})