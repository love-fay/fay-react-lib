import {phones} from './phone';

export const check = (value: string) => {
  for(const key of Object.keys(phones)){
    if(phones[key].test(value)){
      return true;
    }
  }
  return false;
};

export const checkTargetLocale = (value: string, locale = "CN") => {
  return phones[locale].test(value);
};