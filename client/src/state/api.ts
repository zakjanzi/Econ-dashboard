import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetGasPriceResponse,
  GetDollarRateResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "GasPrice", "Blackmarket"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getGasPrice: build.query<Array<GetGasPriceResponse>, void>({
      query: () => "gasPrice/gasPrices/",
      providesTags: ["GasPrice"],
    }),
    getDollarRate: build.query<Array<GetDollarRateResponse>, void>({
      query: () => "blackmarket/blackmarkets/",
      providesTags: ["Blackmarket"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetGasPriceQuery, useGetDollarRateQuery } =
  api;
