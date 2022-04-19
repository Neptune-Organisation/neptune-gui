export const ButtonDialog = (props) => {
  const data = props.data;
  /* const buttonList = data.buttonList; */

  return (
    <div className="">
      <select name="" id="">
        {data && data.map((entry) => (<option>{entry.label}</option>))}
      </select>

    </div>
  );
};
