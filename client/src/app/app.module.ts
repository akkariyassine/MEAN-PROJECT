import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HttpModule } from "@angular/http";

import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RegisterComponent } from "./components/register/register.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service.service";
import { LoginComponent } from "./components/login/login.component";
import { FlashMessagesModule } from "angular2-flash-messages";
import { JwtModule } from "@auth0/angular-jwt";
import { ProfileComponent } from "./components/profile/profile.component";
import { AuthGuard } from "./guards/auth.guard";
import { NotAuthGuard } from "./guards/notAuth.guard";
import { BlogComponent } from "./components/blog/blog.component";
import { BlogService } from "../app/services/blog.service";
import { EditBlogComponent } from "./components/blog/edit-blog/edit-blog.component";
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent,
    DeleteBlogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [AuthService, BlogService, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
