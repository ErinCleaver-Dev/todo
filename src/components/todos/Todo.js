import PropTypes from 'prop-types';
import {Item} from '../styles/style'


const Todo = ({ onClick, completed, text}) => (
    <Item 
    onClick={onClick}
    style={
        {backgroundColor: completed ? 
            '#76b9ce' : '#416875'}
    }
    >{text} 
    </Item>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export default Todo