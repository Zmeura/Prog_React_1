import Currency from "./Currency";

const table = document.querySelector("#table");

function Table() {
  return (
    <div>
      <h1>Курс валют</h1>
      <table>
        <thead>
          <tr>
            <td colSpan={2} className="table_title">
              Назва валюти
            </td>
            <td className="table_title">Офіційний курс НБУ</td>
          </tr>
        </thead>
        <tbody>
          {Currency.map((element) => {
            return (
              <tr>
                <td className="abbreviation">{element.cc}</td>
                <td className="name__currency">{element.txt}</td>
                <td className="course">{element.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
