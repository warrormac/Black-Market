import React from 'react';

import './admin-panel-title.styles.scss';

class AdminPanelTitle extends React.Component{
    
    render(){
        return(
            <div className='admin-panel-title'>
                {this.props.title}
            </div>
        )
    }
}

export default AdminPanelTitle;