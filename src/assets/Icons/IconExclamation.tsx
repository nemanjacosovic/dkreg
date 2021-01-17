import React, {FunctionComponent} from 'react';
import { ISVGProps } from '../../interfaces/CommonInterfaces';

const IconExclamation: FunctionComponent<ISVGProps> = (props) => {
    const {title, description, className, svgWidth, svgHeight} = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" className={className} style={{ width: svgWidth, height: svgHeight }}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path d="M 13 4 L 13 20 L 19 20 L 19 4 Z M 15 6 L 17 6 L 17 18 L 15 18 Z M 13 22 L 13 28 L 19 28 L 19 22 Z M 15 24 L 17 24 L 17 26 L 15 26 Z"/>
        </svg>
    );
}

export default IconExclamation;
