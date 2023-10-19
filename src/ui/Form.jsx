import React from "react";
import PropTypes from "prop-types";
import { Formik, Form as FormikForm } from "formik";
import FormField from "./FormField";
import Button from "./Button";

function Form({
  title,
  fields,
  btnLabel,
  onSubmit,
  validate,
  formClassList = "max-w-lg mx-auto",
  titleClassList = "lock text-gray-700 text-4xl mt-8 mb-8",
  btnContainerClassList = "flex justify-center",
}) {
  const getInitialValues = () => {
    let values = {};
    fields
      .filter((field) => !field.skipFromPayload)
      .forEach((field) => {
        values[field.name] = field.value || "";
      });
    return values;
  };

  return (
    <div className={formClassList}>
      <h1 className={titleClassList}>{title}</h1>
      <Formik
        initialValues={getInitialValues()}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            {fields
              .filter((field) => !field.skipRender)
              .map((field) => (
                <FormField key={field.name} attrs={field} />
              ))}

            <div className={btnContainerClassList}>
              <Button label={btnLabel} type="submit" disabled={isSubmitting} />
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any,
      skipFromPayload: PropTypes.bool,
      skipRender: PropTypes.bool,
    }),
  ).isRequired,
  btnLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validate: PropTypes.func,
  formClassList: PropTypes.string,
  titleClassList: PropTypes.string,
  btnContainerClassList: PropTypes.string,
};

export default Form;
