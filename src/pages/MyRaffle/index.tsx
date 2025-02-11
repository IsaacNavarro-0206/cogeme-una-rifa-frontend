import RaffleInfoCard from "@/components/RaffleInfoCard";
import RequestCard from "@/components/RequestCard";
import { GetChoosenNumbers } from "@/service/choosenNumber";
import { useEffect, useState } from "react";

const MyRaffle = () => {
  const [requests, setRequests] = useState<RequestNumber[]>([]);

  useEffect(() => {
    const getRequests = async () => {
      const res = await GetChoosenNumbers();

      if (res.status === 200) {
        setRequests(res.data);
      }
    };

    getRequests();
  }, []);

  return (
    <>
      <RaffleInfoCard />

      <RequestCard requests={requests} />
    </>
  );
};

export default MyRaffle;
