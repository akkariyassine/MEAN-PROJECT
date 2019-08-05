import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    public flashMessagesService: FlashMessagesService
  ) {}

  // Function to logout user
  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.router.navigate(["/"]); // Navigate back to home page
  }

  ngOnInit() {}
}
