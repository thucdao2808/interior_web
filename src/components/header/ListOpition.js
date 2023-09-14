import React from 'react'
import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
const ListOpition = () => {
    // const listItems =[ 
    //     'sản phẩm ',
    //      'tin tức ',
    //     'hướng dẫn ',
    //     'sales',
    // ]
       
    
    return (
    <div className='select'>
        <div className='item-option'>
             <ul className='list-item'>
                 <li className='list-click'>sản phẩm <FontAwesomeIcon icon={faCaretDown} />
                            <ul class="list-instruct">
                                  <li className='mount'><a className='option' href="#none">Nike Cortez</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Epic React</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Air Max</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Air Force</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Jordan</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Hyperadapt</a></li>
                             </ul>
                 </li>
                 <li className='list-click'>tin tức<FontAwesomeIcon icon={faCaretDown} />
                            <ul class="list-instruct">
                                  <li className='mount'><a className='option' href="#none">Nike Cortez</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Epic React</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Air Max</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Air Force</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Jordan</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Hyperadapt</a></li>
                             </ul>
                </li>
                 <li className='list-click'>hướng dẫn<FontAwesomeIcon icon={faCaretDown} />
                            <ul class="list-instruct">
                                  <li className='mount'><a className='option' href="#none">Nike Cortez</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Epic React</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Air Max</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Air Force</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Jordan</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Hyperadapt</a></li>
                             </ul>
                  </li>
                 <li className='list-click'>kids<FontAwesomeIcon icon={faCaretDown} />
                             <ul class="list-instruct">
                                  <li className='mount'><a className='option' href="#none">Nike Cortez</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Epic React</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Air Max</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Air Force</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Jordan</a></li>
                                  <li className='mount'><a className='option' href="#none">Nike Hyperadapt</a></li>
                             </ul>
                 </li>
            </ul>
      
        </div>
        <div className='hotline-contact'>
               <h1 className='contact'>HotLine: <a href='#none'>0978402825</a>-<a href='#none'>0972997408</a></h1>
        </div>
    </div>
    )
}

export default ListOpition