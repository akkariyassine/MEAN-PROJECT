import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  username = "";
  email = "";

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Once component loads, get user's data to display on profile
    this.authService.getProfile().subscribe(profile => {
      console.log(profile);

      this.username = profile.user.username; // Set username
      this.email = profile.user.email; // Set e-mail
    });
  }
}
