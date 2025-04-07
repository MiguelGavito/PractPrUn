import { getAlumnosDb, Student } from "../database/student";

export interface AlumnoRes {
  matricula: string;
  nombre: string;
  calificacion: number;
  msg: string;
}

class AlumnoController {
  getAllAlumnos() : AlumnoRes[] {
    const students: Student[] = getAlumnosDb();

    return students.map(Student => {
      let msg = '';
      
      if (Student.calificacion > 90){
        msg = Student.adeudo
        ? 'tenias honores, pero tienes un adeudo'
        : 'te graduaste con honores';
      } else if (Student.calificacion >= 70 && Student.calificacion <= 90) {
        msg = 'pasaste muy apenas';
      } else { 
        msg = Student.adeudo 
          ? 'expulsado' 
          : 'como no tienes adeudo, tienes derecho a un examen de recuperacion';
      }

      return {
        matricula: Student.matricula,
        nombre: Student.nombre, 
        calificacion: Student.calificacion,
        msg
      };
    });
  }
}

export default AlumnoController;