import { InputText } from "primereact/inputtext";
import React, { useEffect } from "react";

export interface InputFieldProps {
  labelName: string;
  formik: any;
  inputName: string;
  type: string;
}

const InputField = ({
  labelName,
  formik,
  inputName,
  type,
}: InputFieldProps) => {
  return (
    <div className="field grid">
      <label className="col-fixed">{labelName}</label>
      <InputText
        type={type}
        name={inputName}
        className={
          "text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary" +
          (formik.errors.inputName && formik.touched.inputName
            ? " is-invalid"
            : "")
        }
        onChange={formik.handleChange}
        value={formik.values.inputName}
      />
      <div className="invalid-feedback">
        {formik.errors.inputName && formik.touched.inputName
          ? formik.errors.inputName
          : null}
      </div>
    </div>
  );
};

export default InputField;
