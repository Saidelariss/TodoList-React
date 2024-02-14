export default function TodoList({ todo, onDelete }) {
  return (
    <>
      <input className="check" id="check" type="checkbox"></input>
      <label className="item" htmlFor="check">
        {todo}
      </label>
      <button type="submit" className="delete" onClick={onDelete}>
        Delete
      </button>
      <br />
    </>
  );
}