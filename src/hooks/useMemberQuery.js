import { useQuery } from "@tanstack/react-query";

const path = process.env.PUBLIC_URL;

const fetchMember = async () => {
  const data = await fetch(`${path}/DB/departmentCon2.json`);
  const json = await data.json();
  return json.Member;
};

export const useMemberQuery = () => {
  return useQuery(["fetchMember"], fetchMember, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 3,
  });
};
