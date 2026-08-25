require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db.js');
const swaggerUi = require('swagger-ui-express');

// Import routes
const authRoutes = require('./src/routes/authRoutes.js');
const transactionRoutes = require('./src/routes/transactionRoutes.js');
const walletRoutes = require('./src/routes/walletRoutes.js');

let swaggerDocument={};
try{
    swaggerDocument = require('./swagger-output.json');
}
catch(error){
    console.error('Error loading swagger document:', err);
}

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


 app.get('/', (req, res) => {
    res.send('phonpe backend system is running');
 })


 // App Routes
 app.use('/api/auth', authRoutes);
 app.use('/api/transactions', transactionRoutes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
    console.log(`swagger docs available at http://localhost:${port}/api-docs`);
    
})