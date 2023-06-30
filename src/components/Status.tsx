import { StatusProps } from "../const/types";

const Status = ({ status }: StatusProps) => {
  let message;
  switch (status) {
    case "loading":
      message = "Loading...";
      break;
    case "success":
      message = "Data Fetched Successfully";
      break;
    case "error":
      message = "Error Fetching Data";
      break;
    default:
      break;
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
