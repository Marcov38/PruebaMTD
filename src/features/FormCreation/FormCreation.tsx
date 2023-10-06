import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import InputField from "../../components/InputField/InputField";
import "./FormCreation.css";
import { useDispatch } from "react-redux";
import { postPokemons } from "./asyncAction";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { IActions } from "../../redux/reducers/getPokemonReducer";

export interface Values {
  pokemonName: string | null;
  pokemonExperience: number | string;
  pokemonWeight: number | string;
  pokemonType: string | null;
}

const CreationForm = () => {
  const toastRef = useRef<Toast>(null);

  const showToast = (detail: string, severity: any, summary: string) => {
    toastRef.current?.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 3000,
    });
  };

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
  const dispatch = useDispatch();
  const postPokemon = async (
    values: Values,
    actions: FormikHelpers<Values>
  ) => {
    const response: IActions | undefined = await postPokemons(values, dispatch);
    if (response?.payload.status === 201) {
      actions.resetForm();
      showToast("Su pokemon ha sido creado correctamente", "info", "Info");
    } else {
      showToast(
        `Error al crear su pokemon, codigo de error ${response?.payload.status}`,
        "error",
        "Error"
      );
    }
  };
  return (
    <div className="form formPrincipal">
      <h1>Añadir nuevo pokemon</h1>
      <Toast ref={toastRef} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => await postPokemon(values, actions)}
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
