import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    email: string = "";
    password: string = "";
    authenticated = false;
    failedMessageHidden = true;

    constructor(private cs: CommonService, private router: RouterExtensions) {
    }

    login(): void {
        console.log("Button was pressed");
        // logic for login, http etc
        // check for "user" object
        // check for condirmed field to be true
        let data = {
            "identifier": this.email,
            "password": this.password
        }
        this.cs.login(data).subscribe(res => {
            if (res.user && res.user.confirmed) {
                this.authenticated = true;
                this.router.navigate(['/products'], { clearHistory: true });
            } else {
                this.failedMessageHidden = false;
            }
            console.log(this.authenticated);
        })
    }


    ngOnInit(): void {
    }
}
