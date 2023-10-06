import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import InputField, {
  InputFieldProps,
} from "../../components/InputField/InputField";

interface Values {
  pokemonName: string;
  pokemonExperience: number;
  pokemonWeight: number;
  pokemonType: string;
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

  const formik = useFormik({
    initialValues: {
      pokemonName: "",
      pokemonExperience: 0,
      pokemonWeight: 0,
      pokemonType: "",
    },
    validationSchema,
    onSubmit: (data: Values) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });
  const inputNameProps: InputFieldProps[] = [
    {
      labelName: "Pokemon Name",
      formik: formik,
      inputName: "pokemonName",
      type: "text",
    },
    {
      labelName: "Pokemon Experience",
      formik: formik,
      inputName: "pokemonExperience",
      type: "number",
    },
    {
      labelName: "Pokemon Weight",
      formik: formik,
      inputName: "pokemonWeight",
      type: "number",
    },
    {
      labelName: "Pokemon Type",
      formik: formik,
      inputName: "pokemonType",
      type: "text",
    },
  ];
  const initialValues: Values = {
    pokemonName: "",
    pokemonExperience: 0,
    pokemonWeight: 0,
    pokemonType: "",
  };
  return (
    <div className="form">
      <h1>Añadir nuevo pokemon</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <InputField {...inputNameProps[0]} />
            <InputField {...inputNameProps[1]} />
            <InputField {...inputNameProps[2]} />
            <InputField {...inputNameProps[3]} />

            <div className="form-group">
              <button
                type="submit"
                className="bg-primary border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
              >
                Crear
              </button>
              <button
                type="button"
                className="bg-primary border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
                onClick={() => formik.resetForm()}
              >
                Reset
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreationForm;
