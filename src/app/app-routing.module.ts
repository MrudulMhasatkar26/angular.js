import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlacementComponent } from './placement/placement.component';
import { ComputerEngineeringComponent } from './computer-engineering/computer-engineering.component';
import { ITEngineeringComponent } from './it-engineering/it-engineering.component';
import { MechanicalEngineeringComponent } from './mechanical-engineering/mechanical-engineering.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'department', component: DepartmentComponent},
  {path:'gallery', component: GalleryComponent},
  {path:'placement', component: PlacementComponent},
  {path:'computer-engineering', component: ComputerEngineeringComponent},
  {path:'it-engineering', component: ITEngineeringComponent},
  {path:'mechanical-engineeringh', component: MechanicalEngineeringComponent},
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
