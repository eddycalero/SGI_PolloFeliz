import { FabButton, MainCard } from "../../../components";
import { SaveAs } from "@mui/icons-material";
import { TallerForm } from "../form/TallerForm";

const NewTallerPage = () => {
  const onSubmit = () => {};
  return (
    <MainCard>
      <TallerForm />
      <FabButton
        icon={<SaveAs style={{ color: "white" }} />}
        onClick={onSubmit}
      />
    </MainCard>
  );
};

export default NewTallerPage;
