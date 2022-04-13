import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

const Authorizeduser = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).send({
        message: "No token!"
        });
    }
    
    try {
        const decoded = jwt.verify(token, config.auth.secret);
    //    req.body.id = (<any>decoded).user;
        res.status(200).send("Authorized.");
        next();
    } catch(err) {
        res.status(401).send({
            message: "Unauthorized!"
        });
    }
};

export default {
    Authorizeduser
}