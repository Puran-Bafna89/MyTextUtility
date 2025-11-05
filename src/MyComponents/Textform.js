import { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState();

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const toUpperCase = (event) => {
        setText(text.toUpperCase());
        props.setAlertMessage("Text converted to upper case");
    }

    // const characterCount = () => {
    //     if(text === "" || text === undefined){
    //         return 0;
    //     }
    //     else{
    //         return text.length;
    //     }
    // }

    const wordCount = () => {
        let words = 0;
        if(text === "" || text === undefined){
            return "";
        }
        else{
            let characters = text.split(/\s+/).join("").length;
            words = text.split(/\s+/).filter((item) => { return item !== ""}).length;
            return `Your text has ${characters} characters and ${words} words. Note: Spaces are not counted`;
        }
    }

    const removeSpaces = () => {
        setText(text.split(/\s+/).join(" "));
        props.setAlertMessage("Extra spaces removed");
    }

    const capitalize = () => {
        let arr = text.split(/\s+/).map((word => { return word.charAt(0).toUpperCase().concat(word.substr(1).toLowerCase())}));
        setText(arr.join(" "));
        props.setAlertMessage("First letter of each word is capitalized");
        // let newArr = arr.map((word) => {
        //     console.log(arr);
        //     return word.charAt(0).toUpperCase().concat(word.substr(1));
        // });
        // console.log(newArr);
        // setText(newArr.join(" "));
    }

    const toLowerCase = (event) => {
        setText(text.toLowerCase());
        props.setAlertMessage("Text converted to lower case");
    }

    const largestCharacterCount = () => {
        let obj = {};
        let maxCount = 0;
        // let char = "";
        let maxChar = [];
        if(text === "" || text === undefined){
            return "";
        }
        else{

            for(let letter of text){
                if(Object.keys(obj).length === 0){
                    obj[letter] = 1;
                }
                else if(obj[letter]){
                    obj[letter]++;
                }
                else{
                    obj[letter] = 1;
                }
            }
            
            for(let key in obj){
                if(obj[key] > maxCount){
                    maxCount = obj[key];
                    // char = key;
                }
            }

            for(let key in obj){
                if(obj[key] === maxCount){
                    maxChar.push(key);
                }
            }
            return `Largest character repeated is ${maxChar.length === 1 && maxChar[0] === " "?"'space'": maxChar} - ${maxCount} times.`
        }
    }

    const copyText = () => {
        let textarea = document.getElementById("textarea");
        // textarea.select();
        navigator.clipboard.writeText(textarea.value);
        // document.getSelection().removeAllRanges();
        props.setAlertMessage("Text is copied");
    }

    return (
        <>
            <h1 className="mb-4">Try TextUtils - Word Counter, Character Counter, Remove extra spaces</h1>
            <textarea className="form-control" id="textarea" value={text} rows="10" onChange={handleChange} style={{backgroundColor : props.mode === "dark"?"#34406e":"#fff", color: props.mode === "dark"?"#fff":"black"}}></textarea>
            <button disabled={text? false : true} className="btn btn-primary my-3" onClick={toUpperCase}>Upper Case</button>
            <button disabled={text? false : true} className="btn btn-primary my-3 ml-3" onClick={toLowerCase}>Lower Case</button>
            <button disabled={text? false : true} className="btn btn-primary my-3 ml-3" onClick={removeSpaces}>Remove Extra Space</button>
            <button disabled={text? false : true} className="btn btn-primary my-3 ml-3" onClick={capitalize}>Capitalize First Letter</button>
            <button disabled={text? false : true} className="btn btn-primary my-3 ml-3" onClick={copyText}>Copy</button>
            <button disabled={text? false : true} className="btn btn-primary my-3 ml-3" onClick={()=>{setText("")}}>Clear</button>
            <p>{wordCount()}</p>
            <p>{largestCharacterCount()}</p>
        </>
    )
}
