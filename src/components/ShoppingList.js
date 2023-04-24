import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const[selectedCategory,setSC]=useState("All")

const newItems=items.filter((item)=>{
  if(selectedCategory=="All"){
 return item;
  }
  else{
  return item.category==selectedCategory
 }})

function handleFilter(event){
setSC(event.target.value)
}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
