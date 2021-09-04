import {connect} from 'react-redux';
import {addTodo} from '../../actions/actions'
import {Button, StyledInput} from '../styles/style'

const AddTodo = ({dispatch}) => {
    let input 

    return (
        <div>
            <form onSubmit={e=> {
                e.preventDefault();
                if(!input.value.trim())  {
                    console.log("testing if null")
                    return;
                }
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                <StyledInput ref={node => input = node} />
                <Button type="submit">
                    Add Todo
                </Button>
            </form>
        </div>
    )
}

export default connect () (AddTodo)