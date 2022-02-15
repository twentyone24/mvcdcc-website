import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  // TODO add onFocus border
  return (
    <div className="search ">
      {/* <div className="search-icon">&#x1F50D;</div> */}
      <div className="search-icon">
        <FaSearch />
      </div>
      <input type="text" placeholder="Search" className="search-input" />
    </div>
  );
};

export default SearchComponent;
