import { NextPage } from 'next';
import { IconContext } from 'react-icons';
import { TiStarburst } from 'react-icons/ti';

interface starInterface {
    size?: string;
}

const Star: NextPage<starInterface> = (props) => {
    return (
        <IconContext.Provider value={{ color: 'black', size: props.size }}>
            <div>
                <TiStarburst />
            </div>
        </IconContext.Provider>
    );
};

export default Star;
