import React, {FunctionComponent} from 'react';
import { ISVGProps } from '../../interfaces/CommonInterfaces';

const IconAmbulance: FunctionComponent<ISVGProps> = (props) => {
    const {title, description, className, svgWidth, svgHeight} = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" className={className} style={{ width: svgWidth, height: svgHeight }}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path d="M 18 3 C 16.894531 3 16 3.894531 16 5 L 16 6 L 1 6 L 1 25 L 4.15625 25 C 4.601563 26.71875 6.148438 28 8 28 C 9.851563 28 11.398438 26.71875 11.84375 25 L 20.15625 25 C 20.601563 26.71875 22.148438 28 24 28 C 25.851563 28 27.398438 26.71875 27.84375 25 L 31 25 L 31 13.625 L 30.75 13.34375 L 24.75 6.34375 L 24.46875 6 L 20 6 L 20 5 C 20 3.894531 19.105469 3 18 3 Z M 3 8 L 23.53125 8 L 29 14.375 L 29 23 L 27.84375 23 C 27.398438 21.28125 25.851563 20 24 20 C 22.148438 20 20.601563 21.28125 20.15625 23 L 11.84375 23 C 11.398438 21.28125 9.851563 20 8 20 C 6.148438 20 4.601563 21.28125 4.15625 23 L 3 23 Z M 14 11 L 14 14 L 11 14 L 11 16 L 14 16 L 14 19 L 16 19 L 16 16 L 19 16 L 19 14 L 16 14 L 16 11 Z M 8 22 C 9.117188 22 10 22.882813 10 24 C 10 25.117188 9.117188 26 8 26 C 6.882813 26 6 25.117188 6 24 C 6 22.882813 6.882813 22 8 22 Z M 24 22 C 25.117188 22 26 22.882813 26 24 C 26 25.117188 25.117188 26 24 26 C 22.882813 26 22 25.117188 22 24 C 22 22.882813 22.882813 22 24 22 Z"/>
        </svg>
    );
}

export default IconAmbulance;
