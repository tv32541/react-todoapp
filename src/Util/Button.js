import React from 'react'

export default function Button(props) {
    return (
        <button id={props.id} name={props.name} onClick={props.onClick} className={props.className}>{props.children}</button>
    )
}
