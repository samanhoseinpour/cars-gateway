import { FilterProps } from '@/types';

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, year, fuel, limit, model } = filters;

  const headers = {
    'X-RapidAPI-Key': '8e679f5a66mshc14afe40db779afp12c771jsnfda48c26294c',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}&model=${model}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
};

export const calculateRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
