import React from 'react'
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {

  constructor(props) {
    super(props);

    // console.log('Parent constructor');
  }

  componentDidMount() {
    // console.log('Parent component mount');
  }

  render() {
    // console.log('Parent render');
    return (
      <div className='outer-card' style={{ marginTop: '10px' }}>
        {/* <User name={'Chaitali Shinde'} location={'Pune'} /> */}
        <UserClass name={'First'} location={'Pune'} />
        {/* <UserClass name={'Second'} location={'Mumbai'} /> */}
      </div>
    )
  }
}

export default About;