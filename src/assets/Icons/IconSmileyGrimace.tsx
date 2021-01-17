import React, {FunctionComponent} from 'react';

interface ISVGProps {
    title?: string;
    description?: string;
    className?: string;
    svgWidth?: string;
    svgHeight?: string;
}

const IconSmileyGrimace: FunctionComponent<ISVGProps> = (props) => {
    const {title, description, className, svgWidth, svgHeight} = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" className={className} style={{ width: svgWidth, height: svgHeight }}>
            <title>{title}</title>
            <desc>{description}</desc>
            <path d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 9.935 27 5 22.065 5 16 C 5 9.935 9.935 5 16 5 z M 11.5 12 A 1.5 1.5 0 0 0 11.5 15 A 1.5 1.5 0 0 0 11.5 12 z M 20.5 12 A 1.5 1.5 0 0 0 20.5 15 A 1.5 1.5 0 0 0 20.5 12 z M 12 17 C 10.346 17 9 18.346 9 20 C 9 21.654 10.346 23 12 23 L 20 23 C 21.654 23 23 21.654 23 20 C 23 18.346 21.654 17 20 17 L 12 17 z M 12 19 L 13 19 L 13 21 L 12 21 C 11.448 21 11 20.552 11 20 C 11 19.448 11.448 19 12 19 z M 15 19 L 17 19 L 17 21 L 15 21 L 15 19 z M 19 19 L 20 19 C 20.552 19 21 19.448 21 20 C 21 20.552 20.552 21 20 21 L 19 21 L 19 19 z"/>
        </svg>
    );
}

export default IconSmileyGrimace;
