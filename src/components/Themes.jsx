// /**
//  * Date:05/04/2021
//  * Author: Muhammad Minhaj
//  * Title: THEMES
//  * Description: ...
//  * * */
import { useContext } from 'react';
import themeContext from '../context/themes/context';

function Themes() {
    const state = useContext(themeContext);
    console.log('Application State', state);
    return (
        <>
            <h2>Assalamu Alaikum</h2>
        </>
    );
}

export default Themes;
