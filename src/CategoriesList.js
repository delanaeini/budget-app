import { Table, Button } from "reactstrap";
import Category from "./Category";

export default function CategoriesList({
  transactions,
  onSelection,
  selectedCategory,
  categories,
  showAddCategory,
  setShowAddCategory,
}) {
  return (
    <div className="category-table">
      <Table>
        <thead style={{ color: "hotpink" }}>
          <th>CATEGORIES</th>
          <th>PLANNED</th>
          <th colSpan={2}>SPENT</th>
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
      <Button
        className="bg-primary"
        onClick={() => setShowAddCategory(!showAddCategory)}
      >
        Add a Category...
      </Button>
    </div>
  );
}
