import { Table, Button } from "reactstrap";

export default function App() {
  return <CategoriesList />;
}

function CategoriesList() {
  const sampleCategories = [
    {
      name: "Home",
      description: "Rent, Utility, Decor",
      plannedAmount: "$2000",
      spentAmount: "$2000",
    },
    {
      name: "Food",
      description: "Grocery, Restaurant",
      plannedAmount: "$1000",
      spentAmount: "$1500",
    },
    {
      name: "Transportation",
      description: "Gas, Maintenance, Parking",
      plannedAmount: "$700",
      spentAmount: "$500",
    },
  ];
  return (
    <>
      <h1>Categories</h1>
      <Table>
        <thead>
          <td>&nbsp;</td>
          <th>Planned</th>
          <th colSpan={2}>Spent</th>
        </thead>
        {sampleCategories.map((category) => (
          <Category category={category} />
        ))}
      </Table>
      <Button className="bg-primary">Add a Category...</Button>
    </>
  );
}

function Category({ category }) {
  return (
    <>
      <tr>
        <th>{category.name}</th>
        <td rowSpan={2}>{category.plannedAmount}</td>
        <td rowSpan={2}>{category.spentAmount}</td>
        <td rowSpan={2}>
          <Button className="bg-primary text-white">+</Button>
        </td>
      </tr>
      <tr>{category.description}</tr>
    </>
  );
}
