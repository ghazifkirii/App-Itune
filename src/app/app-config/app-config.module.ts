import { CommonModule } from "@angular/common";
import { InjectionToken, NgModule } from "@angular/core";
import { environment } from "src/environments/environment";

export let APP_CONFIG= new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  apiEndpoint: string;

  constructor() {
    this.apiEndpoint = ""; // Initialisation de la propriété apiEndpoint
  }
}
export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint
}

@NgModule ( {
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})







export class AppConfigModule {

}