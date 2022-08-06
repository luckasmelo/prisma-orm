import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateCategory {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

    }

}