import { lazy, Suspense } from "react";

const FormCreation = lazy(
  () => import("../../features/FormCreation/FormCreation")
);

const FormCreationPage = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <FormCreation />
    </Suspense>
  );
};

export default FormCreationPage;
