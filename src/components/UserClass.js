import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Chaitali",
                location: "Pune"
            },
            count: 0,
            count2: 1
        }



        console.log(`Constructor`);
    }

    async componentDidMount() {
        console.log(`Component did mount`);

        //Api call

        const data = await fetch('https://api.github.com/users/Chaitali1125'); //https://api.github.com/users/akshaymarch7
        const json = await data.json();

        // 2. Update cycle
        this.setState({
            userInfo: json
        })

        //If 
        this.timer = setTimeout(() => {
            console.log("Activity is started");
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Did update');

        // First useEffect which has count in dependencies array
        if (this.state.count !== prevState.count) {
            //code
            console.log(this.state.count, prevState.count)
        }

        // Second useEffect which has count2 in dependencies array
        if (this.state.count2 !== prevState.count2) {
            //code
            console.log(this.state.count2, prevState.count2)
        }
    }

    componentWillUnmount() {
        console.log('Will unmount');

        clearInterval(this.timer);
    }

    render() {
        console.log('Render');
        const { name, location, blog } = this.state.userInfo;

        // 3. When setState is called react triggers the render cycle(DOM update) once again after state update with new value
        // 1. Mounting cycle with dummy data
        return (
            <div className='user-card'>
                <h4>Classbased</h4>
                {/* <h5>Count: {count}</h5>
                <button onClick={() => {
                    //Never update state variables directly
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Increase</button> */}
                <h5>Name: {name}</h5>
                <h5>Location: {location}</h5>
                <h5>Website: {blog}</h5>
            </div>
        )
    }
}

export default UserClass;