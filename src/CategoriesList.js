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
          <tr>
            <th>CATEGORIES</th>
            <th>PLANNED</th>
            <th>SPENT</th>
            <th>ADD TRANSACTION</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <Category
              key={category.description}
              transactions={transactions}
              category={category}
              onSelection={onSelection}
              selectedCategory={selectedCategory}
            />
          ))}
        </tbody>
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
