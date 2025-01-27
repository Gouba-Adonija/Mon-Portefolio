export function Checkbox({ checked, onChange, label, id }) {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        className="fom-check"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="form-check-label">
        {label}{" "}
      </label>
    </div>
  );
}
