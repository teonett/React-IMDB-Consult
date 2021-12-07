import React from "react";
import { FormProvider } from "./components/contexts/FormContext";
import { MainRoutes } from "./main/routes/MainRoutes";

function App() {
  return (
    <FormProvider>
      <MainRoutes />
    </FormProvider>
  );
}

export default App;
