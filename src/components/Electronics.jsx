import { Link } from 'react-router-dom';

function Electronics() {
  return (
    <div>
      Electronics page.
      <Link to='/'>Click me to go back home!</Link>
    </div>
  );
}

export default Electronics;