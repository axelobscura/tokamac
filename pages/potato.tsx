import { useState } from "react"

export default function potato(){
  const [ oword, setOword ] = useState('potato');
  const [ potato, setPotato ] = useState([]);

  let countPotatos = (word) => {
    let splitted = oword.split('');
   // word.split('').map(wd => {
      //console.log(wd);
      //setPotato(splitted.filter(letter => letter === wd));
      
    //});

    let testArray = [];

    for(let i = 0; i < word.length; i++){
      for(let j = 0; j < splitted.length; j++){
        if(word[i] === splitted[j]){
          //setPotato(word[i]);
          testArray.push(word[i]);
        }
      }
    }

    console.log(testArray);

  };

  return(
    <div>
      <h1>POTATO SEARCH</h1>
      <button onClick={() => countPotatos('onepotatotwopotatothreepotatofour')}>COUNT POTATOS NOW!</button>
      {potato}
    </div>
  )
}