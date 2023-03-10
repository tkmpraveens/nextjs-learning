import classes from "./dropdown.module.scss";

const Dropdown = (props) => {
  const { id, label, optionList, onChange } = props;

  const options = optionList.map((option, i) => {
    return (
      <option key={i} className={classes.select__option} value={option?.option}>
        {option?.label}
      </option>
    );
  });

  return (
    <div className={classes.select}>
      <label className={classes.select__label} htmlFor={id}>
        {label}
      </label>
      <select
        className={classes.select__control}
        name={id}
        id={id}
        onChange={(e) => onChange(e?.target.value)}
      >
        {options}
      </select>
    </div>
  );
};
export default Dropdown;
