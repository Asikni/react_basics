import { people } from "./data"; // for object and array

export default function ListPeople({ style }) {
  const listItems = people.map((person, index) => (
    <li key={index} style={{ ...style }}>
      {person.name} is a {person.profession} having Id {person.id} and his/her
      accomplishment is {person.accomplishment}
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
