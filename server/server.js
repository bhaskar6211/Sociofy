import express from 'express';
import "dotenv/config";
import cors from 'cors';
import prisma from './lib/prisma.js';

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => res.send("Server is live!"));

const PORT = process.env.PORT || 3000;

const startServer = async () => {
	await prisma.$connect();
	app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

startServer().catch((error) => {
	console.error('Failed to start server:', error);
	process.exit(1);
});

const shutdown = async () => {
	await prisma.$disconnect();
	process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);