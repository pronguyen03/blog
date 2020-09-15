import { IConfigurationService } from './i-configuration.service';

export function PreloadConfigFactory(configuration: IConfigurationService) {
  return () => configuration.initialize();
}