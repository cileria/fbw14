export const getComments = () => async dispatch => {
    const result = await fetch('/comments');
    const obj = await result.json();

    dispatch({
        type: 'GET_COMMENTS',
        value: obj
    });
}

export const postComments = (data) => async dispatch => {
    const result = await fetch('/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const obj = await result.json();

    dispatch({
        type: 'POST_COMMENTS',
        value: obj
    });
}

export const deleteComment = (id) => async dispatch => {
    const result = await fetch('/comments/' + id, { method: 'DELETE' });
    const obj = await result.json();

    dispatch({
        type: 'DELETE_COMMENTS',
        value: id
    });
}