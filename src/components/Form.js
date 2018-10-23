import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="city" placeholder="Country..." />
        <button>Get me the weather!</button>
      </form>
    );
  }
}

export default Form;
