const testArray = [{id:1, name: 'match 1'},{id:2, name: "match 2"}]

// // get elements
// const lwsDelete = document.querySelector('.lws-delete')
// const lwsMatchName = document.querySelector('.lws-matchName')
// const lwsIncrement = document.querySelector('.lws-increment')
// const lwsDecrement = document.querySelector('.lws-decrement')
// const lwsSingleResult = document.querySelector('.lws-singleResult')
const allMatches = document.querySelector('.all-matches')

const testAlert = (index)=> {
  alert(index)
}








function allMatch() {
  allMatches;
  let matchHTML = "";

  testArray.map((item, index)=> {
    matchHTML += `
      <div class="match">
        <div class="wrapper">
          <button onclick="testAlert($)"  class="lws-delete">
            <img src="./image/delete.svg" alt="" />
          </button>
          <h3 class="lws-matchName">${"Match " + (index+1 )}</h3>
        </div>
        <div class="inc-dec">
          <form class="incrementForm">
            <h4>Increment</h4>
            <input type="number" name="increment" class="lws-increment" />
          </form>
          <form class="decrementForm">
            <h4>Decrement</h4>
            <input type="number" name="decrement" class="lws-decrement" />
          </form>
        </div>
        <div class="numbers">
          <h2 class="lws-singleResult">120</h2>
        </div>
      </div>
    `
  })
  allMatches.innerHTML = matchHTML    

}
allMatch()
