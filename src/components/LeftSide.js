const LeftSide = ({ sortedArray }) => {
  let count = 1;
  const photos = {
    die1: "./images/die1.png",
  };
  const RollOutput = ({ id, roll }) => {
    return (
      <>
        <div id={id}>
          {id} x {roll}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="left-side">
        Roll Results
        {sortedArray.map((roll) => {
          return (
            <div>
              <RollOutput id={count++} roll={roll} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LeftSide;
