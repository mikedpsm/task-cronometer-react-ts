import React from 'react';
import style from './Button.module.scss';

export default class Button extends React.Component<{ type?: "button" | "submit" | "reset" | undefined, children?: string}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.button}>
        {this.props.children}
      </button>
    )
  }
}
