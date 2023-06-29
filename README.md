# GraviteeAmAppSandboxAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Running the App

The file `constants.json` should be updated with your AM Gateway information. For example:

```json
{
  ...
  "auth": {
    "baseURL": "http://localhost:8092",
    "domain": "your-domain",
    "clientId": "<your-app-client-id>"
  },
  ...
}
```

The following configuration is required at Domain level:
 - `User Management` -> `Self-service account management` should be enabled
 - `OPENID` -> `CIBA` should be enabled


The following configuration is required at Application level:
 - `OAuth 2.0 / OIDC` -> `Grant flows` -> `Implicit` should be checked
 - `OAuth 2.0 / OIDC` -> `Scopes` -> `Openid` should be added and the `Default` checkbox should be selected


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

If you want to change the application's port, use the `--port` option. For example:

```bash
ng serve --port 4300
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
