import { useState } from "react";
import { Row, Col } from "reactstrap";
import CategoriesList from "./CategoriesList";
import FormAddTransaction from "./FormAddTransaction";
import FormAddCategory from "./FormAddCategory";

//TODO: Delete/Edit categories
//TODO: Get forms to show on modals

export default function App() {
  const initialTransactions = [
    {
      id: "41g9284h",
      transactionCategory: "home",
      title: "rent",
      amount: 1700,
    },
    {
      id: "4389182g",
      transactionCategory: "home",
      title: "utility",
      amount: 300,
    },
    {
      id: "65oe843",
      transactionCategory: "transportation",
      title: "gas",
      amount: 500,
    },
    {
      id: "8idi4098",
      transactionCategory: "food",
      title: "grocery",
      amount: 1300,
    },
    {
      id: "88k9hksh",
      transactionCategory: "food",
      title: "restaurant",
      amount: 200,
    },
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
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [transactions, setTransactions] = useState(initialTransactions);

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
              setSelectedCategory={setSelectedCategory}
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
