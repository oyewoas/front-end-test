import React from 'react';

import './result.styles.scss'


const ResultPage = () => (
    <div className="result-page">
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center result">
                <h1 className="result-heading">Percentage similarity</h1>
                <hr/>
                <h1 className="result-percentage">70&#37;</h1>
                </div>
                <div className="col-md-3"></div>

            </div>
           
        </div>
    </div>
)

export default ResultPage