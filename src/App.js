import ProductList from './components/ProductList';
import styled from 'styled-components';

function App() {

  const PageTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap');
  font-family: 'Cinzel', serif;
  font-size: 2.5rem;
  margin: 10px 0 20px;
  text-align: center;
  border-bottom: 3px solid grey;
  padding-bottom: 15px;

  @media screen and (max-width: 350px) {
    font-size: 2rem;
  }
`;

  return (
    <div className="App">
      <PageTitle>PRODUCT LIST</PageTitle>
      <ProductList />
    </div>
  );
}

export default App;
