import { useState } from "react";
import { Button, Form, Label, Input, Row, Col, FormGroup } from "reactstrap";

export default function FormAddTransaction({
  selectedCategory,
  onAddTransaction,
}) {
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
