import React from 'react';

function Shimmer() {
    return (
        <>
            <div className="outer-card">
                <div className="inner-card">
                    {/* /<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '25px' }}> */}
                    <div className='shimmer-card'></div>
                    <div className='shimmer-card'></div>
                    <div className='shimmer-card'></div>
                    <div className='shimmer-card'></div>
                    <div className='shimmer-card'></div>
                    <div className='shimmer-card'></div>
                    <div className='shimmer-card'></div>
                    <div className='shimmer-card'></div>

                    {/* <div style={{ display: 'flex', direction: 'column' }} >
                    <div className="image-ctn"></div>
                    <h5 style={{ width: '60%', backgroundColor: '#dcdcdc', borderRadius: '2px' }}></h5>
                    <h5 style={{ width: '100%', backgroundColor: '#dcdcdc', borderRadius: '2px' }}></h5>
                    <h5 style={{ width: '100%', height: '47px', backgroundColor: '#dcdcdc', borderRadius: '2px' }}></h5>
                    <h5 style={{ width: '100%', backgroundColor: '#dcdcdc', borderRadius: '2px' }}></h5>
                </div> */}
                    {/* </div> */}
                </div>
            </div>


        </>
    )
}

export default Shimmer;