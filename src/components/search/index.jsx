export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>
        <img
          src="/images/search.png"
          alt="search-img"
          className="search-icon"
        />
      </button>
    </div>
  );
}
