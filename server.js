const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();
const port = 3000;

// Setup middleware
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

const _dishes = [];

// Get dishes
app.get('/dishes', (req, res) => {
    res.json({
        status: "OK",
        data: _dishes
    });
});

app.get('/', (req, res) => {
    res.json({
        status: "OK",
        data: _dishes
    });
});

app.get('/dishes/sku', (req, res) => {
    let sks = [] ;

    for(i = 0; i < _dishes.length; i++){
        sks[i] = _dishes[i]['id'];
    }
    console.log(sks);
    res.json({
        status: "OK",
        data: sks
    });
 
});

// Clear dishes
app.get('/dishes/clear', (req, res) => {
    _dishes.length = 0;
    
    res.json({
        status: "OK"
    });
});

// Get dish by id
app.get('/dishes/:id', (req, res) => {
    const dish = _dishes.find(x => x.id === req.params.id);

    res.json({
        status: "OK",
        data: dish ? dish : null
    });
});

// Insert/update dish
app.put('/dishes', (req, res) => {
    try {
        if (!req.body) {
            throw new Error("No content provided");
        }

        const dish = Object.assign({
            id: uuid(),
            Created: new Date(),
            Changed: null,
        }, req.body);

        const dishIndex = _dishes.findIndex(x => x.id === dish.id);

        if (dishIndex >= 0) {
            _dishes[dishIndex] = Object.assign({}, _dishes[dishIndex], dish, {
                Changed: new Date(),
            });
        } else {
            _dishes.push(dish);
        }

        res.json({
            status: "OK",
            data: dish,
        });
    } catch (error) {
        res.json({
            status: "Failed",
            message: error.message,
        });
    }
});

// 

// Delete dish
app.delete('/dishes/:id', (req, res) => {
    const dishIndex = _dishes.findIndex(x => x.id === req.params.id);

    if (dishIndex >= 0) {
        _dishes.splice(dishIndex, 1);
    }

    res.json({
        status: "OK",
        message: dishIndex >= 0 ? "Dish deleted" : "Dish not found",
    });
});

// expose p
app.listen(port, () => {
    console.log(`api is ready on http://localhost:${port}`)
});