import {Request, Response, NextFunction} from 'express';
import AlumnoController from '../controller/alumno';

const alumnoController = new AlumnoController();

class AlumnoHttpHandler {
  async getAlumnos(req: Request, res: Response, next: NextFunction) {
    try{
      const alumnos = await alumnoController.getAllAlumnos();
      res.json(alumnos)
    } catch (error) {
      next(error);
    }
  }
}

export default AlumnoHttpHandler;