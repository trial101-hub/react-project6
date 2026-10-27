function Filter({ titleFilter, setTitleFilter, minRating, setMinRating }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search movie title..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <label>Minimum rating:</label>

      <select
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
      >
        <option value={0}>All ratings</option>
        <option value={5}>5 and above</option>
        <option value={7}>7 and above</option>
        <option value={8}>8 and above</option>
        <option value={9}>9 and above</option>
      </select>
    </div>
  );
}

export default Filter;
