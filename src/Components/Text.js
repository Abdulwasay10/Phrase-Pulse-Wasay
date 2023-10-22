import {useState} from 'react'
import React from 'react'

export default function Text(props) {
  const [text, setText] = useState(" ");
    const handleupclick = () =>{
       // console.log("Uppercase was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleOnChange = (event)=>{
       // console.log("On change");
        setText(event.target.value);

    }
    const handleloclick = () =>{
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to Lower Case!", "success");
    }
    const handclearloclick = () =>{
      let newtext = '';
      setText(newtext);
      props.showAlert("Text Cleared!", "success");

    }
   // const [text, setText] = useState('Enter the text here');
   const handspacesclick = () =>{

    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
    props.showAlert("Spaces Removed!", "success");

   }

   const handlecopy = () =>{
    var text = document.getElementById("mytextbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
   }
  //  const handlenumbers = () =>{

  //   const regEx = /\d/
  //   let newtext = text.split(regEx)
  //   setText (newtext.join(regEx))

  //  }
   
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',  color: props.mode==='dark'?'white':'black'}} id="mytextbox" rows="8"></textarea>
            </div>
            <button className="btn btn-info mx-2" onClick= {handleupclick}>Convert letters to upper case</button>
            <button className="btn btn-info mx-2" onClick= {handleloclick}>Convert letters to lower case</button>
            <button className="btn btn-info mx-2" onClick= {handclearloclick}>Clear Text</button>
            <button className="btn btn-info mx-2" onClick= {handspacesclick}>Remove Extra Spaces</button>
            <button className="btn btn-info mx-2" onClick= {handlecopy}>Copy Text</button>

            
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Charachters</p>
      <p><b>{0.008 * text.split(" ").length}</b> Minutes are needed to read the sentence</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text in above text box to preview"}</p>
    </div>
    </>
  )
}
