import React from 'react'
import HogCard from './HogCard'
import Sorting from './Sorting'


export default class HogContainer extends React.Component{

  state = {
    hogs:[],
    hog_gifs:[],
    sortBy:"All"
  }

  handleChange = (e)=>{
    console.log(e.target.value);
    this.setState({
      sortBy:e.target.value
    })
  }

  componentDidMount(){

    fetch('http://localhost:3001/hogs')
    .then(resp=>resp.json())
    .then(hogs=>{
      fetch('https://api.giphy.com/v1/gifs/search?q=pigs&api_key=dc6zaTOxFJmzC&rating=g')
      .then(resp=>resp.json())
      .then(hog_gifs=>{
        let hogsWithImages = hogs.map((hog,index)=>{
                                return {...hog, gif:hog_gifs.data[index].images.original.url }
                              })
        this.setState({
          hogs:hogsWithImages
        })
      })
    })


    
  }

  renderHogCards = ()=>{
    let currentHogsOnScreent = [...this.state.hogs]
    let hogsToBeDisplay =[] ; 
    if (this.state.sortBy === 'All'){
      hogsToBeDisplay = currentHogsOnScreent
    }else if (this.state.sortBy === 'Greased'){
      hogsToBeDisplay = currentHogsOnScreent.filter( hog=> hog.greased)
    }else if(this.state.sortBy === 'NameASC'){
      hogsToBeDisplay = currentHogsOnScreent.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }else if(this.state.sortBy === 'NameDESC'){
      hogsToBeDisplay = currentHogsOnScreent.sort((a, b) => (a.name < b.name) ? 1 : -1)
    }else if(this.state.sortBy === 'WeightASC'){
      hogsToBeDisplay = currentHogsOnScreent.sort((a, b) => (a.weight > b.weight) ? 1 : -1)
    }else if(this.state.sortBy === 'WeightDESC'){
      hogsToBeDisplay  = currentHogsOnScreent.sort((a, b) => (a.weight < b.weight) ? 1 : -1)
    }
    return hogsToBeDisplay.map((hog,index) =>{
      return <HogCard key = {index} {...hog}/>
    })

  }

  render(){
    console.log(this.state.hog_gifs)
    return (
      <div className="ui grid container">
        <Sorting handleChange={this.handleChange}/>
        {this.renderHogCards()}
      </div>
    )
  }

}



