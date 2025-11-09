import { InputHTMLAttributes } from 'react';

interface FormCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function FormCheckbox({ label, className = '', ...props }: FormCheckboxProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        className={`w-5 h-5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary ${className}`}
        {...props}
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
}
