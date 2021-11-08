interface DownArrowInterface {
    size: string;
    color: string;
}

const DownArrow = ({ color, size }: DownArrowInterface) => {
    return (
        <svg
            version="1.1"
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 49.33 36.36"
            style={{ fill: color, width: size }}
            xmlSpace="preserve"
            fill="white"
        >
            <g id="Layer_1"></g>
            <path
                d="M27.56,34.88c-1.43,1.97-4.37,1.97-5.79,0L10.63,19.44L0.68,5.66C-1.02,3.3,0.66,0,3.58,0h21.09h21.09
	c2.91,0,4.6,3.3,2.9,5.66L38.7,19.44L27.56,34.88z"
            />
        </svg>
    );
};

export default DownArrow;
