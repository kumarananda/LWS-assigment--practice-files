import initialState from "./initialState";
import { BOOK_ADD, BOOK_DELETE, BOOK_Edit, BOOK_LODED } from '../books/actionTypes'


const nextBookId = (books) => {
    const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
    return maxId + 1;
};

// create reucer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_LODED :
            return [
                ...action.payload,
                
            ]
        case BOOK_ADD :
            return [
                ...state, 
                {
                    id : nextBookId(state),
                    ...action.payload
                }                
            ]
        case BOOK_Edit :
            return [
                ...state,
                
            ]
        case BOOK_DELETE :
            return [
                ...state,
                
            ]
        default:
            return state;
    }
}

export default reducer ;