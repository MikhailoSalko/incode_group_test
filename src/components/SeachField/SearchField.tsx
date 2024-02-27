import { ChangeEvent, FormEvent, useState } from "react";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" value={searchQuery} onChange={handleInput} />
        <button type="submit">Load</button>
      </form>
    </div>
  );
};

export default SearchField;
