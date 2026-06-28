import type { CSSProperties, ComponentProps } from "react";

interface DateInputProps extends ComponentProps<"input"> {
  label: string;
}

const labelStyle: CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const inputStyle: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "var(--gap-s) .75rem",
  borderRadius: "var(--gap-s)",
  border: "1px solid var(--color-3)",
  backgroundColor: "var(--color-5)",
  color: "var(--color-1)",
  fontSize: "1rem",
  fontFamily: "inherit",
};

const DateInput = ({ label, ...props }: DateInputProps) => {
  const inputId = props.id ?? label.toLowerCase();
  const inputName = props.name ?? inputId;

  return (
    <div>
      <label style={labelStyle} htmlFor={inputId}>
        {label}
      </label>
      <input
        type="date"
        id={inputId}
        name={inputName}
        style={inputStyle}
        {...props}
      />
    </div>
  );
};

export default DateInput;
