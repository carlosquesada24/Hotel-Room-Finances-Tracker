
"use client";

import { useState } from "react";

const initialMovements = [
  {
    id: "a1f3c8e2-6d1b-4c9a-9b2f-1a7d3e5f0001",
    name: "Mortgage",
    description: "Monthly payment for the main hotel property loan.",
    transactionType: "Expense",
    amount: "$2,450",
    movementType: "Fixed",
    dateRecorded: "2026-02-01",
    verificationStatus: "Pending",
    budgetItemId: "a11c8e2-6d1b-4c9a-9b2f-1a7d3e5f1001",
  },
  {
    id: "c3f5e0a4-8b3d-6e1c-b4d2-3c9f5a7b0003",
    name: "Property Taxes",
    description: "Set aside a fixed amount each month for annual taxes.",
    transactionType: "Expense",
    amount: "$620",
    movementType: "Fixed",
    dateRecorded: "2026-02-01",
    verificationStatus: "Pending",
    budgetItemId: "c33e0a4-8b3d-6e1c-b4d2-3c9f5a7b1003",
  },
  
  {
    id: "e5b7a2c6-ad5f-803e-d6f4-5eb07c9d0005",
    name: "Insurance Premium",
    description: "Hotel and liability insurance billed monthly.",
    transactionType: "Expense",
    amount: "$310",
    movementType: "Fixed",
    dateRecorded: "2026-02-01",
    verificationStatus: "Verified",
    budgetItemId: "e55a2c6-ad5f-803e-d6f4-5eb07c9d1005",
  },
  
  {
    id: "07d9c4e8-cf71-a260-f816-70d29ebf0007",
    name: "Software Subscriptions",
    description: "Property management and booking tools.",
    transactionType: "Expense",
    amount: "$145",
    movementType: "Fixed",
    dateRecorded: "2026-02-01",
    verificationStatus: "Verified",
    budgetItemId: "077c4e8-cf71-a260-f816-70d29ebf1007",
  },
 

  {
    id: "3a02f71b-f2a4-d593-2b49-a305c1e20010",
    name: "Security Services",
    description: "Overnight security contract for the property.",
    transactionType: "Expense",
    amount: "$480",
    movementType: "Fixed",
    dateRecorded: "2026-03-01",
    verificationStatus: "Verified",
    budgetItemId: "3aaf71b-f2a4-d593-2b49-a305c1e21010",
  },
  {
    id: "b2e4d9f3-7a2c-5d0b-a3c1-2b8e4f6a0002",
    name: "Mortgage",
    description: "Monthly payment for the main hotel property loan.",
    transactionType: "Expense",
    amount: "$2,450",
    movementType: "Fixed",
    dateRecorded: "2026-03-01",
    verificationStatus: "Verified",
    budgetItemId: "b22d9f3-7a2c-5d0b-a3c1-2b8e4f6a1002",
  },
  {
    id: "d4a6f1b5-9c4e-7f2d-c5e3-4daf6b8c0004",
    name: "Property Taxes",
    description: "Set aside a fixed amount each month for annual taxes.",
    transactionType: "Expense",
    amount: "$620",
    movementType: "Fixed",
    dateRecorded: "2026-03-01",
    verificationStatus: "Verified",
    budgetItemId: "d44f1b5-9c4e-7f2d-c5e3-4daf6b8c1004",
  },
  {
    id: "f6c8b3d7-be60-914f-e705-6fc18dae0006",
    name: "Insurance Premium",
    description: "Hotel and liability insurance billed monthly.",
    transactionType: "Expense",
    amount: "$310",
    movementType: "Fixed",
    dateRecorded: "2026-03-01",
    verificationStatus: "Verified",
    budgetItemId: "f66b3d7-be60-914f-e705-6fc18dae1006",
  },
   {
    id: "18e0d5f9-d082-b371-0927-81e3afc0008",
    name: "Software Subscriptions",
    description: "Property management and booking tools.",
    transactionType: "Expense",
    amount: "$145",
    movementType: "Fixed",
    dateRecorded: "2026-03-01",
    verificationStatus: "Verified",
    budgetItemId: "188d5f9-d082-b371-0927-81e3afc1008",
  },
    {
    id: "29f1e60a-e193-c482-1a38-92f4b0d10009",
    name: "Security Services",
    description: "Overnight security contract for the property.",
    transactionType: "Expense",
    amount: "$480",
    movementType: "Fixed",
    dateRecorded: "2026-02-01",
    verificationStatus: "Verified",
    budgetItemId: "299e60a-e193-c482-1a38-92f4b0d11009",
  },
];

export default function Movements() {
  const [movements, setMovements] = useState(initialMovements);

  const handleVerify = (id: string) => {
    setMovements((current) =>
      current.map((movement) =>
        movement.id === id
          ? { ...movement, verificationStatus: "Verified" }
          : movement
      )
    );
  };

  const totals = movements.reduce(
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
        {movements.map((movement) => (
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
                    setMovements((current) =>
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
