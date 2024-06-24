/* eslint-disable react/prop-types */

function Search({ searchTerm, handleSearchChange }) {
  return (
    <div className="flex gap-4 items-center flex-wrap my-5 justify-center">
      <label htmlFor="search" className="text-orange text-lg">
        Go and search for your tasks
      </label>
      <input
        value={searchTerm}
        onChange={handleSearchChange}
        type="search"
        id="search"
        placeholder="search for task.."
        className="rounded px-3 py-2 border border-orange focus:outline-orange"
      />
    </div>
  );
}

export default Search;
