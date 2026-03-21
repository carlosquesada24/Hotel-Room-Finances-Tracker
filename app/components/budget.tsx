const transactions = [
  {
    name: "Mortgage",
    description: "Monthly payment for the main hotel property loan.",
    transactionType: "Expense",
    amount: "$2,450",
    expenseType: "Fixed",
    timeRange: "Indefinite",
  },
  {
    name: "Property Taxes",
    description: "Set aside a fixed amount each month for annual taxes.",
    transactionType: "Expense",
    amount: "$620",
    expenseType: "Fixed",
    timeRange: "Indefinite",
  },
  {
    name: "Insurance Premium",
    description: "Hotel and liability insurance billed monthly.",
    transactionType: "Expense",
    amount: "$310",
    expenseType: "Fixed",
    timeRange: "Indefinite",
  },
  {
    name: "Software Subscriptions",
    description: "Property management and booking tools.",
    transactionType: "Expense",
    amount: "$145",
    expenseType: "Fixed",
    timeRange: "Indefinite",
  },
  {
    name: "Security Services",
    description: "Overnight security contract for the property.",
    transactionType: "Expense",
    amount: "$480",
    expenseType: "Fixed",
    timeRange: "Indefinite",
  },
];

export default function Budget() {
  return (
    <section className="mt-14 w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Budget</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Record monthly transactions once and reuse them every month.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {transactions.map((item) => (
          <article
            key={item.name}
            className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-black">{item.name}</h3>
              <span className="text-sm font-semibold text-zinc-800">
                {item.amount}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-700">
              <div>
                <dt className="text-zinc-500">Transaction type</dt>
                <dd className="font-medium">{item.transactionType}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Type</dt>
                <dd className="font-medium">{item.expenseType}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Time range</dt>
                <dd className="font-medium">{item.timeRange}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Amount</dt>
                <dd className="font-medium">{item.amount}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
