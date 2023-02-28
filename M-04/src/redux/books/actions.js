import { BOOK_ADD, BOOK_DELETE, BOOK_Edit, BOOK_LODED } from "./actionTypes"

// BOOK_ADD
export const lodedBooks = (data) => {
    return {
        type : BOOK_LODED,
        payload : data
    }
}
// BOOK_ADD
export const added = (data) => {
    return {
        type : BOOK_ADD,
        payload : data
    }
}

// BOOK_EDIT
export const edited = ( id , data) => {
    return {
        type : BOOK_Edit,
        payload : {
            id : id,
            updateBook : data
            
        }
    }
}

// BOOK_DELETE
export const deleted = (id) => {
    return {
        type : BOOK_DELETE,
        payload : id
    }
}