import "./styles.css";

const data = [
  { Firstname: "Aaaa", Lastname: "Bbbbbbbb", Age: 20 },
  { Firstname: "Ccc", Lastname: "Dd", Age: 30 },
  { Firstname: "Eeeeeeeeeeeeeeeeeee", Lastname: "Fffff", Age: 40 },
  { Firstname: "sdfdsaff", Lastname: "hgfdfds", Age: 50 }
];
// this function creates the table and will add content by going through the
// map of data
// you can add or remove data by altering the data map so you don't have
// to alter the code of the function

export default function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Firstname}</td>
                <td>{val.Lastname}</td>
                <td>{val.Age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
