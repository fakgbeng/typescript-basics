import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  removeItem: (id: string) => void;
}> = (props) => {
  const remove = () => {
    props.removeItem(props.id);
  };
  return (
    <li onClick={remove} className={classes.item}>
      {props.text}
    </li>
  );
};
export default TodoItem;
