import express from 'express';
import studentRoutes from './src/routes/studentRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/students', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});