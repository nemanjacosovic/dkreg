import React, {FunctionComponent} from 'react';
import { ISVGProps } from '../../interfaces/CommonInterfaces';

const IconTimes: FunctionComponent<ISVGProps> = (props) => {
    const {title, description, className, svgWidth, svgHeight} = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" className={className} style={{ width: svgWidth, height: svgHeight }}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/>
        </svg>
    );
}

export default IconTimes;
