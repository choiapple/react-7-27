import React from 'react';
import { useState } from 'react';



function SearchBox() {
    const [isTrue, setIsTrue] = useState(false);

    const ModalSearch = () => {
        setIsTrue(!isTrue)
        return (
            <>
               
            </>
        );
    }
    return (
        <>
            <div>box</div>
            <div className="haha">
                <input className={isTrue? "viewModal" : "hideModal"} type="text" />
                <button onClick={ModalSearch}>view</button>
            </div>
            
            

        </>

    );
}

export default SearchBox;