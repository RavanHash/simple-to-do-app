import "./style.css";

export default function App() {
  return (
    <>
      <form className={"new-item-form"}>
        <div className="form-row">
          <label htmlFor="item">New uwu Task</label>
          <input type="text" id="item" />
          <button className="btn">+</button>
        </div>
      </form>
      <h1 className="header"> ToDo uwu List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            uwu 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
