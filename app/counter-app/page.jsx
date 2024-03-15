import CounterFunc from "./CounterFunc";

export default function CounterApp() {
  return (
    <main>
      <div className="max-w-fit mx-auto py-8">
        <h2 className="text-center text-5xl font-bold">Counter App</h2>
        <CounterFunc />
      </div>
    </main>
  );
}
