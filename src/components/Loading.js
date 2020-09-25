import React from 'react';
import '../css/Loading.css';

const Loading = () => {
    return (
        <div className='brick-load'>

            <div className="brld-wrp">
                <div className="brld">
                    <div className="brld__brick brld__brick__1"></div>
                    <div className="brld__brick brld__brick__2"></div>
                    <div className="brld__brick brld__brick__3"></div>
                    <div className="brld__brick brld__brick__4"></div>
                    <div className="brld__brick brld__brick__5"></div>
                    <div className="brld__brick brld__brick__6"></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;