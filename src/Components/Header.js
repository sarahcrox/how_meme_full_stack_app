import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state={

        };
    }

    render(){
    return(
        <div className='nav-bar'>
            <div onClick={() => this.props.history.push('/')} className='logo'>
                HowMeme
            </div>
            <div className='nav-bar-links'>
                <Link to='/products'>Product</Link>
                <Link to='/wall'>Wall of Memes</Link>
                <Link to='/favorites'>Favorites</Link>
                <Link to='/contact-us'>Contact Us</Link>
            </div>
        </div>
    )}
}