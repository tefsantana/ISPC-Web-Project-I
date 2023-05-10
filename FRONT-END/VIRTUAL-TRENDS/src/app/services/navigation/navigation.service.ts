import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})

export class NavigationService {
    constructor(private router: Router) {}

    /**
     * Navigates to the specified path
     * @param path The path to navigate to
     */
    navigate(path: string): void {
        this.router.navigate([path]);
    }
}