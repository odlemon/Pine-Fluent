import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { errorMiddleware } from './middleware/error.middleware';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
