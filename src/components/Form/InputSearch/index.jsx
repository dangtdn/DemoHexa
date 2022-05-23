import React, { useRef, useState } from 'react'

function InputSearch(props) {
    const {onSubmit} = props;
    const [searchItem, setSearchItem] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearchItem(value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        // debouce
        typingTimeoutRef.current.setTimeout(() => {

            const formValues = {
                searchItem: value
            };
            onSubmit(formValues);
            
        }, 300); 
    };

  return (
    <form>
        <input type="text" value={searchItem}/>
    </form>
  )
}

export default InputSearch