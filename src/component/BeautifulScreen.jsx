import '../css/BeautifulScreen.css';
import React, { useState } from 'react';

function BeautifulScreen(props) {

    return <div className="ecran">{props.result}</div>

}

export default BeautifulScreen;