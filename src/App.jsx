import MyButton from "./Button.jsx";
import CountButton from "./countBtn.jsx";
import Gallery from "./Gallery.jsx";
import PackingList from "./item.jsx";
import ListPeople from "./mapPeople.jsx";
import Sculpture from "./sculpture.jsx";
import TrafficLight from "./trafficLight.jsx";
import Counter from "./stateAsSnapShot.jsx";
import BucketList from "./artBucketList.jsx";
import { useState } from "react";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function ShoppingList() {
  // const pro = { title: "Cabbage", isFruit: false, id: 1 }
  // const fruits = ["apple","orange","mango"]

  // const [fruit1, fruit2] = fruits

  // const {title, isFruit} = pro

  const [count, setCount] = useState(0); //useState an array --- count gets first value,
  //second element is a function that allows you to modify count and hence update the state .
  function handleCount() {
    setCount(count + 1);
  }

  let img = "/cats.jpg";

  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return (
    //passing the state down from App to countbutton
    <div>
      <CountButton count={count} onClick={handleCount} />
      <CountButton count={count} onClick={handleCount} />
      <Gallery image={img} />
      <PackingList />
      <ListPeople style={{ margin: "10px", fontSize: "16px", color: "blue" }} />
      <Sculpture />
      <div style={{ display: "flex" }}>
        <TrafficLight />
      </div>
      <Counter />
      <BucketList />
      <MyButton text="place" />
      <MyButton
        text="hello"
        style={{ border: "1px solid red", backgroundColor: "green" }}
      />

      <ul> {listItems}</ul>
    </div>
  );
}
