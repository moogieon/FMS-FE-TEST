import { useEffect, useState } from "react";
interface useFormProps {
  initialValues: Record<string, string>;
  onSubmit: (values: Record<string, string | number>) => void;
  validate: any;
}
const useForm = ({ initialValues, onSubmit, validate }: useFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({} as Record<string, string>);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    setSubmitting(true);
    event.preventDefault();
    setErrors(validate(values));
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setSubmitting(false);
    }
  }, [errors]);

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
