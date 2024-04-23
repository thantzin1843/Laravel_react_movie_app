import React from 'react'

function Pagination({handlePageChange,currentPage,totalPages,setCurrentPage}) {
  const generateButton =()=>{
    const jsxElements = [];
    for (let i = 1; i <= totalPages; i++) {
    jsxElements.push(<button onClick={()=>setCurrentPage(i)} className='p-2 bg-white text-blue-600 mt-3 ms-1 rounded-md '>{i}</button>);
    }
    return jsxElements;
}

  return (
    <div>
      <button onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1} className='p-2 bg-white text-blue-600 mt-3 rounded-md '>Previous</button>
           
           {
           generateButton()
           }
           
          <button onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage===totalPages} className='p-2 bg-white text-blue-600 mt-3 ms-1 rounded-md '>Next</button>
    </div>
  )
}

export default Pagination