import React, { createContext, useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import { alertStyles } from "./styles/alertStyles";

// export const BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://khourypermit-api.herokuapp.com"
//     : "http://localhost:8000";

export const BASE_URL = "https://khourypermit-api.herokuapp.com/"

const AlertMessage = createContext();

export function AlertProvider(props) {
  const [alert, setAlert] = useState("");
  const value = [alert, setAlert];
  return <AlertMessage.Provider value={value} {...props} />;
}

export function useAlert() {
  const context = useContext(AlertMessage);
  if (!context) {
    throw new Error("useAlert must be used inside of AlertProvider");
  }
  return context;
}

export function AlertDisplay({ alert, alertType }) {
  if (alert) {
    return (
      <Alert
        severity={alertType}
        className="contact-alert"
        sx={alertStyles[alertType]}
      >
        {alert}
      </Alert>
    );
  }
}
