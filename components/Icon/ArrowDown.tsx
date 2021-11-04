import { NextPage } from 'next';
import { IconContext } from 'react-icons';
import { RiArrowDownSFill } from 'react-icons/ri';

const ArrowDown: NextPage = () => {
    return (
        <IconContext.Provider value={{ color: '#fa9a11', size: '7rem' }}>
            <div>
                <RiArrowDownSFill />
            </div>
        </IconContext.Provider>
    );
};

export default ArrowDown;
