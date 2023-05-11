import { Country } from "@/app/entities/Country";
import { Currency } from "@/app/entities/Currency";

export interface Profile {
  id?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

