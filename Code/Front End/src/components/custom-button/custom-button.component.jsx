import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
    inverted,
    children,
    greenButton,
    menuButton,
    redButton,
    greyButton,
    ...otherProps
}) => (
        <button className={` 
            ${inverted? 'inverted':''} 
            ${greenButton? 'green-button': ''} 
            ${menuButton? 'menu-button': ''}
            ${redButton? 'red-button': ''}
            ${greyButton? 'grey-button': ''}
            `}
        {...otherProps}>
            {children}
        </button>
);

export default CustomButton;