import RaffleForm from "../RaffleForm";

const EditRaffleForm = () => {
  const onSubmit = (data: RaffleDataForm) => {
    console.log(data);
  };

  return <RaffleForm onSubmit={onSubmit} isEditMode={true} />;
};

export default EditRaffleForm;
