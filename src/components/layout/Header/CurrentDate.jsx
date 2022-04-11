import React from "react";

{
  /*class Cdate extends React.Component {
    state={
      curDT : new Date().toLocaleString(),
    }
    render(){
      return (
        <div>
          <p>{this.state.curDT}</p>
        </div>
      );
    }
  }
*/
}
export default function Cdate() {
  const current = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = `${current.getDate()}-${
    monthNames[current.getMonth()]
  }-${current.getFullYear()}`;

  return (
    <div className="App">
      <p>{date}</p>
    </div>
  );
}
