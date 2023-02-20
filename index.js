const allMatches = document.querySelector('.all-matches')

// initial state
const initialState = {
  matchcount:[0,2]
}

// create reducer function
function matchReducer(state = initialState, {type, value, index}){
  if(type === 'increment'){

    return {
      ...state,
      matchcount : ''


    }
  }else if(type === 'decrement'){

    return {
      ...state,
      matchcount : ''

    }
  }else {
    return state
  }
}

// create redux store
const store = Redux.createStore(matchReducer)
const rander =()=> {
  const state = store.getState()
  console.log(state);
  allMatches.innerHTML = allMatch(state.matchcount) // ?
}

rander()

store.subscribe(rander)


const testArray = [{id:1, name: 'match 1'},{id:2, name: "match 2"}]



function search(ele, index) {
  if(event.keyCode == 13) {
    event.preventDefault()

    store.dispatch({
      type : ele.name,
      payload : {
        index: index,
        value : Number(ele.value)
      }
    })
    // console.log(index);

    // if(ele.name === 'increment'){

    // }else if(ele.name === 'decrement'){

    // }
    
       
  }
}





function allMatch(array) {

  let matchHTML = "";
  array.forEach(element => {
    
  });

  array.forEach((item, index)=> {

    matchHTML += `
    <div class="match">
          <div class="wrapper">
            <button class="lws-delete">
              <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">Match 1</h3>
          </div>
          <div class="inc-dec">
            <form class="incrementForm">
              <h4>Increment</h4>
              <input type="number" name="increment" class="lws-increment" onkeydown="search(this, ${index})" />
            </form>
            <form class="decrementForm">
              <h4>Decrement</h4>
              <input type="number" name="decrement" class="lws-decrement" onkeydown="search(this, ${index})" />
            </form>
          </div>
          <div class="numbers">
            <h2 class="lws-singleResult">${item}</h2>
          </div>
        </div>

    `
  })
  return matchHTML    

}
// allMatch()





// // get elements
// const lwsDelete = document.querySelector('.lws-delete')
// const lwsMatchName = document.querySelector('.lws-matchName')
// const lwsIncrement = document.querySelector('.lws-increment')
// const lwsDecrement = document.querySelector('.lws-decrement')
// const lwsSingleResult = document.querySelector('.lws-singleResult')