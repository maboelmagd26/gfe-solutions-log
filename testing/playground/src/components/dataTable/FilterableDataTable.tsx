export default function FilterableDataTable() {
  return (
    <div style={{ maxWidth: "1280px", marginInline: "auto" }}>
      <div>
        <label htmlFor="usersperpage">
          users / page
          <select name="usersperpage" id="usersperpage">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </label>
      </div>
    </div>
  );
}
