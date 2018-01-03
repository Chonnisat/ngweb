// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: 'http://test.pnpsw.com',
  firebase: {
    apiKey: 'AIzaSyBn0x4hwLUp6OhKUJUJWTNsD7zY-E5LJrU',
    authDomain: 'ngweb-83b53.firebaseapp.com',
    databaseURL: 'https://ngweb-83b53.firebaseio.com',
    projectId: 'ngweb-83b53',
    storageBucket: '',
    messagingSenderId: '850849830300'
  }
};
