import { useRef, useState } from 'react'

import Button from '../ui/button/Button'
import Input from '../ui/input/Input'

import './ProductForm.css'

const ProductForm = () => {
  const amountInputRef = useRef()

  return (
    <form className='productForm'>
      <Button css="btn-product" content="Add +" />

      <Input
        className="btn-input"
        ref={amountInputRef}
        input={{
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
    </form>
  )
}

export default ProductForm
