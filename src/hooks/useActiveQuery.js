import { useQuery } from "@tanstack/react-query";

const path = process.env.PUBLIC_URL;

const fetchActive = async () => {
  const data = await fetch(`${path}/DB/departmentCon1.json`);
  const json = await data.json();
  return json.activities;
};

export const useActiveQuery = () => {
  return useQuery(["fetchActive"], fetchActive, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 3, //데이터요청 실패시 재시도 횟수, default:3
  });
};
