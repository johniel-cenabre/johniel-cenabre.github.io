import useSWR from "swr";

const useClient = () => {
  // const client = useSWR("https://geolocation-db.com/json/");

  return {
    client: {},
  };
};

export default useClient;
