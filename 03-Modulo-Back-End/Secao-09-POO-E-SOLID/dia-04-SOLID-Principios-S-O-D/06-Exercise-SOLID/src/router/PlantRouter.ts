import { Router } from 'express';
import PlantController from '../controllers/PlantController';
import PlantModel from '../models/PlantModel';
// import Mysql2PlantModel from '../models/Mysql2PlantModel';
import PlantService from '../services/PlantService';

// const plantModel = new Mysql2PlantModel();
const plantModel = new PlantModel();
const plantService = new PlantService(plantModel);
const plantController = new PlantController(plantService);

const plantRouter = Router();

plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));
plantRouter.get('/:id', (req, res, next) => plantController.getById(req, res, next));
plantRouter.delete('/:id', (req, res, next) => plantController.remove(req, res, next));
plantRouter.put('/:id', (req, res, next) => plantController.update(req, res, next));

export default plantRouter;
