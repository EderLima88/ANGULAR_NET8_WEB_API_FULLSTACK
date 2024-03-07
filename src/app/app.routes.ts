import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './students/student-form/student-form.component';

//aqui os caminhos do routerlink usado nos componentes html
export const routes: Routes = [
    {
        path: 'students',
        component: StudentsComponent
    },
    {
        path: 'student/form',
        component: StudentFormComponent
    },
    {
        path: 'students/:id',
        component: StudentFormComponent
    }
   
];
