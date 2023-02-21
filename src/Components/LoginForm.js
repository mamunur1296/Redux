import React, { useReducer } from "react";

const LoginForm = () => {
  const initiailValue = {
    firstName: "",
    lastName: "",
    email: "",
    phonNo: "",
    password: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "input":
        return {
          ...state,
          [action.paylode.name]: action.paylode.value,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initiailValue);
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h1>Pleass Login</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            onBlur={(e) =>
              dispatch({
                type: "input",
                paylode: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastName"
            onBlur={(e) =>
              dispatch({
                type: "input",
                paylode: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onBlur={(e) =>
              dispatch({
                type: "input",
                paylode: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="">Phon No:</label>
          <input
            type="number"
            name="phonNo"
            onBlur={(e) =>
              dispatch({
                type: "input",
                paylode: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="Password"
            name="password"
            onBlur={(e) =>
              dispatch({
                type: "input",
                paylode: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <button type="submit">submite</button>
      </form>
    </div>
  );
};

export default LoginForm;
