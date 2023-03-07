interface ICheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean, id: string) => void;
}

const Checkbox = ({ id, label, checked, onChange }: ICheckboxProps) => {
  return (
    <div className="gap-2 flex items-center">
      <input
        type="checkbox"
        id={id}
        name={id}
        className="accent-text-color"
        checked={checked}
        onChange={({ target }) => onChange(target.checked, id)}
      />
      <label htmlFor={id} className="font-text">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
