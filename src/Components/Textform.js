import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter the text here");

    const handleUpClick = () =>{
        console.log("converted to Uppercase" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnchange = (event) =>{
        console.log("status changed");
        setText(event.target.value)
    }
    

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" onChange={handleOnchange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>convert to Uppercase</button>
    </div>
    
  )
}
