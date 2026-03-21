const movements = [
  {
    name: "Room 204 - Weekend Stay",
    description: "Two-night booking via Airbnb.",
    transactionType: "Income",
    amount: "$380",
    movementType: "Variable",
    dateRecorded: "2026-03-14",
    verificationStatus: "Verified",
  },
  {
    name: "Suite 3 - Business Traveler",
    description: "Week-long reservation from Booking.com.",
    transactionType: "Income",
    amount: "$860",
    movementType: "Variable",
    dateRecorded: "2026-03-10",
    verificationStatus: "Pending verification",
  },
  {
    name: "Room 110 - Family Visit",
    description: "Reservation captured through Expedia.",
    transactionType: "Income",
    amount: "$520",
    movementType: "Variable",
    dateRecorded: "2026-03-06",
    verificationStatus: "Verified",
  },
  {
    name: "Room 305 - Direct Booking",
    description: "Paid through the local hotel website.",
    transactionType: "Income",
    amount: "$290",
    movementType: "Variable",
    dateRecorded: "2026-03-03",
    verificationStatus: "Verified",
  },
  {
    name: "Room 118 - Walk-in Converted",
    description: "Direct reservation processed at the front desk.",
    transactionType: "Income",
    amount: "$210",
    movementType: "Variable",
    dateRecorded: "2026-02-28",
    verificationStatus: "Pending verification",
  },
];

export default function Movements() {
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
            key={movement.name}
            className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold">{movement.name}</h3>
              <span className="text-sm font-semibold text-zinc-800">
                {movement.amount}
              </span>
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
                <dd className="font-medium">{movement.verificationStatus}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
