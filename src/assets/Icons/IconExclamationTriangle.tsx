import React, {FunctionComponent} from 'react';
import { ISVGProps } from '../../interfaces/CommonInterfaces';

const IconExclamationTriangle: FunctionComponent<ISVGProps> = (props) => {
    const {title, description, className, svgWidth, svgHeight} = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" className={className} style={{ width: svgWidth, height: svgHeight }}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path d="M 16 3.21875 L 15.125 4.71875 L 3.125 25.5 L 2.28125 27 L 29.71875 27 L 28.875 25.5 L 16.875 4.71875 Z M 16 7.21875 L 26.25 25 L 5.75 25 Z M 15 14 L 15 20 L 17 20 L 17 14 Z M 15 21 L 15 23 L 17 23 L 17 21 Z"/>
        </svg>
    );
}

export default IconExclamationTriangle;
