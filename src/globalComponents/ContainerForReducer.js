import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CardRequest } from '../../requests/apiCards';

const ContainerForReducer = ({dispatchCardsToState}) => {

    useEffect(() => {
        const fetch = async () => {
            const response = await CardRequest.getCards();
            dispatchCardsToState(response);
        }
        fetch()
    }, [])

    return (
        <>
        </>
    )

} 

const mapDispatchToProps =  dispatch =>{
    return {
        dispatchCardsToState: (cards) => dispatch({type: 'ADD_TO_LIST', payload: cards})
    }
}
export default connect(null, mapDispatchToProps)(ContainerForReducer);