import { FacebookService } from './facebook.service';

export function InitFacebookPixel(fbService: FacebookService) {
  console.info("InitFacebookPixel")
  return () => {
    fbService.load()
  };
}