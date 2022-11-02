import ListItem from "./ListItem.js"

const List = ({items}) => {
  return (
    <ul>
        {items.map(item => (
            <ListItem key={items.id} item={item} />
        ))}
    </ul>
  )

}

export default List