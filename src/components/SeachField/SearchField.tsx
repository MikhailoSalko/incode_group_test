import css from "./SearchField.module.scss";
const SearchField = () => {
  return (
    <div>
      <input type="text" name="search" />
      <button type="submit">Load</button>
    </div>
  );
};

export default SearchField;
