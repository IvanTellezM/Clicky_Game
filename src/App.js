import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      friends: friends, //IF key and value are the same we can define just one. 
      clickedCards: [],
      score: 0, 
      highscore: 0, 
  };


    cardClick = id => {
      const newFriends = [];
      //GAME LOST
      if (this.state.clickedCards.includes(id)) {
        this.setState({ score: 0, clickedCards: [] })
        alert ('Duplicate clicked!')
      } else {//GAME CONTINUES
          this.state.clickedCards.push(id);
          this.state.score++;
          //REWRITING HIGHSCORE
        if (this.state.score > this.state.highscore) {
          this.setState({ 
            highscore: this.state.score,
          });
        }
      }

    //RANDOMLY LOOPING THROUGH STUDENTS ARRAY AND MIGRATING EACH CHOSEN INDEX
  
  for (let idx=0; idx<12; idx++) { 
    newFriends.push(this.state.friends.splice
      (Math.floor
        (Math.random()*this.state.friends.length),1
      )[0]
    )
  }
  //Fixed typo friends: newFriends
  this.setState({ friends: newFriends });
};
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
         title = "World Cup County"
         instructions= "Click on an flag to earn points, but don't click on any more than once!"
         score={this.state.score}
         highscore={this.state.highscore}
         />
        {this.state.friends.map(friend => (
          <FriendCard
            cardClick={this.cardClick}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
