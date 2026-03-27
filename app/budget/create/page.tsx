export default function CreateBudgetItemPage() {
  return (
    <section className="w-full">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Budgets
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-black">
          Create budget item
        </h1>
        <p className="mt-2 text-sm text-zinc-600">
          Add a new budget entry that can be reused each month.
        </p>
      </div>

      <form className="space-y-6">
        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-black">
            1. Transaction details
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Select transaction type and provide a clear name and description.
          </p>

          <div className="mt-6 grid gap-4">
            

            <label className="grid gap-2 text-sm font-medium text-zinc-700">
              Name
              <input
                type="text"
                name="name"
                placeholder="e.g., Mortgage, Parking fees"
                className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-black"
              />
            </label>

            <div>
              <p className="text-sm font-medium text-zinc-700">
                Select transaction type
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <label className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                  <input
                    type="radio"
                    name="transactionType"
                    value="income"
                    className="h-4 w-4"
                  />
                  Income
                </label>
                <label className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                  <input
                    type="radio"
                    name="transactionType"
                    value="expense"
                    className="h-4 w-4"
                  />
                  Expense
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-black">2. Amount</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Enter the amount and choose fixed or variable.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-zinc-700">
              Enter amount
              <input
                type="number"
                name="amount"
                min="0"
                step="0.01"
                placeholder="0.00"
                className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-black"
              />
            </label>

            <div>
              <p className="text-sm font-medium text-zinc-700">
                Select amount type
              </p>
              <div className="mt-2 grid gap-2">
                <label className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                  <input
                    type="radio"
                    name="amountType"
                    value="fixed"
                    className="h-4 w-4"
                  />
                  Fixed
                </label>
                <label className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                  <input
                    type="radio"
                    name="amountType"
                    value="variable"
                    className="h-4 w-4"
                  />
                  Variable
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-black">
            3. Select periods
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Choose a time range for when this budget item applies.
          </p>

          <div className="mt-6 grid gap-4">
            <div>
              <p className="text-sm font-medium text-zinc-700">Time range</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <label className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                  <input
                    type="radio"
                    name="timeRange"
                    value="indefinite"
                    className="h-4 w-4"
                  />
                  Indefinite
                </label>
                <label className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                  <input
                    type="radio"
                    name="timeRange"
                    value="custom"
                    className="h-4 w-4"
                  />
                  Custom (start month – end month)
                </label>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-zinc-700">
                Start month
                <input
                  type="month"
                  name="startMonth"
                  className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-black"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-700">
                End month
                <input
                  type="month"
                  name="endMonth"
                  className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm text-black"
                />
              </label>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-md bg-black px-5 py-2 text-sm font-semibold text-white"
          >
            Create budget item
          </button>
          <button
            type="button"
            className="rounded-md border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
