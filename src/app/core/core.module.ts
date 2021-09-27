import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppRoutingModule } from "../app-routing.module";
// import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations : [NotFoundComponent],
    imports : [AppRoutingModule],
    providers : [],
    exports : [AppRoutingModule]

})
export class CoreModule {

}