import React from 'react'


export const Pagination = ({currpage,lastpage,onPageChange}) => {
    const arr = new Array(lastpage).fill(0);
    return (
        <div>
            { arr.map( (page) => (
                <div>
                    <button onClick={()=>onPageChange(page+1)} disabled={(page+1) == currpage} >{page+1}</button>
                </div>
            ) ) }
        </div>
    )
}
