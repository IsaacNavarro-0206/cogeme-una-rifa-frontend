import RaffleInfoCard from "@/components/RaffleInfoCard";
import RequestCard from "@/components/RequestCard";

const requests: RequestNumber[] = [];

for (let i = 1; i <= 13; i++) {
  requests.push({
    id: i,
    numberRequested: i + 1,
    name: `Pepito ${i}`,
    contactNumber: `300${i}`,
  });
}

const MyRaffle = () => {
  return (
    <>
      <RaffleInfoCard />

      <RequestCard requests={requests} />
    </>
  );
};

export default MyRaffle;
