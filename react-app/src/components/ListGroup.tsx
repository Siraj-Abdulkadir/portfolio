import type { MouseEvent } from "react";

const items = ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5"];

const clickMessage = (event: MouseEvent) => console.log(event.target);

function ListGroup() {
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items Found!!</p>}
      <ul className="list-group">
        {items.map((items) => (
          <li onClick={clickMessage} key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
