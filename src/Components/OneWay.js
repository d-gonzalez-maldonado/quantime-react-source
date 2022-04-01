import React from 'react'
import './OneWay.css';
// import './Form.css';


export class OneWay extends React.Component{

	get_rand_int = (n) => {return Math.floor(Math.random() * Math.floor(n));}
	primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631]
	pairs = [[31, 67], [17, 53], [67, 71], [53, 41], [43, 47], [67, 23], [61, 53], [71, 31], [53, 31], [71, 41], [29, 43], [23, 59], [59, 61], [37, 37], [37, 71], [41, 29], [29, 23], [31, 43], [43, 17], [59, 13], [17, 59], [41, 67], [23, 19], [19, 17], [47, 29], [13, 37]]


	start_trials() {
	    // start timer after button is clicked
	    this.interval = setInterval(() => {
	    	let new_time = this.state.curr_time - .05
	    	if(new_time > 0){
		      this.setState(prevState => ({
		        curr_time : new_time
		      }));
	    	} else{
				this.setState({
					finished : true,
				})
				clearInterval(this.interval)
	    	}
	    }, 50);
	    let nm = this.update_pairs(this.state.i)
	    this.setState({
	    	started: true,
	    	n: nm[0],
	    	m: nm[1]
	    })

	}


	update_pairs(i){
		let window_size = 4
		console.log(this.primes.length)
		let j = parseInt(i - Math.round(Math.random() * window_size)) % this.primes.length
		let k = parseInt(i - Math.round(Math.random() * window_size)) % this.primes.length
		let n = this.primes[j]
		let m = this.primes[k]
		return [n, m]
	}

	constructor(props) {
	    super(props);
	    this.max_n = this.props.max_n || 12
	    this.mult_trials = this.props.mult_trials || 5
	    this.factor_trials = this.props.factor_trials || 5
	    this.start_time = parseInt(this.props.time || 60)
	    this.state = {
	      correct: 0,
	      i : 4,
	      attempts:0,
	      started:false,
	      mult_mode: true,
	      curr_time: this.start_time,
	      n : 0,
	      m : 0,
	      user_value: "",
	      finished: false,
	      guesses: [],
	    };
	    this.update_pairs = this.update_pairs.bind(this);
	    this.start_trials = this.start_trials.bind(this);
        this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(event){
		if(this.props.mode === 'multiplication'){
			let new_i = this.state.i
			let new_mult_correct = this.state.correct
			if (parseInt(this.state.user_value) === this.state.m * this.state.n){
					// let new_times = [...this.state.mult_times]
					new_i += 3
					new_mult_correct += 1
				}
			else{
				new_i += 1
			}
			let mn = this.update_pairs(new_i)
			this.setState(prevState => ({
			      correct: new_mult_correct,
			      attempts: prevState.attempts + 1,
			      i: new_i,
			      n :mn[0],
			      m: mn[1],
			      user_value:"",
				}));
		} else if(this.props.mode === 'factoring'){
			let user_val = parseInt(this.state.user_value)
			const sort_fun = (a, b) => {return a - b}
			let new_i = this.state.i
			let new_fact_correct = this.state.correct
			let curr_guesses = []
			let curr_feedback = ""
			let mn = [this.state.n, this.state.m]
			if(this.state.m === user_val || this.state.n === user_val){
				new_i += 3
				new_fact_correct += 1
				mn = this.update_pairs(new_i)
			}else if(this.state.guesses.length < 3){
				curr_guesses = [...this.state.guesses, user_val]
				curr_feedback = (<h className='OneWay-header'>
					Not quite, try again!
					<br/>
					You have already tried: {curr_guesses.sort(sort_fun).join(', ')}
				</h>)
			}
			else{
				new_i += 1
				mn = this.update_pairs(new_i)

			}
			this.setState(prevState => ({
				i: new_i,
				correct: new_fact_correct,
			    attempts: prevState.attempts + 1,
				n: mn[0],
				m: mn[1],
		     	user_value:"",
		     	feedback:curr_feedback,
		     	guesses : curr_guesses
			}));
		} else if(this.props.mode === 'division'){
			let new_i = this.state.i
			let new_correct = this.state.correct
			if (parseInt(this.state.user_value) === this.state.m){
					// let new_times = [...this.state.mult_times]
					new_i += 3
					new_correct += 1
				}
			else{
				new_i += 1
			}
			let mn = this.update_pairs(new_i)
			this.setState(prevState => ({
			      correct: new_correct,
			      attempts: prevState.attempts + 1,
			      i: new_i,
			      n :mn[0],
			      m: mn[1],
			      user_value:"",
				}));
		}
		event.preventDefault();
	}

	handleChange(event){
		this.setState({user_value: event.target.value});
	}

	render(){
		let output
		let instructions
		if(this.props.mode === 'multiplication'){
			instructions = "You are about to see a multiplication problem, do your best to solve it as quickly as possible."
		}else if(this.props.mode === 'factoring'){
			instructions = "You are about to see a number, do your best to find a factor of that number as quickly as possible."
		}else if(this.props.mode === 'division'){
			instructions = "You are about to see a division problem, do your best to solve it as quickly as possible."
		}
		let feedback
		if (this.state.attempts > 0){
			feedback = (
				<div>
					{this.state.correct} correct out of {this.state.attempts}
				</div>
			)
		}

		if (this.state.finished){
			output = (
				<div className='OneWay'>
					<h className='OneWay-header'>
						<br/>
						In {this.start_time} seconds, you correctly solved {this.state.correct} out of {this.state.attempts} {this.props.mode} problems!
						<br/>
					</h>
				</div>

			)
		}
		else if (!this.state.started) {
			output = (
				<div className='OneWay'>
					<h className='OneWay-header'>
						{instructions}
					</h>
					<br/>
					<br/>
					<h className='OneWay-header'>
						Ready?
					</h>
					<br/>
					<br/>
			        <button className='OneWay-button' onClick={this.start_trials}>
			            Start!
			        </button>
				</div>
			)
		}
		else if(this.props.mode === 'multiplication'){

			output = (
				<div className='OneWay'>
					<h className='OneWay-header'>
						Time: {this.state.curr_time.toFixed(0)}
					</h>
					<h className='OneWay-mult'>
						{this.state.m} x {this.state.n}
					</h>
					<br/>
					<form id="form" onSubmit={this.handleSubmit}>
						<input id="name" type="text" placeholder="Answer" value={this.state.user_value} onChange={this.handleChange}/>
						<input id="submit" type="submit" value="Submit"/>
					</form>
					{feedback}
				</div>
			)
		} else if(this.props.mode === 'factoring'){
			output = (
				<div className='OneWay'>
					<h className='OneWay-header'>
						Time: {this.state.curr_time.toFixed(0)}
					</h>
					<h className='OneWay-mult'>
						Name a factor of: {this.state.n * this.state.m}
					</h>
					<br/>
					<form id="form" onSubmit={this.handleSubmit}>
						<input id="name" type="text" placeholder="Answer" value={this.state.user_value} onChange={this.handleChange}/>
						<input id="submit" type="submit" value="Submit"/>
					</form>
					{feedback}
				</div>
			)
		} else if(this.props.mode === 'division'){
			output = (
				<div className='OneWay'>
					<h className='OneWay-header'>
						Time: {this.state.curr_time.toFixed(0)}
					</h>
					<h className='OneWay-mult'>
						{this.state.n * this.state.m} / {this.state.n}
					</h>
					<br/>
					<form id="form" onSubmit={this.handleSubmit}>
						<input id="name" type="text" placeholder="Answer" value={this.state.user_value} onChange={this.handleChange}/>
						<input id="submit" type="submit" value="Submit"/>
					</form>
					{feedback}
				</div>
			)
		}
		return output	
	}

}

OneWay.defaultProps = {
  mult_trial:4
}

export default OneWay;