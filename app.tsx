import Budget from "./app/components/budget";
import Movements from "./app/components/movements";

export default function App() {
  return (
    <>
      <h1>Hotel room finances tracker</h1>
      {/* <p>
        Capture the recurring monthly transactions for each property once, then
        reuse them without re-entering the same data every month.
      </p> */}
      <Movements />
      <Budget />
    </>
  );
}
