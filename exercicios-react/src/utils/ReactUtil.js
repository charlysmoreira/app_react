import React from 'react';

export function filhosProps(props){
    return React.Children.map(props.children, comp => {
        return React.cloneElement(comp, { ...props })
    })
}