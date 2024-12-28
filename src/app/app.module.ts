import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PlacementComponent } from './placement/placement.component';
import { ComputerEngineeringComponent } from './computer-engineering/computer-engineering.component';
import { ITEngineeringComponent } from './it-engineering/it-engineering.component';
import { MechanicalEngineeringComponent } from './mechanical-engineering/mechanical-engineering.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    HeaderComponent,
    GalleryComponent,
    PlacementComponent,
    ComputerEngineeringComponent,
    ITEngineeringComponent,
    MechanicalEngineeringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
