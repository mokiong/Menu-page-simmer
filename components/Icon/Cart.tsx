import { NextPage } from 'next';
import { IconContext } from 'react-icons';
import { BsCart3 } from 'react-icons/bs';

const Cart: NextPage = () => {
    return (
        <IconContext.Provider value={{ color: '#f7ede1', size: '30px' }}>
            <div>
                <BsCart3 />
            </div>
        </IconContext.Provider>
    );
};

export default Cart;
