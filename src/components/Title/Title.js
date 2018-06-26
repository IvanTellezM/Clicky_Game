import React from "react";
import "./Title.css";

const Title = props =>  (

<div className='titleBar'>
<h1 className="title">{props.title}</h1>
<h3 className='instructions'>{props.instructions}</h3>
<h3 className='score'>Score: {props.score}</h3>
<h3 className='highscore'>Highscore: {props.highscore}</h3>
</div>
)

export default Title;
