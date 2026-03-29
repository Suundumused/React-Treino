function List() {
  const items: string[] = ["Item A", "Item B"];
  
  return (
    <div>
      <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
}

export default List;