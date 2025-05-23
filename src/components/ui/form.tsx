"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
  children: React.ReactNode;
  description?: string;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  children,
  description,
  error,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
      </label>
      {children}
      {description && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input: React.FC<InputProps> = ({ name, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <FormField name={name} label={props.placeholder || name} error={error}>
      <input
        id={name}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        {...register(name)}
        {...props}
      />
    </FormField>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;

  return (
    <FormField name={name} label={label} error={error}>
      <select
        id={name}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        {...register(name)}
        {...props}
      >
        <option value="">Sélectionner</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
};

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  name: string;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <div className="flex items-center mb-2">
      <input
        id={name}
        type="checkbox"
        className="h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 dark:bg-gray-700"
        {...register(name)}
        {...props}
      />
      <label
        htmlFor={name}
        className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

interface CheckboxGroupProps {
  label: string;
  name: string;
  options: { id: string; label: string }[];
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  name,
  options,
}) => {
  return (
    <div className="mb-6">
      <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </span>
      <div className="space-y-2">
        {options.map((option) => (
          <Checkbox
            key={option.id}
            name={`${name}.${option.id}`}
            label={option.label}
          />
        ))}
      </div>
    </div>
  );
};
