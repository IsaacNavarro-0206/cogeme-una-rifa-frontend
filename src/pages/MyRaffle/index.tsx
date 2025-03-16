import RaffleInfoCard from "@/components/RaffleInfoCard";
import RequestCard from "@/components/RequestCard";
import { GetChoosenNumbers } from "@/service/choosenNumber";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyRaffle = () => {
  const [requests, setRequests] = useState<RequestNumber[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const getRequests = async () => {
      const res = await GetChoosenNumbers(id);

      if (res.status === 200) {
        setRequests(res.data);
      }
    };

    getRequests();
  }, []);

  return (
    <>
      <br />

      <RaffleInfoCard />

      <RequestCard requests={requests} />
    </>
  );
};

export default MyRaffle;
