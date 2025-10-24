import { useQuery } from "@tanstack/react-query";
import { getAllUmkm } from "../api/umkm";


export const useUmkm = () => {
  const query = useQuery({
    queryKey: ["umkm-list"],
    queryFn: getAllUmkm,
    staleTime: 1000 * 60 * 5, 
  });

  return {
    ...query,
    umkmList: query.data || [],
  };
};
