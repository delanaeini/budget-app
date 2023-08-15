import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function FormAddCategory({ onAddCategory }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [plannedAmount, setPlannedAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !plannedAmount) return;

    const newCategory = { name, description, plannedAmount };
    let spentAmount = ""; //to add an empty place for spentamount added later
    onAddCategory({ ...newCategory, spentAmount });

    setName("");
    setDescription("");
    setPlannedAmount("");
  }

  return (
    <div className="form-add-category">
      <h2>Add a Category</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="col-5">
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                className="form-control"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col className="col-5">
            <FormGroup>
              <Label htmlFor="plannedAmount">Planned Amount</Label>
              <Input
                className="form-control"
                type="number"
                id="plannedAmount"
                value={plannedAmount}
                onChange={(e) => setPlannedAmount(Number(e.target.value))}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                className="form-control"
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
