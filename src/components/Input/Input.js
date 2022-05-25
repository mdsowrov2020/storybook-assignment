import React from "react";
import PropTypes from 'prop-types'
import { addDecorator, addParameters } from "@storybook/react";
import { Store, withState } from "@sambego/storybook-state";

import './Input.css'

const store = new Store({
    value: "Md Sowrov",
    onValueChange: (val) => {
        store.set({ value: val})
    }
})



function Input({ placeholder = '', name = '', value = '', onValueChange }) {
    const handleChangeInput = (e) => {
        e.preventDefault();
        onValueChange(e.target.value)
    }

    return <input
    className="input-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChangeInput}
    />
}

Input.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onValueChange: PropTypes.func,
}

addDecorator(withState());
addParameters({
  state: {
    store
  }
});

export default Input