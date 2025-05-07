/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 */


const parent = React.createElement('div',
    {
        id: 'parent'
    },
    React.createElement('div',
        { 
            id: 'child'
        },
        [
            React.createElement('h1', {}, 'Hello from h1 tag'),
            React.createElement('h2', {}, 'Hello from h2 tag')
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