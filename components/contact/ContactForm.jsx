"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../common/Button'
import { PiWarningCircle } from "react-icons/pi";
import CustomPhoneInput from './CustomPhoneInput';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [phoneValue, setPhoneValue] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handlePhoneChange = (value) => {
    setPhoneValue(value)
    setFormData(prev => ({ ...prev, phone: value }))
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email.trim()) {
      newErrors.email = 'Enter an email address like example@mysite.com.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter an email address like example@mysite.com.'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Enter an answer.'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // form submission test
       await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', { ...formData, phone: phoneValue })
      setSubmitSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      })
      setPhoneValue('')
      
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='
      py-[max(0.5px,0.0233439*(100vw-17px))]
      2xl:p-[max(0.5px,0.023344*(100vw-17px))]
    '>
      <h2 className='font-bold heading5 leading-[1] 
        mb-[max(0.5px,0.016*(100vw-17px))]
        md:mb-[max(0.5px,0.005836*(100vw-17px))]
        lg:mb-[max(0.5px,0.0058314*(100vw-17px))]
      '>
        Send us a message
      </h2>
      
      <p className="span2
        mb-[max(0.5px,0.0066202*(100vw-17px))]
        md:mb-[max(0.5px,0.0132802*(100vw-17px))]
        lg:mb-[max(0.5px,0.0079051*(100vw-17px))]
      ">
        If you prefer to write, please send us a brief message outlining your challenge. We will respond within one business day.
      </p>
      
      <div className="
        mb-[max(0.5px,0.1066667*(100vw-17px))]
        md:mb-[max(0.5px,0.0265604*(100vw-17px))]
        lg:mb-[max(0.5px,0.0233439*(100vw-17px))]
      ">
        <a href="mailto:info@finlyticshub.com" target='_blank' className='flex gap-2.5 items-center w-full p-2 span7 max-w-[299px]'>
          <Image alt='mail' src='/assets/contact/mail.svg' width={40} height={40} className='w-[23.99px] h-auto aspect-square'/>
          <p>info@finlyticshub.com</p>
        </a>
      </div>
      
      {/* form inputs */}
      <div className="grid gap-5 leading-[1]">
        <div className="gap-5 grid md:grid-cols-2  lg:gap-[32px] xl:gap-[40px] text-[16px] items-start md:text-[20px]">
          {/* First Name */}
          <div className="grid">
            <label htmlFor="firstName" className='mb-2'>
              First name 
            </label>
            <input 
              type="text" 
              name="firstName" 
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className='p-2 rounded-[13px] border border-white focus:outline-none focus:border-secondary placeholder:text-white  text-base  placeholder:text-base hover:border-secondary' 
              placeholder='First name'
            />
          </div>
          
          {/* Last Name */}
          <div className="grid">
            <label htmlFor="lastName" className='mb-2'>
              Last name
            </label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className='p-2 rounded-[13px] border border-white focus:outline-none focus:border-secondary placeholder:text-white text-base  placeholder:text-base hover:border-secondary' 
              placeholder='Last name'
            />
          </div>
        </div>
        
        <div className="grid gap-5 md:grid-cols-2 lg:gap-[32px] xl:gap-[40px] items-start text-[16px] md:text-[20px]">
          {/* Email */}
          <div className="grid relative">
            <label htmlFor="email" className='mb-2'>
              Email *
            </label>
            <input 
              type="email" 
              name="email" 
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`p-2 rounded-[13px] border ${errors.email ? 'border-warning' : 'border-white'} focus:outline-none text-base  focus:border-secondary hover:border-secondary placeholder:text-white placeholder:text-base`} 
              placeholder='Email'
            />
            {errors.email && (
              <div className='text-warning text-[14px] flex gap-2 items-center mt-2'>
                <PiWarningCircle />
                <p>{errors.email}</p>
              </div>
            )}
          </div>
          
          
          <div className="grid">
            <label htmlFor="phone" className='mb-2'>
              Phone
            </label>
            <CustomPhoneInput 
            value={phoneValue}
    onChange={handlePhoneChange}
    
            />
          </div>
        </div>
        
        {/* Message */}
        <div className="grid text-[16px] md:text-[20px]">
          <label htmlFor="message" className='mb-2'>
            Message * 
          </label>
          <textarea 
            name="message" 
            id="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className={`p-2 rounded-[13px] border ${errors.message ? 'border-warning' : 'border-white'} focus:outline-none focus:border-secondary hover:border-secondary placeholder:text-white placeholder:text-base text-base  resize-vertical`} 
            placeholder='Message '
          />
          {errors.message && (
            <div className='text-warning text-[14px] flex gap-2 items-center mt-2'>
              <PiWarningCircle />
              <p>{errors.message}</p>
            </div>
          )}
        </div>
        
        {/* Submit Button */}
        {/* Submit Button */}
<Button 
  type="submit" 
  variant='light' 
  className='md:text-[20px] py-[11px] px-[6px] w-full md:w-[50%] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <svg 
      className="animate-spin h-6 w-6 text-primary" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  ) : (
    'Submit'
  )}
</Button>
        {/* Success Message */}
        {submitSuccess && (
          <div className='mt-[24px] text-center text-[40px]'>
            <p className='text-white'>Thanks, we received your submission.</p>
          </div>
        )}
      </div>
    </form>
  )
}

export default ContactForm