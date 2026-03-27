"use client";

import { createContext, useContext, useState } from "react";

const budgetItemsSeed = [
  {
    id: "a11c8e2-6d1b-4c9a-9b2f-1a7d3e5f1001",
    name: "Mortgage",
    description: "Monthly payment for the main hotel property loan.",
    transactionType: "Expense",
    amount: "$2,450",
    expenseType: "Fixed",
    timeRange: "Indefinite",
    dateRecorded: "2026-02-01",
  },
  {
    id: "c33e0a4-8b3d-6e1c-b4d2-3c9f5a7b1003",
    name: "Property Taxes",
    description: "Set aside a fixed amount each month for annual taxes.",
    transactionType: "Expense",
    amount: "$620",
    expenseType: "Fixed",
    timeRange: "Indefinite",
    dateRecorded: "2026-02-01",
  },
  {
    id: "e55a2c6-ad5f-803e-d6f4-5eb07c9d1005",
    name: "Insurance Premium",
    description: "Hotel and liability insurance billed monthly.",
    transactionType: "Expense",
    amount: "$310",
    expenseType: "Fixed",
    timeRange: "Indefinite",
    dateRecorded: "2026-02-01",
  },
  {
    id: "077c4e8-cf71-a260-f816-70d29ebf1007",
    name: "Software Subscriptions",
    description: "Property management and booking tools.",
    transactionType: "Expense",
    amount: "$145",
    expenseType: "Fixed",
    timeRange: "Indefinite",
    dateRecorded: "2026-02-01",
  },
  {
    id: "299e60a-e193-c482-1a38-92f4b0d11009",
    name: "Security Services",
    description: "Overnight security contract for the property.",
    transactionType: "Expense",
    amount: "$480",
    expenseType: "Fixed",
    timeRange: "Indefinite",
    dateRecorded: "2026-02-01",
  },
];

const movementsItemsSeed = [
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

type GlobalState = {
  budgetItemsList: typeof budgetItemsSeed;
  setBudgetItemsList: React.Dispatch<React.SetStateAction<typeof budgetItemsSeed>>;
  movementsItemsList: typeof movementsItemsSeed;
  setMovementsItemsList: React.Dispatch<
    React.SetStateAction<typeof movementsItemsSeed>
  >;
};

const GlobalContext = createContext<GlobalState | null>(null);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [budgetItemsList, setBudgetItemsList] = useState(budgetItemsSeed);
  const [movementsItemsList, setMovementsItemsList] =
    useState(movementsItemsSeed);

  return (
    <GlobalContext.Provider
      value={{
        budgetItemsList,
        setBudgetItemsList,
        movementsItemsList,
        setMovementsItemsList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext is missing");
  }
  return context;
}
