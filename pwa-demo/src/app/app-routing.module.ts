import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GeneralComponent } from "./general/general.component";

const routes: Routes = [
  {
    path: "general",
    component: GeneralComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
