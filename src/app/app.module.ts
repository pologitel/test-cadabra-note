import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';

import * as components from './components';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { NoteModule } from './modules/note/note.module';
import { DraggingModule } from './modules/dragging/dragging.module';
import { LocalDirective } from './directives/local.directive';
import { ApiInterceptor } from './interceptors/api.interceptor';

import { AppComponent } from './app.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';

@NgModule({
    declarations: [
        AppComponent,
        components.LoginComponent,
        components.RegistrationComponent,
        components.HeaderComponent,
        components.SnackBarComponent,
        LocalDirective,
        SvgIconComponent
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        NoteModule,
        DraggingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true,
        },
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: {
                duration: 4000
            }
        }
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    entryComponents: [ components.SnackBarComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
