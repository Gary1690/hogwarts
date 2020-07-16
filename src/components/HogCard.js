import React from 'react'


export default class HogCard extends React.Component{
  state = {
    showBackOfCard: false,
    hidden:false
  }

  handleClick=()=>{
    this.setState({
      showBackOfCard: !this.state.showBackOfCard
    })
  }

  handleHideClick =()=>{
    this.setState({
      hidden:true
    })
  }

  cardBack = () =>{
    const {name,specialty,greased,weight} = this.props
    const highestMedalAchieved = this.props["highest medal achieved"] 

    return (
      <div>
        <h3>{name}</h3>
        <h4>Specialty: {specialty}</h4> 
        <h4>{greased? "Greased" : "Not Greased"}</h4>
        <h4>Weight: {weight}</h4> 
        <h3>highest Medal Achieved</h3>
        <h4>{highestMedalAchieved}</h4>
        <button onClick={this.handleHideClick}>Hide</button>
      </div>
    )

  }
  cardFront =()=>{
    const pictureName =  this.props.name.split(" ").join("_")
    return (
      <div>
        <h3>{this.props.name}</h3>
        {/* <img src= {`/hog-imgs/${pictureName}.jpg`} alt=""/> */}
        <img src= {this.props.gif} alt=""/>
      </div>
    )
  }
  
  render(){
    console.log(this.props);
    return (
      <div style ={this.state.hidden ? {display:"none"}:null} className="ui eight wide column" onClick={this.handleClick}>
          {this.state.showBackOfCard?this.cardBack():this.cardFront()}
      </div>
    )
  }

}