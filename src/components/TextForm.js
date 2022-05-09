import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Credits: A
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        style1={{ color: props.mode1 === "yellow" ? "black" : "green" }}
      >
        <h1 className="mb-4">Enter the text to analyze below</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            style1={{
              backgroundColor: props.mode1 === "yellow" ? "pink" : "white",
              color: props.mode1 === "yellow" ? "white" : "green",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        style1={{ color: props.mode1 === "yellow" ? "white" : "green" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

// import React, { useState } from "react";

// // Declaration a new state variable, which we will call "count"
// // const [text, setText] = useState('Enter text here')

// export default function TextForm(props) {
//   const handleUpClick = () => {
//     //console.log("Upper case was clicked" + text);
//     let newText = text.toUpperCase();
//     setText(newText);
//   };
//   const handleLoClick = () => {
//     //console.log("Lower case was clicked" + text);
//     let newText = text.toLowerCase();
//     setText(newText);
//   };

//   const handleClearClick = () => {
//     //console.log("Lower case was clicked" + text);
//     let newText = "";
//     setText(newText);
//   };

//   const handleOnChange = (event) => {
//     //console.log("on change");
//     setText(event.target.value);
//   };
//   const [text, setText] = useState("");
//   //text = "new text";     //wrong way to change the state
//   // setText("new text");  // correct way to change the state
//   return (
//     <>
//       <div
//         className="container"
//         style={{ color: props.mode === "dark" ? "white" : "black" }}
//       >
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             value={text}
//             onChange={handleOnChange}
//             style={{
//               backgroundColor: props.mode === "dark" ? "gray" : "white",
//             }}
//             id="myBox"
//             rows="8"
//             placeholder="Enter text here..."
//           ></textarea>
//         </div>
//         <button className="btn btn-primary mx-1" onClick={handleUpClick}>
//           Convert to Uppercase
//         </button>
//         <button className="btn btn-primary mx-1" onClick={handleLoClick}>
//           Convert to Lowercase
//         </button>
//         <button className="btn btn-primary mx-1" onClick={handleClearClick}>
//           Clear Text
//         </button>
//       </div>

//       <div className="container my-4">
//         <h1>Your text summary</h1>
//         <p>
//           {text.split(" ").length} words and {text.length} characters
//         </p>
//         <p>{0.008 * text.split(" ").length} Minutes read</p>
//         <h3>Preview</h3>
//         <p>{text}</p>
//       </div>
//     </>
//   );
// }

// //EventHandler:::
// //state::: makeing state

// //useState hook::: useState() can used to a creating a variable [text, setState] initialize kar useState ki help se,
// //setText ek fuction jisko mai use kar sakti hu kavi v state ko update karne ke liye(jaise ki avi hame handleOnChange and handleUpClick 2 event ke liye use kiya hai.)

// //onchange() event:::: onchange event ko listen esliye karna pada kyuki usme type nahi kar paate varna text area me. or state ki set karna padenga value= {text}
