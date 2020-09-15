import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { IConfiguration } from 'src/app/models';
import { CONFIG_FILE } from 'src/app/constants';
import { IConfigurationService } from './i-configuration.service';

@Injectable()
export class ConfigurationService implements IConfigurationService {
    private configs = new ReplaySubject<IConfiguration>(1)

    readonly configs$: Observable<IConfiguration> = this.configs.asObservable();

    constructor() {
        // console.info('Init ConfigurationService')
    }

    async initialize() {
        // console.info('Initializing application configs...')
        try {
            let configs: IConfiguration = await fetch(CONFIG_FILE).then(res => {
                if (!res.ok) { 
                    return Promise.reject(new Error('Response with ok is false')) 
                }
                return res.json()
            })
            this.configs.next(configs)
        } catch (error) {
            error.message = 'Failed to load app configs: ' + error.message
            throw error
        }
    }
}