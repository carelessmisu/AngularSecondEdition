import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Hello } from './app/hello/hello';

bootstrapApplication(Hello, appConfig)
  .catch((err) => console.error(err));
