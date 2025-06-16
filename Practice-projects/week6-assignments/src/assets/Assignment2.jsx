import { useMemo, useState } from "react";

const words = ["my", "name", "is", "gagandeep","singh", "what", "about", "you"];
const totalLines = 1000;
const allWords = [];

for (let i = 0; i < totalLines; i++){
    let sentence = "";
    for(let j = 0; j < words.length; j++){
        sentence+=(words[Math.floor(words.length*Math.random())]);
        sentence+= " ";
    }
    allWords.push(sentence); 
}

export default function Assignment2(){
    const [sentences, setSentences] = useState(allWords);
    const [filter, setFilter] = useState("");

    const filteredSentences = useMemo(()=>{
        return sentences.filter(x=> x.includes(filter));
    },[sentences, filter])
    return (
        <div>
            <input type="text" onChange={(e)=> {
                setFilter(e.target.value)
            }}></input>
            {filteredSentences.map(((word, index) => <div key = {index}>
                {word}
            </div>))}
        </div>
    )
}