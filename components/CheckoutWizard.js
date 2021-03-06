import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {[
        "Inicio Sesión",
        "Dirección de envío",
        "Metodo de Pago",
        "Finalizar Pedido",
      ].map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
