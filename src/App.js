import { useState } from "react";
import { Row, Col } from "reactstrap";
import CategoriesList from "./CategoriesList";
import FormAddTransaction from "./FormAddTransaction";
import FormAddCategory from "./FormAddCategory";

export default function App() {
  const initialTransactions = [
    { transactionCategory: "home", title: "rent", amount: 1700 },
    { transactionCategory: "home", title: "utility", amount: 300 },
    { transactionCategory: "transportation", title: "gas", amount: 500 },
    { transactionCategory: "food", title: "grocery", amount: 1300 },
    { transactionCategory: "food", title: "restaurant", amount: 200 },
  ];
  const initialCategories = [
    {
      name: "home",
      description: "Rent, Utility, Decor",
      plannedAmount: "2000",
      spentAmount: "2000",
    },
    {
      name: "food",
      description: "Grocery, Restaurant",
      plannedAmount: "1000",
      spentAmount: "1500",
    },
    {
      name: "transportation",
      description: "Gas, Maintenance, Parking",
      plannedAmount: "700",
      spentAmount: "500",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState(initialCategories);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [showAddCategory, setShowAddCategory] = useState(false);

  function handleSelection(category) {
    setSelectedCategory((selected) =>
      selected?.name === category.name ? null : category
    );
  }

  function handleAddTransaction(transaction) {
    setTransactions((transactions) => [...transactions, transaction]); //a list of transaction with all categories

    setCategories((categories) =>
      categories.map((category) =>
        transaction.transactionCategory === category.name
          ? {
              ...category,
              spentAmount:
                Number(category.spentAmount) + Number(transaction.amount),
            }
          : category
      )
    );
  }

  function handleAddCategory(category) {
    setCategories((categories) => [...categories, category]);
    setShowAddCategory(!showAddCategory);
  }

  return (
    <>
      <Row>
        <Col className="col-md-5">
          <CategoriesList
            categories={categories}
            transactions={transactions}
            onSelection={handleSelection}
            selectedCategory={selectedCategory}
            showAddCategory={showAddCategory}
            setShowAddCategory={setShowAddCategory}
          />
        </Col>
        {selectedCategory && (
          <Col className="col-md">
            <FormAddTransaction
              selectedCategory={selectedCategory}
              onAddTransaction={handleAddTransaction}
            />
          </Col>
        )}
      </Row>
      <Row>
        <Col>
          {showAddCategory && (
            <FormAddCategory onAddCategory={handleAddCategory} />
          )}
        </Col>
      </Row>
    </>
  );
}
