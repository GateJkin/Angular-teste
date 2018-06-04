import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListarComponent } from './listar/listar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { ProcurarComponent } from './procurar/procurar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ListarComponent,
    ProcurarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
