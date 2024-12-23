import RaffleForm from "../RaffleForm";

const CreateRaffleForm = () => {
  const onSubmit = (data: RaffleDataForm) => {
    console.log(data);
  };

  return <RaffleForm onSubmit={onSubmit} />;
};

export default CreateRaffleForm;
