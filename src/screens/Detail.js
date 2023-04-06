import React from 'react'
import { Link } from 'react-router-dom'

export default function Detail(props) {
  return (
    <div>
    <div className='container-sm m-auto mt-5 '>
        <table className='table table-hover'>
            <thead className='text-warning fs-4'>
            <p className='text-center'>The recipe</p>
            
            </thead>
            
            
        </table>
        
        <div>
            <Link><button className='btn bg-warning mb-5' onClick={'/'}>Back to home</button></Link>
        </div>
    </div>
</div>
  )
}
