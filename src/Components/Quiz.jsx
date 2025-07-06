import React, { useState } from 'react'
import './Quiz.css';
import {Data} from './Data'

const Quiz = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);


  const next = () => {
    if(index < data.length - 1){
      setIndex(index+1);
    }
    else{
      document.querySelector(".score").innerHTML = `<p>Your Score : ${score} / 5 </p>`;
      document.querySelector(".container-box").innerHTML = "";
      
      let nextBtn = document.querySelector(".nextBtn");
      nextBtn.innerHTML = "Play Again";
      nextBtn.classList.add("reset");
      const reset = document.querySelector(".reset");
      reset.addEventListener("click", () => {
        window.location.reload();
      })
    }

    const checked = document.querySelectorAll(".checkedBox");
    checked.forEach((curVal) => {
      curVal.checked = false;
    })
  }

  const  handleInput = (event) => {
    let chooseAns = event.target.value;
    if(chooseAns === data[index].ans){
      setScore(score+1);
    }
  }

  return (
    <>
      <div className="container">
        <div className="container-box">
          <div className="quiz">
            <h1>Q : {data[index].q}</h1>
          </div>
          <div className="options">
            <div className="option">
              <input type="radio" name='select' onChange={handleInput} value={data[index].a} className='checkedBox'/>
              <p> A : {data[index].a}</p>
            </div>
            <div className="option">
              <input type="radio" name='select'onChange={handleInput} value={data[index].b} className='checkedBox' />
              <p> B : {data[index].b}</p>
            </div>
            <div className="option">
              <input type="radio" name='select' onChange={handleInput} value={data[index].c} className='checkedBox' />
              <p> C : {data[index].c}</p>
            </div>
            <div className="option">
              <input type="radio" name='select' onChange={handleInput} value={data[index].d}  className='checkedBox'/>
              <p> D : {data[index].d}</p>
            </div>
          </div>
        </div>

        <div className="score"></div>

        
        <div className="btn">
          <button className='nextBtn' onClick={next}>Next</button>
        </div>
      </div>
    </>
  )
}

export default Quiz