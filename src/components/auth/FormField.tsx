interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function FormField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
}: FormFieldProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="input-form rounded-xl"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}