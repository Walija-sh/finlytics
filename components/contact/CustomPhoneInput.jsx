"use client"
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { IoSearchOutline } from "react-icons/io5";
import { PiGlobeHemisphereEastLight } from "react-icons/pi";

const CustomPhoneInput = ({ value, onChange, error }) => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [number, setNumber] = useState('')
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const ref = useRef(null)

  // Fetch countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,flags,idd,cca2'
        )
        const data = await res.json()

        const formatted = data
          .filter(c => c.idd?.root && c.idd?.suffixes?.length)
          .map(c => ({
            code: c.cca2,
            name: c.name.common,
            dial: c.idd.suffixes.length === 1
              ? `${c.idd.root}${c.idd.suffixes[0]}`
              : c.idd.root,
            flag: c.flags.svg 
          }))
          .sort((a, b) => a.name.localeCompare(b.name))

        setCountries(formatted)
        
        // Set default selected as null (globe icon will show)
        setSelected(null)
      } catch (err) {
        console.error('Failed to fetch countries:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  useEffect(() => {
    const handler = (e) => { 
      if (!ref.current?.contains(e.target)) setOpen(false) 
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.dial.includes(search)
  )

  const handleSelect = (country) => {
    setSelected(country)
    setOpen(false)
    setSearch('')
    onChange(`${country.dial}${number}`)
  }

  const handleNumberChange = (e) => {
    const newNumber = e.target.value
    setNumber(newNumber)
    if (selected) {
      onChange(`${selected.dial}${newNumber}`)
    } else {
      onChange(newNumber)
    }
  }

  return (
    <div className="relative" ref={ref}>
      <div className={`flex items-center rounded-[13px] border  focus-within:border-secondary hover:border-secondary px-3 py-2 gap-1`}>
        
        <button
          type="button"
          onClick={() => setOpen(prev => !prev)}
          className="flex items-center gap-1.5  shrink-0 group cursor-pointer"
        >
          {loading ? (
            <div className="w-[22px] h-4 animate-pulse" />
          ) : selected ? (
            <img
              src={selected.flag}
              alt={selected.name}
              className="w-[22px] h-auto object-cover"
            />
          ) : (
           <PiGlobeHemisphereEastLight className='text-white group-hover:opacity-80 ' />
          )}
          {open
            ? <FiChevronUp className="text-white w-4 h-4" />
            : <FiChevronDown className="text-white w-4 h-4" />
          }
        </button>

        {/* Number Input */}
        <input
          type="tel"
          value={number}
          onChange={handleNumberChange}
          placeholder="Phone"
          className="flex-1 bg-transparent  text-white placeholder:text-white focus:outline-none text-[16px] md:text-[20px]"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 top-full  w-full bg-primary border border-white  overflow-hidden shadow-xl pt-3 max-w-[316px]">
          {/* Search */}
          <div className="py-2 px-6">
            <div className="flex items-center gap-2 border border-secondary rounded-[13px] px-2 py-2">
              <IoSearchOutline className='text-white' />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="bg-transparent text-base placeholder:text-base  text-white placeholder:text-white focus:outline-none  flex-1"
                autoFocus
              />
            </div>
          </div>

          {/* List */}
          <ul className="max-h-[200px] overflow-y-auto">
            {filtered.map((country) => (
              <li
                key={country.code}
                onClick={() => handleSelect(country)}
                className={`flex items-center gap-3 px-6 py-2.5 cursor-pointer  text-white text-[16px]`}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-5.5 h-auto  object-cover shrink-0"
                />
                <span>{country.name} {country.dial}</span>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-white/40 text-[14px]">No results</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default CustomPhoneInput