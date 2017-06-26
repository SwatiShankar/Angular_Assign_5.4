import{NgModule} from '@angular/core';
import{AppComponent} from './app.component';
import{Logincomponent} from './login/login.Component';
@NgModule({
 declarations: [ 
   AppComponent,
   LoginComponent 
 ],
 imports: [ 
 ],
 bootstrap:[AppComponent]
})
export class AppModule{}