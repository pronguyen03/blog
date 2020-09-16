import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IConfiguration } from 'src/app/models';
import { ConfigurationService } from './configuration.service';


@Injectable({
    providedIn: 'platform',
    useClass: ConfigurationService
})
export abstract class IConfigurationService {
    readonly configs$: Observable<IConfiguration>
    abstract initialize() 
}