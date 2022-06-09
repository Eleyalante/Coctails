import  React from 'react';


export default class NoData extends  React.Component{


    render() {
        return <div    style={{
            position: 'absolute',
            left: '50%',
            textAlign:'center',
            fontWeight:'bold',
            fontSize:'20px',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            THERE ARE NOT ITEMS YET
        </div>
    }
}