//State argument is not application state, only the state
// this reducer is responsible for, its an integer which can
// be used to count the number of times it was called

export default function (state = null, action) {
    switch (action.type) {
    case 'BOOK_SELECTED' :
        return action.payload;
    }

    return state;
}