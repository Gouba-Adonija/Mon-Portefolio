/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {()=>void} onchange
 * @returns
 */
export function Input({ placeholder, value, onChange, label }) {
  return (
    <div className="my-3">
      <label htmlFor="">{label}</label>

      <input
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
