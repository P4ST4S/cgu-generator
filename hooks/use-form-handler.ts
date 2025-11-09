import { useState, useCallback, ChangeEvent } from 'react';

interface UseFormHandlerOptions<T> {
  initialValues: T;
  onSubmit?: (values: T) => void;
}

interface UseFormHandlerReturn<T> {
  values: T;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  resetForm: () => void;
}

export function useFormHandler<T>({
  initialValues,
  onSubmit,
}: UseFormHandlerOptions<T>): UseFormHandlerReturn<T> {
  const [values, setValues] = useState<T>(initialValues);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value } as T));
    },
    []
  );

  const handleCheckboxChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      setValues((prev) => ({ ...prev, [name]: checked } as T));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.(values);
    },
    [values, onSubmit]
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return {
    values,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    setValues,
    resetForm,
  };
}
