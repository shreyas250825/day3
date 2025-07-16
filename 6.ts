function processTransaction(amount: number, description: string | undefined, isCredit: boolean): void {
    if (amount < 0) {
        throw new Error("Amount cannot be negative");
    }

    if (!description) {
        description = "No description provided";
    }

    console.log("Transaction Summary:");
    console.log(`  Amount: ₹${amount}`);
    console.log(`  Description: ${description}`);
    console.log(`  Type: ${isCredit ? "Credit" : "Debit"}`);
}

// Valid transaction
processTransaction(500, "Salary", true);

// With undefined description
processTransaction(250, undefined, false);
