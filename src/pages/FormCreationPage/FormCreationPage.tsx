import { lazy, Suspense } from "react";

const FormCreation = lazy(
  () => import("../../features/FormCreation/FormCreation")
);

const FormCreationPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <FormCreation />
      </Suspense>
    </div>
  );
};

export default FormCreationPage;
