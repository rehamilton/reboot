import React from 'react';

function SearchInput({ search, onSearchChange, onSearch }) {

    return (

        <>
            <div class="row">
                <form class="col s12" onSubmit={onSearch}>
                <div class="row">
                    <div class="input-field col s12">
                        <i class="material-icons prefix">search</i>
                        <textarea 
                            id="icon_prefix2" 
                            class="materialize-textarea" 
                            value={search} 
                            onChange={evt => onSearchChange(evt.target.value)}
                        >

                        </textarea>
                        <label for="icon_prefix2">Book Title</label>
                    </div>
                </div>
                </form>
            </div>
        </>
    )

}

export default SearchInput