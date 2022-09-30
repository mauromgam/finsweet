const CarItem: React.FC<{ make: string; model: string; year: number }> = (
  props
) => {
  return (
    <li>
      {props.make} - {props.model} ({props.year})
    </li>
  );
};

export default CarItem;
