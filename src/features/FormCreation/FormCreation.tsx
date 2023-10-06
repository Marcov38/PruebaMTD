import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/InputField/InputField";
import "./FormCreation.css";

interface Values {
  pokemonName: string | null;
  pokemonExperience: number | string;
  pokemonWeight: number | string;
  pokemonType: string | null;
}

const CreationForm = () => {
  const validationSchema = Yup.object().shape({
    pokemonName: Yup.string()
      .min(2, "El nombre es muy corto")
      .max(50, "El nombre es muy largo")
      .required("Se requiere el nombre del pokemon"),
    pokemonExperience: Yup.number().required(
      "Deben indicar experiencia del pokemon en numeros"
    ),
    pokemonWeight: Yup.number().required(
      "El peso del pokemon es obligatorio en numeros"
    ),
    pokemonType: Yup.string()
      .min(2, "El tipo indicado es muy corto")
      .max(50, "El tipo indicado es muy largo")
      .required("Debe introducir un tipo de pokemon"),
  });

  const initialValues: Values = {
    pokemonName: "",
    pokemonExperience: "",
    pokemonWeight: "",
    pokemonType: "",
  };
  return (
    <div className="form formPrincipal">
      <h1>Añadir nuevo pokemon</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {(formikProps) => (
          <Form>
            <div>
              <InputField
                labelName="Pokemon Name"
                formik={formikProps}
                inputName="pokemonName"
                type="text"
              />
              <InputField
                labelName="Pokemon Experience"
                formik={formikProps}
                inputName="pokemonExperience"
                type="number"
              />
              <InputField
                labelName="Pokemon Weight"
                formik={formikProps}
                inputName="pokemonWeight"
                type="number"
              />
              <InputField
                labelName="Pokemon Type"
                formik={formikProps}
                inputName="pokemonType"
                type="text"
              />

              <div className="form-group formButtons">
                <button
                  type="submit"
                  className="bg-primary border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                >
                  Crear
                </button>
                <button
                  type="button"
                  className="bg-primary border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                  onClick={() => {
                    formikProps.resetForm();
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreationForm;
