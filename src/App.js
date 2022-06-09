import "./App.css";
import { add, sub, mul, Add, Mult, Sub, Div } from "./store/action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./store/Style.module.css";
import { useRef } from "react";

function App() {
  // const [count,setCount]=useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const ref = useRef();

  const mytodo = () => {
    let value = ref.current.value;
    return value;
  };

  return (
    <div className="App">
      <h1>Value:{count}</h1>
      <div>
        <button onClick={() => dispatch(add())}>+</button>
        <button onClick={() => dispatch(sub())}>-</button>
        <button onClick={() => dispatch(mul())}>*</button>
      </div>

      <div className={styles.box}>
        <input
          type="number"
          ref={ref}
          className={styles.input}
          placeholder="X"
        />

        <div className={styles.leftbox}>
          <div className={styles.minitop}>
            <button
              className={styles.btns}
              onClick={() => dispatch(Add(mytodo()))}
            >
              Add
            </button>
            <button
              className={styles.btns}
              onClick={() => dispatch(Mult(mytodo()))}
            >
              multiply
            </button>
            =
          </div>
          <div className={styles.minibottom}>
            <button
              className={styles.btns}
              onClick={() => dispatch(Sub(mytodo()))}
            >
              subtract
            </button>
            <button
              className={styles.btns}
              onClick={() => dispatch(Div(mytodo()))}
            >
              divide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
