import type { IFetchCarsReturn } from "../types";

/**
 * Araçları API'den getirir
 */
export const fetchCars = async (
  make: string,
  model: string,
  year: string,
  page: string
): Promise<IFetchCarsReturn> => {
  let url = `${import.meta.env.VITE_API_URL}/all-vehicles-model/records?`;

  if (make) url += `refine=make:"${encodeURIComponent(make)}"`;
  if (model) url += `&refine=model:"${encodeURIComponent(model)}"`;
  if (year) url += `&refine=year:"${encodeURIComponent(year)}"`;

  const limit = 10;
  const offset = (Number(page) - 1) * limit;

  url += `&limit=${limit}&offset=${offset}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Araç verileri alınamadı");
  }

  const data: IFetchCarsReturn = await res.json();
  return data;
};
