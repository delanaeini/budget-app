import { Button } from "reactstrap";
import SpentAmount from "./SpentAmount";

export default function Category({
  category,
  onSelection,
  selectedCategory,
  transactions,
}) {
  const isSelected = selectedCategory?.name === category.name;

  return (
    <>
      <tr>
        <th style={{ color: "#0c6dfd" }}>{category.name.toUpperCase()}</th>
        <td rowSpan={2}>{category.plannedAmount}</td>
        <td rowSpan={2}>
          <SpentAmount category={category} transactions={transactions} />
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
      <tr>
        <td>{category.description}</td>
      </tr>
    </>
  );
}
