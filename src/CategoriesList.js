import { Table, Button } from "reactstrap";

import Category from "./Category";
export default function CategoriesList({
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
