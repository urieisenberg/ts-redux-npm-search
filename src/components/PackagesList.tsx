import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const PackagesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchPackages } = useActions();
  const { data, errorMessage, isLoading } = useTypedSelector(
    (state) => state.searchPackage
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchPackages(searchTerm);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {isLoading && <h3>Loading...</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      {!isLoading &&
        !errorMessage &&
        data.map((item) => <div key={item}>{item}</div>)}
    </>
  );
};

export default PackagesList;
