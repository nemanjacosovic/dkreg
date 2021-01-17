import React, {FunctionComponent} from 'react';
import { ISVGProps } from '../../interfaces/CommonInterfaces';

const IconExclamationCircle: FunctionComponent<ISVGProps> = (props) => {
    const {title, description, className, svgWidth, svgHeight} = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" className={className} style={{ width: svgWidth, height: svgHeight }}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 15 10 L 15 18 L 17 18 L 17 10 Z M 15 20 L 15 22 L 17 22 L 17 20 Z"/>
        </svg>
    );
}

export default IconExclamationCircle;
