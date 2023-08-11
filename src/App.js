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
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleSelection(category) {
    setSelectedCategory((selected) =>
      selected?.name === category.name ? null : category
    );
  }
  return (
    <>
      <CategoriesList
        onSelection={handleSelection}
        selectedCategory={selectedCategory}
      />
      ;
      {selectedCategory && (
        <FormAddTransaction selectedCategory={selectedCategory} />
      )}
    </>
  );
}

function CategoriesList({ onSelection, selectedCategory }) {
  const sampleCategories = [
    {
      name: "🏠 Home",
      description: "Rent, Utility, Decor",
      plannedAmount: "$2000",
      spentAmount: "$2000",
    },
    {
      name: "🥙 Food",
      description: "Grocery, Restaurant",
      plannedAmount: "$1000",
      spentAmount: "$1500",
    },
    {
      name: "🚗 Transportation",
      description: "Gas, Maintenance, Parking",
      plannedAmount: "$700",
      spentAmount: "$500",
    },
  ];
  return (
    <>
      <h1>Categories</h1>
      <Table className="category-table">
        <thead>
          <td>&nbsp;</td>
          <th>Planned</th>
          <th colSpan={2}>Spent</th>
        </thead>
        {sampleCategories.map((category) => (
          <Category
            category={category}
            onSelection={onSelection}
            selectedCategory={selectedCategory}
          />
        ))}
      </Table>
      <Button className="bg-primary">Add a Category...</Button>
    </>
  );
}

function Category({ category, onSelection, selectedCategory }) {
  const isSelected = selectedCategory?.name === category.name;
  return (
    <>
      <tr>
        <th>{category.name}</th>
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

function FormAddTransaction({ selectedCategory }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    //how do I handle submit??
    e.preventDefault();
  }
  return (
    <>
      <h2>{selectedCategory.name}: Add Transation</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="col-5 col-md-4 col-lg-3">
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
          <Col className="col-5 col-md-4 col-lg-3">
            <FormGroup>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button className="bg-warning border-warning text-dark" type="submit">
          Add
        </Button>
      </Form>
    </>
  );
}
