/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div',
    {
        id: 'parent',
    },
    React.createElement('div',
        { 
            id: 'child'
        },
        [
            React.createElement('h1', { key: 0}, 'Hello from react 🚀 ᓚᘏᗢ 🐈'),
            React.createElement('h2', { key: 1}, 'Hello from react 😊 (❁´◡`❁)'),
            React.createElement('h3', {key:2}, 'Hello from react 🌷 (•_•)')
        ]
    )
);

const heading = React?.createElement('h1',
    {
        id: "hello",
        abc: "hello",
        class: "abc"
    },
    'Hello world from react');

console.log(parent);

const root = ReactDOM?.createRoot(document.getElementById('root'));
root.render(parent);