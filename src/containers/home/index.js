import React from 'react';
import {  Redirect } from 'react-router'

export default  () => {
    return (
        <div>
            <Redirect to="/plan/list"/>
        </div>
    )
}