// import logo from './logo.svg';
import './App.css';

import UserCard from './UserCard';

function App() {
  const user = {
    name: 'Rik Hamale',
    age: 200 + ' ' + 'Years old',
    height: 190 + ' ' +'CM',
  };

  // const handleProduct = () => {
  //   alert(products.title)
  // }

  return (
    <div className="App">
      {/* <Button text="Click Me"/>
      {/* <Button text="Subscribe"/>

      <Button2 text="Learn More" />
      <Button2 text="Discover More" />
      <Button2 text="Thats on G" /> */} 

      {/* <Card myProducts = {products} myClick={handleProduct}/> */}
      <UserCard myUser = {user}/>
    </div>
  );
}

export default App;
