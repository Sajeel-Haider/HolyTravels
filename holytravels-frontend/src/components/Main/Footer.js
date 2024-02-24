import { Stack } from "@mui/system";
import holyLogo from "../../assets/holy travels-logos/holyLogo.png";

export const Footer = () => {
  return (
    <Stack sx={{ backgroundColor: "#ccb393" }}>
      <Stack padding={"5%"}>
        <Stack>
          <img src={holyLogo} alt="" width="100px" />
        </Stack>
      </Stack>
    </Stack>
  );
};
