export const TogglerDialog = (props) => {
  const data = props.data;

  return (
    <div className="">
      <select name="" id="">
        {data && data.map((component) => <option>{component.label}</option>)}
      </select>
    </div>
  );
};
