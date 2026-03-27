
"use client";

import { useGlobalContext } from "../context/GlobalContext";

export default function Movements() {
  const { movementsItemsList, setMovementsItemsList } = useGlobalContext();

  const handleVerify = (id: string) => {
    setMovementsItemsList((current) =>
      current.map((movement) =>
        movement.id === id
          ? { ...movement, verificationStatus: "Verified" }
          : movement
      )
    );
  };

  const totals = movementsItemsList.reduce(
    (acc, movement) => {
      const numeric = Number(movement.amount.replace(/[^0-9.-]+/g, ""));
      if (movement.transactionType === "Income") {
        acc.income += numeric;
      } else {
        acc.expenses += numeric;
      }
      acc.balance = acc.income - acc.expenses;
      return acc;
    },
    { income: 0, expenses: 0, balance: 0 }
  );

  return (
    <section className="mt-14 w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Movements</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Track actual recorded transactions as they happen.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {movementsItemsList.map((movement) => (
          <article
            key={movement.id}
            className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-black">
                {movement.name}
              </h3>
              {movement.verificationStatus === "Pending" ? (
                <input
                  type="text"
                  value={movement.amount}
                  onChange={(event) =>
                    setMovementsItemsList((current) =>
                      current.map((item) =>
                        item.id === movement.id
                          ? { ...item, amount: event.target.value }
                          : item
                      )
                    )
                  }
                  className="w-24 rounded border border-zinc-200 px-2 py-1 text-right text-sm font-semibold text-zinc-800"
                />
              ) : (
                <span className="text-sm font-semibold text-zinc-800">
                  {movement.amount}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-zinc-600">{movement.description}</p>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-700">
              <div>
                <dt className="text-zinc-500">Transaction type</dt>
                <dd className="font-medium">{movement.transactionType}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Type</dt>
                <dd className="font-medium">{movement.movementType}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Date recorded</dt>
                <dd className="font-medium">{movement.dateRecorded}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Verification status</dt>
                <dd className="font-medium">
                  {movement.verificationStatus}
                  {movement.verificationStatus === "Pending" ? (
                    <button
                      type="button"
                      onClick={() => handleVerify(movement.id)}
                      className="ml-2 text-xs font-semibold text-blue-600"
                    >
                      Verificar
                    </button>
                  ) : null}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-zinc-500">Total Income</p>
          <p className="text-lg font-semibold text-black">
            ${totals.income.toFixed(2)}
          </p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-zinc-500">Total Expenses</p>
          <p className="text-lg font-semibold text-black">
            ${totals.expenses.toFixed(2)}
          </p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-zinc-500">Balance</p>
          <p className="text-lg font-semibold text-black">
            ${totals.balance.toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
}
