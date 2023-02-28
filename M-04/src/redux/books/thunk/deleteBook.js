import { deleted } from "../actions";

const deleteBook = (bookId) => {
    return async (dispatch) => {
        const deleteData = await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "DELETE",
        });
        console.log(deleteData);
        dispatch(deleted(bookId));
    };
};

export default deleteBook;