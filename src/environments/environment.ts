import { IEnvironment } from 'src/app/models';

export const environment: IEnvironment = {
  production: false,
  applicationName: 'Nhan Nguyen Da Coder',
  logging: {
    sendToConsole: true,
    logglyToken: ''
  }
};

