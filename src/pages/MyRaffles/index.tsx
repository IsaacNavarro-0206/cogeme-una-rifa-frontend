import RaffleCard from "@/components/RaffleCard";
import { Button } from "@/components/ui/button";
import { GetRaffles } from "@/service/raffle";
import { Loader2, Ticket } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyRaffles = () => {
  const [raffles, setRaffles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRaffles = async () => {
      try {
        setIsLoading(true);

        const res = await GetRaffles();

        console.log(res);

        setRaffles(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getRaffles();
  }, []);

  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Número de rifas por página
  const rafflesPerPage = 5;

  // Calcula el índice de la primera y última rifa de la página actual
  const indexOfLastRaffle = currentPage * rafflesPerPage;
  const indexOfFirstRaffle = indexOfLastRaffle - rafflesPerPage;

  // Obtiene las rifas de la página actual
  const currentRaffles = raffles.slice(indexOfFirstRaffle, indexOfLastRaffle);

  console.log(currentRaffles);

  // Cambia de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Generador para los números de página
  function* pageNumbersGenerator(totalPages: number) {
    for (let i = 1; i <= totalPages; i++) {
      yield i;
    }
  }

  // Calcula el número total de páginas
  const totalPages = Math.ceil(raffles.length / rafflesPerPage);
  const pageNumbers = Array.from(pageNumbersGenerator(totalPages));

  return (
    <div className="mb-5 max-w-5xl w-11/12">
      <div className="flex justify-between items-center mb-5 mt-5">
        <h1 className="text-2xl md:text-3xl font-bold">Mis rifas</h1>

        <Link
          to="/create-raffle"
          className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          <Ticket className="w-4 h-4 mr-2" />
          Nueva rifa
        </Link>
      </div>

      <div className="custom-scrollbar overflow-y-auto max-h-screen lg:max-h-[520px] p-3">
        {isLoading ? (
          <div className="flex justify-center items-center h-[400px]">
            <Loader2 className="h-[200px] w-[200px] animate-spin text-pink-600" />
          </div>
        ) : (
          <RaffleCard raffles={currentRaffles} />
        )}
      </div>

      <div className="flex justify-center mt-4 max-h-16 overflow-x-auto custom-scrollbar">
        {pageNumbers.map((number) => (
          <Button
            key={number}
            variant="ghost"
            onClick={() => paginate(number)}
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage === number
                ? "bg-pink-600 text-white/90 hover:text-white hover:bg-pink-700"
                : "text-gray-700"
            }`}
          >
            {number}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MyRaffles;
