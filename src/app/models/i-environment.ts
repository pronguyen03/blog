export interface ILoggingConfiguration {
    sendToConsole: boolean,
    logglyToken: string,
}

/**
 * Difine all necessary environment information.
 */
export interface IEnvironment {
    production: boolean
    applicationName: string
    logging: ILoggingConfiguration
}
