// Get elements
const allMatches = document.querySelector('.all-matches');
const addNewMatch =document.querySelector('.lws-addMatch');
const reset =document.querySelector('.lws-reset');

// action types
const ADD_MATCH = "ADD_MATCH";
const DELETE_MATCH = "DELETE_MATCH";
const RESET_ALL_MATCHS = "RESET_ALL_MATCHS";
const INCREMENT_MATCH = "INCREMENT_MATCH";
const DECREMENT_MATCH = "DECREMENT_MATCH";

// initial state
const initialState = {
  matchs:[{id:0,value:0}]
}

// create reducer function
function matchReducer(state = initialState, {type, payload}){
  switch (type) {
    case ADD_MATCH:
      return {
        ...state,
        matchs: [...state.matchs, {id: state.matchs.length ? state.matchs[state.matchs.length-1].id +1 : 0, value: 0}]
      }
    case DELETE_MATCH:
      return {
        ...state,
        matchs: state.matchs.filter((match)=> match.id !== payload)
      }
    case RESET_ALL_MATCHS:
      return {
        ...state,
        matchs : state.matchs.map((match) => {
          return {...match, value : 0 }
        })
      }
    case INCREMENT_MATCH:
      console.log(payload);
      return {
        ...state,
        matchs: state.matchs.map((match)=> 
          match.id === payload.id ? {...match, value: match.value + payload.value} : {...match}
        ) 
      }
    case DECREMENT_MATCH:
      return {
        ...state,
        matchs: state.matchs.map((match)=> 
          match.id === payload.id ? {...match, 
            value: match.value - payload.value >= 0? 
              match.value - payload.value : 0
            } 
            : 
            {...match}
        ) 
      }
  
    default:
      return state
  }

}

// create redux store
const store = Redux.createStore(matchReducer)

// redux actions
// add new match
const add_match = () => {
  store.dispatch({
    type : ADD_MATCH
  })
}
// delete single match
const delete_match = (id) => {
  store.dispatch({
    type : DELETE_MATCH,
    payload : id
  })
}
// reset all match value
const reset_all_matchs = () => {
  store.dispatch({
    type: RESET_ALL_MATCHS
  })
}
// increment match value
const increment_match = (matchID, value) => {
  store.dispatch({
    type : INCREMENT_MATCH,
    payload : { id : matchID,
      value : value
    }
  })
}
// decrement match value
const decrement_match = (matchID, value) => {
  store.dispatch({
    type : DECREMENT_MATCH,
    payload : { id : matchID,
      value : value
    }
  })
}

// rander for state change
const rander =()=> {
  const state = store.getState()
  console.log(state);
  allMatches.innerHTML = allMatch(state.matchs) // ?
}

// initial rander
rander()

// subscribe redux store
store.subscribe(rander)


// increment and increment match value
allMatches.addEventListener('submit', (e) => {
  e.preventDefault()
  let input = e.target.querySelector('input');
  let id = input.getAttribute('data_id');

  if(input.name === "increment"){
    increment_match( +id, +input.value)
  }else if(input.name === "decrement"){
    decrement_match( +id, +input.value)
  }

})


// add match event
addNewMatch.addEventListener('click', ()=> {
  add_match()
})

// delete match event
const singleMatchDelete = (id) => {
  delete_match(id)
}

// reset match event
reset.addEventListener('click', ()=> {
  reset_all_matchs()
})

// create all match HTML element
function allMatch(array) {

  let matchHTML = "";

  array.forEach((item=> {
    matchHTML += `
      <div class="match">
        <div class="wrapper">
          <button onclick="singleMatchDelete(${item.id})" class="lws-delete">
            <img src="./image/delete.svg" alt="" />
          </button>
          <h3 class="lws-matchName">Match ${item.id+1}</h3>
        </div>
        <div class="inc-dec">
          <form class="incrementForm">
            <h4>Increment</h4>
            <input data_id="${item.id}" type="number" name="increment" class="lws-increment"  />
          </form>
          <form class="decrementForm">
            <h4>Decrement</h4>
            <input data_id="${item.id}" type="number" name="decrement" class="lws-decrement"  />
          </form>
        </div>
        <div class="numbers">
          <h2 class="lws-singleResult">${item.value}</h2>
        </div>
      </div>
    `
  }))

  return matchHTML    

}


