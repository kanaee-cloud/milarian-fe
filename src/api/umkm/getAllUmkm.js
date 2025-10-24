import { dataUmkm } from "../../data/data_umkm";

export const getAllUmkm = async () => {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return dataUmkm;
};