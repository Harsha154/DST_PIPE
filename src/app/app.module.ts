import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent }  from './app.component';
//import { TemplateDrivenFormComponent }  from './template-driven-form.component';
import { ReactiveFormComponent }  from './reactive-form.component';
import { UserService } from './services/user-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material';
import { DemoMaterialModule } from './demo-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResourcesComponent } from './resources/resources.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ExampleComponent } from './example/example.component';
import { HttpClientModule } from "@angular/common/http";
import { QueryService } from './services/query-service';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  imports: [     
            BrowserModule,
            AppRoutingModule,
		FormsModule, 
            ReactiveFormsModule,
             MatRadioModule,
             MatListModule,
             MatNativeDateModule,
             DemoMaterialModule,
             NgbModule,
             BrowserAnimationsModule,
             HttpClientModule,
             TooltipModule
  ],
  declarations: [
        AppComponent,
		//TemplateDrivenFormComponent,
		ReactiveFormComponent,
            HomeComponent,
            AboutComponent,
		ResourcesComponent,
		TrainingsComponent,
		ExampleComponent
  ],
  providers: [
        UserService,
        QueryService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
