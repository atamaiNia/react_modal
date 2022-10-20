import { Component } from 'react';
import Modal from './Modal';
import { OpenModalBtn, Title, Text, CloseModalBtn } from './App.styled';

class App extends Component {
  state = {
    showModal: true,
  };

  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.todos !== prevState.todos) {
      console.log('Обновилося поле todos, записую todos в сховище');

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    const { toggleModal } = this;
    return (
      <div>
        <OpenModalBtn type="button" onClick={toggleModal}>
          Open Modal
        </OpenModalBtn>
        {showModal && (
          <Modal>
            <Title>Title</Title>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              minima debitis quas voluptates nulla aliquid nobis, nisi facilis
              necessitatibus consectetur enim quisquam animi recusandae tempore
              dicta omnis molestias est eligendi obcaecati aut accusantium
              delectus ex velit ad? Eaque, sed, repellendus voluptatibus tempore
              corrupti omnis placeat iusto a ratione tenetur ipsum incidunt.
              Perferendis consectetur repellendus laudantium libero. Minima
              omnis recusandae maiores possimus corrupti maxime veritatis sunt.
            </Text>
            <CloseModalBtn type="button" onClick={toggleModal}>
              Close Modal
            </CloseModalBtn>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
