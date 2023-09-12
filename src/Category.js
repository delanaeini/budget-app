import { Button } from "reactstrap";

export default function Category({
  category,
  onSelection,
  selectedCategory,
  transactions,
}) {
  const isSelected = selectedCategory?.name === category.name;

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
      <tr>
        <td>{category.description}</td>
      </tr>
    </>
  );
}
