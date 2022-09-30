import classes from "./Card.module.css";

const Card: React.FC<{ className: string; children: any }> = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
