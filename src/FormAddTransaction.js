import { v4 as uuid } from "uuid";
import { useState } from "react";
import { Button, Form, Label, Input, Row, Col, FormGroup } from "reactstrap";

export default function FormAddTransaction({
  setSelectedCategory,
  selectedCategory,
  onAddTransaction,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const transactionCategory = selectedCategory.name;

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount) return;

    let id = uuid().slice(0, 8);
    const newTransaction = { id, transactionCategory, title, amount };

    onAddTransaction(newTransaction);
    console.log(newTransaction);

    setTitle("");
    setAmount("");
    setSelectedCategory(null);
  }

  return (
    <div className="form-add-transaction">
      <h2>{selectedCategory.name.toUpperCase()}: Add Transaction</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="col-5">
            <FormGroup>
              <Label htmlFor="title">Title</Label>
              <Input
                className="form-control"
                type="text"
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
                className="form-control"
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
