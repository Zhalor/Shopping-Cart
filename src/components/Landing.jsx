function Landing(props) {
  return (
    <div className="landing">
      <p>This is the landing page. Click "Shop" In the top right corner to go to ther shop.</p>
      <button onClick={() => props.setCount(props.count + 1)}>Click to increment</button>
      <button onClick={() => props.setCount(props.count - 1)}>Click to decrement</button>
    </div>
  );
}

export default Landing;