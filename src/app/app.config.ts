import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection, isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyCvV3m4n1ge3lK5qZTXH3mSJwx7y020Tmg',
        authDomain: 'ejercicioclasete.firebaseapp.com',
        projectId: 'ejercicioclasete',
        storageBucket: 'ejercicioclasete.firebasestorage.app',
        messagingSenderId: '849993838643',
        appId: '1:849993838643:web:c57483d02c3d34f3173346',
        measurementId: 'G-QV4XJH8077',
      })
    ),
    provideFirestore(() => getFirestore()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
  ],
};
