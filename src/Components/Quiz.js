import React from 'react'
import './Quiz.css'

export class Quiz extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			user_value : "",
			attempts : 0
		}

        this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		if(!this.props.correct){
			this.setState({user_value: event.target.value});
		}
	}

	handleSubmit(event){
		event.preventDefault();
		this.setState(prevState => ({
			attempts : prevState.attempts + 1
		}));
		this.props.callback(this.state.user_value)
	}

	render(){

		let feedback
		if(this.props.correct){
			feedback = (<p className="quiz-correct"> Correct! </p>)
		}
		else if (this.state.attempts > 0){

			feedback = (<p className="quiz-incorrect"> Not quite, try again! </p>)
		}
		// if(this.props.correct)

		console.log(this.props.ref)

		return(
			<div>
				<h1 className="quiz"> Knowledge Check </h1>
				{this.props.question}
				<br/>
				<form className="quiz" onSubmit={this.handleSubmit}>
					<input readonly className="quiz" type="text" placeholder="Answer" value={this.state.user_value} onChange={this.handleChange}/>
					<input className="quiz" type="submit" value="Submit"/>
				</form>
				{feedback}
			</div>
		)
	}
}
export default Quiz;