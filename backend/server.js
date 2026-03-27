import express, { json } from "express";
import cors from "cors";
import db from "./database";

const app = express();

app.use(cors());
app.use(json());