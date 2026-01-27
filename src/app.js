import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.get('/api/health', (req, res) => {
  res.json({ status: 'backend runs fine' });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));

export default app;
