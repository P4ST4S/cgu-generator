import { TextareaHTMLAttributes } from 'react';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function FormTextarea({ label, error, className = '', ...props }: FormTextareaProps) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {props.required && '*'}
      </label>
      <textarea
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
