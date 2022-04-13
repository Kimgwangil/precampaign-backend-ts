// import { Request, Response, NextFunction } from "express";
// import { Sequelize, DataTypes, Op } from "sequelize";
// import sequelize from "../models";
// import Campaign from "../models/campaign.model";
// import { ICampaignAttributes } from "../models/campaign.model";

// const create = async (req: Request, res: Response) => {
//     const { name, status, evaluation_start_date, evaluation_end_date, description, thumbnail_url } : ICampaignAttributes = req.body;
    
//     if(!req.body) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//         return;
//     }

//     const campaign = {
//         name: name,
//         status: status,
//         evaluation_start_date: evaluation_start_date,
//         evaluation_end_date: evaluation_end_date,
//         description: description,
//         thumbnail_url: thumbnail_url
//     };

//     Campaign.create(campaign)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message
//             });
//         });
// };

// interface Query {
//     status: string;
//     limit: number;
//     offset: number;
//     sort_by: string;
//     sort_order: string;
// }

// const findAll = async (req: Request, res: Response) => {
//     //const { status, limit, offset, sort_by, sort_order } = req.query as unknown as Query;

//     const status = req.query.status;
//     const limit = req.query.limit as unknown as number || 9;
//     const offset = req.query.offset as unknown as number || 0;
//     const sort_by = req.query.sort_by || "id";
//     const sort_order = req.query.sort_order && req.query.sort_order === "desc" ? "desc" : "asc";
//     var condition = status ? { status: { [Op.like]: `%${status}%` } } : null;

//     if (sort_by === "count") {
//         Campaign.findAll({
//             limit: limit, 
//             offset: offset,
//             attributes: [
//                 'id', 'name', 'status', 'evaluation_start_date', 'evaluation_end_date', 'description', 'thumbnail_url', 'createdAt', 'updatedAt',
//                 [sequelize.literal('(SELECT COUNT(*) FROM campaign_applicant WHERE campaign_applicant.campaign_id = Campaign.id)'), 'applicant_count']],
//             order: [[sequelize.literal('applicant_count'), sort_order]]
//         })
//             .then(data => {
//                 res.send(data);
//             })
//             .catch(err => {
//                 res.send(500).send({
//                     message: err.message
//                 });
//             });
//     } else {
//         Campaign.findAll({
//             where: condition, 
//             limit: limit, 
//             offset: offset,
//   //          order: [[sort_by, sort_order]]
//         })
//             .then(data => {
//                 res.send(data);
//             })
//             .catch(err => {
//                 res.send(500).send({
//                     message: err.message
//                 });
//             });
//         }
// };

// const findOne = async (req: Request, res: Response) => {
//     const id = req.params.id;

//     Campaign.findByPk(id)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message
//             });
//         });
// };

// export default {
//     create, findAll, findOne
// }