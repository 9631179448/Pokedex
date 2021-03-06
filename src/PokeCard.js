import React , {Component} from 'react';
import './PokeCard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let PadToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

class PokeCard extends Component {
    render(){
    	let imgSrc = `${POKE_API}${PadToThree( this.props.id ) }.png`;
        return(
            <div className="PokeCard">
            <h1 className='PokeCard-title'>{this.props.name}</h1>
            <img src = {  imgSrc } alt = {  this.props.name } />
            <div className='PokeCard-data'>Type: {this.props.type}</div>
            <div className='PokeCard-data'>EXP: {this.props.exp}</div>
            </div>
        )
    }
}

export default PokeCard;