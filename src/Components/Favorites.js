import React, { Component } from "react";
import {connect} from 'react-redux'
import Meme from "./Meme";

class Favorites extends Component {
	constructor(props){
		super(props)
		this.state={

		}
	}
	render() {
		return (
			<div className="meme-dashboard">
				<div className="memes-container">
					{this.props.favorites.map(element => {
						return (
							<Meme
								key={element.id}
                                memeInfo={element}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		favorites: state.reducer.favorites
	};
}

export default connect(mapStateToProps)(Favorites);
