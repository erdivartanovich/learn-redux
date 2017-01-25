import {connect} from 'react-redux'
import AddTodo from '../components/AddTodo';
import {addTodo, toggleTodo, updateText, setVisibilityFilter, VisibilityFilters} from '../actions'

const mapStateToProps = (state) => {
    return {todoText: state.todoText}
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text));
        },
        updateText: (text) => {
            dispatch(updateText(text));
        }
    }
}
const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodoContainer
