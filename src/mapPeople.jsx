import { people } from "./data"; // for object and array

export default function ListPeople({ style }) {
  const listItems = people.map((person) => (
    <ul>
      <li key={person.id} style={{ ...style }}>
        {person.name} is a {person.profession} and his/her accomplishment is{" "}
        {person.accomplishment}
      </li>
    </ul>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
