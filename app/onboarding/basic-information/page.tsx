import { Button } from "@mui/material";
import { CancelOutlined } from "@mui/icons-material";

export default function Page() {
  return (
    <>
      <p>Basic Information</p>
      <Button variant="contained">Hello! <CancelOutlined /></Button>
    </>
  );
}
