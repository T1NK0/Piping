import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorseCodeComponent } from './morse-code/morse-code.component';
import { ConvertToMorsePipe } from './convert-to-morse.pipe';
import { ConvertToHashPipe } from './convert-to-hash.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MorseCodeComponent,
    ConvertToMorsePipe,
    ConvertToHashPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
