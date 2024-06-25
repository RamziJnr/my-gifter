import './Pickpage.css';
// to test button onClick
// function displayConsole(num: number) {
//   // alert(`You clicked ${num}`);
// }

function NumberList() {
  let count = 1;
  const numbers = [];
  // creates 20
  while (count <= 20) {
    numbers.push(count);
    count += 1;
  }
  // console.log(numbers);

  return (
    <div>
      <center>
        <div className="header">
          <h1>
            Hi, Daniel <br /> Pick A Number
          </h1>
        </div>
      </center>
      <div className="grid">
        {numbers.map(num => (
          <button
            type="submit"
            key={num}
            onClick={() => {
              // displayConsole(num);
            }}
            className="button"
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NumberList;
