import Budget from "./app/components/budget";
import Movements from "./app/components/movements";

export default function App() {
  return (
    <>
      <h1>Hotel room finances tracker</h1>
      <Movements />
      <Budget />
    </>
  );
}
