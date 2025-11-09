import { SelectHTMLAttributes, ReactNode } from 'react';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  children: ReactNode;
}

export function FormSelect({ label, error, className = '', children, ...props }: FormSelectProps) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {props.required && '*'}
      </label>
      <select
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      >
        {children}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
