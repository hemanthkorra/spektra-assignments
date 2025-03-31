import { Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

export const routes: Routes = [ // here we define all possible routes for our application
    {path: '', redirectTo: '/deartment', pathMatch: 'full'}, // path mach is used to specify that redirect if the full url is empty other wise everytime it will be displayed
    {path: 'deartment', component: DepartmentListComponent }, //we are configuring the routs. ANd each rout is nothing but an object contains a path
    {path: 'deartment/:id', component: DepartmentDetailsComponent},
    {path: 'employee', component: EmployeListComponent},
    {path: '**', component: PageNotFoundComponent}
];


















// To export the components into app components we are creating an arry of both the componrnts and we are inporting there
// If we try to access the not existing page in the application we use wild card rout to display page not found
// Wild card rount must be at the all always in the path bcz the anglaru check from the top if wild card is at top then every time it will be displayed
// But here we are having a proble when the page gets loded intially the path is null so wild card is displayed
// To overcome this we will add default path as Departments-list component
// Instead we can directly mention the path of the redirecting page 