import React from 'react'
import { Formik, Form as FormikForm } from 'formik';
import FormField from './FormField';
import Button from './Button';

function Form({
    title,
    fields,
    btnLabel,
    onSubmit,
    validate,
    formClassList = 'max-w-lg mx-auto',
    titleClassList = 'lock text-gray-700 text-4xl mt-8 mb-8'
}) {
    const getInitialValues = () => {
        let values = {}
        fields.filter(field => !field.skipFromPayload)
            .forEach((field) => {
                values[field.name] = field.value || "";
            })
        return values;
    }
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
                        {fields.filter(field => !field.skipRender)
                            .map(field => (
                                <FormField
                                    key={field.name}
                                    attrs={field}
                                />)
                            )}

                        <div className="flex justify-center">
                            <Button label={btnLabel}
                                type="submit"
                                disabled={isSubmitting}
                            />
                        </div>
                    </FormikForm>
                )}
            </Formik>
        </div>
    )
}

export default Form