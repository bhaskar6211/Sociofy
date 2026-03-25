import express from 'express';
import "dotenv/config";
import cors from 'cors';
import prisma from './lib/prisma.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from "inngest/express";
import { inngest, functions } from './inngest/index.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());


app.get('/', (req, res) => res.send("Server is live!"));

app.use("/api/inngest", serve({ client: inngest, functions }));

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