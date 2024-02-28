import Profile from "./Profile.jsx";

export default function Gallery({ image }) {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile image={image} />
      <Profile image={image} />
      <Profile image={image} />
    </section>
  );
}
