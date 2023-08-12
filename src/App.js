import { useState } from "react";
import {
  Table,
  Button,
  Form,
  Label,
  Input,
  Row,
  Col,
  FormGroup,
} from "reactstrap";

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
  return (
    <Row>
      <Col className="col-md-5">
        <CategoriesList
          categories={categories}
          transactions={transactions}
          onSelection={handleSelection}
          selectedCategory={selectedCategory}
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
      {/* To see transactions list
      <Col>
        {transactions.map((t) => (
          <p>
            {t.title}
            {t.transactionCategory}
          </p>
        ))}
      </Col> */}
    </Row>
  );
}

function CategoriesList({
  transactions,
  onSelection,
  selectedCategory,
  categories,
}) {
  return (
    <div className="category-table">
      <Table>
        <thead>
          <th>Categories</th>
          <th>Planned</th>
          <th colSpan={2}>Spent</th>
        </thead>
        {categories.map((category) => (
          <Category
            transactions={transactions}
            category={category}
            onSelection={onSelection}
            selectedCategory={selectedCategory}
          />
        ))}
      </Table>
      <Button className="bg-primary">Add a Category...</Button>
    </div>
  );
}

function Category({ category, onSelection, selectedCategory, transactions }) {
  const isSelected = selectedCategory?.name === category.name;

  // TODO: Make the Spent part of categories table dynamic
  // const filteredTransactions = transactions.filter(
  //   (transaction) =>
  //     transactions.tranactionCategory ===
  //     selectedCategory.name;
  // );
  // const spentAmount = filteredTransactions.reduce(
  //   (acc, curr) => acc + curr.amount, 0)
  // );

  // TODO: Add each category's transaction to show up under "Spent" when clicked on the number
  console.log(selectedCategory);
  return (
    <>
      <tr>
        <th style={{ color: "#0c6dfd" }}>{category.name.toUpperCase()}</th>
        <td rowSpan={2}>{category.plannedAmount}</td>
        <td
          rowSpan={2}
          style={{
            color:
              category.spentAmount > category.plannedAmount ? "red" : "green",
          }}
        >
          {category.spentAmount}
        </td>
        <td rowSpan={2}>
          <Button
            className={
              isSelected
                ? "bg-light border-primary text-primary"
                : "bg-primary border-primary text-white"
            }
            onClick={() => onSelection(category)}
          >
            {isSelected ? "x" : "+"}
          </Button>
        </td>
      </tr>
      <tr>{category.description}</tr>
    </>
  );
}

function FormAddTransaction({ selectedCategory, onAddTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const transactionCategory = selectedCategory.name;

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount) return;

    const newTransaction = { title, amount, transactionCategory };

    onAddTransaction(newTransaction);

    setTitle("");
    setAmount("");
  }
  return (
    <div className="form-add-transaction">
      <h2>{selectedCategory.name}: Add Transation</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="col-5">
            <FormGroup>
              <Label htmlFor="title">Title</Label>
              <Input
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col className="col-5">
            <FormGroup>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button className="btn-light text-white" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}
