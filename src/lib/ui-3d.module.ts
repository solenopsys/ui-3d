import {NgModule} from '@angular/core';
import {DeclaredService} from "@solenopsys/ui-utils";
import {View3DComponent} from "./view3-d/view3-d.component";



@NgModule({
  declarations: [
    View3DComponent

  ],
  imports: [
  ],
  exports: [
    View3DComponent
  ]
})
export class Ui3dModule {
  constructor(private ds: DeclaredService) {
    ds.addComps("@solenopsys/ui-3d", [
      View3DComponent
    ])
  }
}
