import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initialState = [
	"Smells like teen spirit",
	"Enter Sandman"
	];

function playlist(state = initialState, action){
	if (action.type === 'ADD_TRACK'){
		return [
		...state,
		action.payload
		]
	}
	return state;
}

const store = createStore(playlist);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

///////////////////////////////////////////////

// import { createStore } from 'redux';




// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];

// store.subscribe(()=>{

// 	list.innerHTML = '';
// 	trackInput.value = '';
// 	store.getState().forEach(track => {
// 		const li = document.createElement('li');
// 		li.textContent = track;
// 		list.appendChild(li);
// 	})

// })

// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// addTrackBtn.addEventListener('click', ()=>{
// 	const trackName = trackInput.value;
// 	store.dispatch({type: "ADD_TRACK", payload: trackName});
// })

