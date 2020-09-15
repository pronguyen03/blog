export interface ILoggingConfiguration {
    sendToConsole: boolean,
    logglyToken: string,
}

export interface IConfiguration {
    applicationName: string
    debug: boolean
    logging: ILoggingConfiguration
}
