interface DateInputProps extends React.ComponentProps<"input"> {
  label: string;
}

const DateInput = ({ label, ...props }: DateInputProps) => {
  return <div>
    <label htmlFor={label}>{label}</label>
    <input type="date" id={label} name={label} {...props}/>
  </div>;
};

export default DateInput;
