export const genericAction = (body, TYPE, actionApi) => async dispatch => {
    dispatch({ type: `${TYPE}_LOADING` });
    try {
        const data = await actionApi(body);
        console.log(resultText);
        dispatch({
            type: `${TYPE}_SUCCESS`,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: `${TYPE}_FAILURE`,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};