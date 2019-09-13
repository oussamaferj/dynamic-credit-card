import React from "react";
import ReactDOM from "react-dom";
import puce from "./img/puce.PNG";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Fullname: "NAME",
      thru: "",
      cardnumber: ""
    };
  }
  
  Changename = event => {
    var regexlength = /^([a-zA-Z]){0,20}$/;
    if (regexlength.test(event.target.value)) {
      this.setState({
        Fullname: event.target.value.toUpperCase()
      });
    }
  };

  Changethru = e => {
    // const regex = /^\d{2}[./]\d{2}$/;
    //   else if(regex.test(e.target.value)){
    //     let arr=e.target.value.split("/");
    //     if (Number(arr[0])<=12 && Number(arr[1]!=0)){
    if (e.target.value.length <6 && e.target.value.slice(0,2)<13)
      this.setState({
        thru: e.target.value.replace(/[^0-9]/g, '')
      });
     
    //   }
    // }
  };

  addSlash = thru => {
    let arr = [];
    for (let i = 0; i < thru.length; i += 2) {
      arr.push(thru.slice(i, i + 2));
    }
    return arr.join("/");
  };

  Changenumber = event => {
    let cardnumber = event.target.value;
    
      var results = cardnumber.replace(/\d{4}/g);
      
      if(event.target.value.length<17 && !event.target.value.match(/[^0-9]/g)){
        // event.target.value.match('^[0-9]+$')
          
      
        this.setState({
          cardnumber:event.target.value.replace(/[^0-9]/g, ''),
          // event.target.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '),
        });
      
      }
  };
  addspace =(number)=>{
    let arr = [];
    for (let i = 0; i < number.length; i += 4) {
      arr.push(number.slice(i, i + 4));
    }
    return arr.join(" ");
  };



  render() {
    console.log(this.state.thru);
    return (
      <div>
        <div className="credit-card">
          <h2 className="credit-card-title">CREDIT CARD</h2>
          <img className="img2" src={puce} />

          <div className="credit-card-info">
            <div className="credit-card-text">
              <p className="credit-card-number">{this.addspace(this.state.cardnumber.padEnd(16, "*"))}</p>
              <div className="info">
                <p />
                <p>{this.addSlash(this.state.thru.padEnd(4, "*"))}</p>
              </div>
              <p>{this.state.Fullname}</p>
            </div>

            <img src={require("./img/Capture.PNG")} className="img1" />
          </div>
        </div>

        <div className="inputs">
          <form>
            <input
              type="text"
              className="name"
              placeholder="Card Number"
              onChange={this.Changenumber}
              
              value={this.state.cardnumber}
            />
            <input
              type="text"
              className="name"
              placeholder="Name"
              name="Fullname"
              onChange={this.Changename}
              maxLength="20"
            />
            <input
              type="text"
              className="name"
              placeholder="Thru"
              name="thru"
              onChange={this.Changethru}
              value={this.addSlash(this.state.thru)}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
