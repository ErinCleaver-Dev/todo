import logo from './logo.svg';
import Footer from './components/links/Footer'
import AddTodo from './components/todos/AddTodo'
import VisibleTodoList from './components/todos/VisibleTodoList'
import {MainContainer} from './components/styles/style'

function App() {
  return (
    <MainContainer>
      <AddTodo />
      <VisibleTodoList/>
      <Footer />
    </MainContainer>
  );
}

export default App;
