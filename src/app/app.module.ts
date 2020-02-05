import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngxr
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// importando reducers
import { appReducers } from './app.reducer';

// forms
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoListComponent } from './to-do/toDo/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do/toDo/to-do-item/to-do-item.component';
import { ToDoFooterComponent } from './to-do/toDo/to-do-footer/to-do-footer.component';
import { ToDoAddComponent } from './to-do/toDo/to-do-add/to-do-add.component';
import { FilterPipe } from './Filter/filter.pipe';

@NgModule({
   declarations: [
      AppComponent,
      FooterComponent,
      ToDoComponent,
      ToDoListComponent,
      ToDoItemComponent,
      ToDoFooterComponent,
      ToDoAddComponent,
      FilterPipe,

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      StoreModule.forRoot ( appReducers ),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
      }),

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
