// Get elements
const allMatches = document.querySelector('.all-matches')
const addMatch =document.querySelector('.lws-addMatch')
const reset =document.querySelector('.lws-reset')

// initial state
const initialState = {
  matchs:[{id:0,value:0}]
}

// create reducer function
function matchReducer(state = initialState, {type, payload}){
  switch (type) {
    case 'add-match':
      return {
        ...state,
        matchs: [...state.matchs, {id: state.matchs[state.matchs.length-1].id +1, value: 0}]
      }
    case 'delete-match':
      return {
        ...state,
        matchs: state.matchs.filter((match)=> match.id !== payload)
      }
    case 'reset':
      return {
        ...state,
        matchs : state.matchs.map((match) => {
          return {...match, value : 0 }
        })
      }
    case 'increment':
      console.log(payload);
      return {
        ...state,
        matchs: state.matchs.map((match)=> 
          match.id === payload.id ? {...match, value: match.value + payload.value} : {...match}
        ) 
      }
    case 'decrement':
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

// rander for state change
const rander =()=> {
  const state = store.getState()
  console.log(state);
  allMatches.innerHTML = allMatch(state.matchs) // ?
}
rander()
// subscribe redux store
store.subscribe(rander)


// increment and increment match value
function matchValueCount(ele, id ) {
  if(event.keyCode == 13) {
    event.preventDefault()

    console.log(ele.value);
    store.dispatch({
      type : ele.name,
      payload : { id,
        value : +ele.value
      }
    })      
  }
}

// add match
addMatch.addEventListener('click', ()=> {
  store.dispatch({
    type : 'add-match'
  })
})

// reset match 
reset.addEventListener('click', ()=> {
  store.dispatch({
    type: 'reset'
  })
})

// delete match
const singleMatchDelete = (id) => {
  store.dispatch({
    type : "delete-match",
    payload: id
  })
}

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
            <input type="number" name="increment" class="lws-increment" onkeydown="matchValueCount(this, ${item.id})" />
          </form>
          <form class="decrementForm">
            <h4>Decrement</h4>
            <input type="number" name="decrement" class="lws-decrement" onkeydown="matchValueCount(this, ${item.id})" />
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


