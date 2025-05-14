"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface Country {
  code: string
  name: string
  flag: string
  dialCode: string
}

const countries: Country[] = [
  { code: "br", name: "Brasil", flag: "🇧🇷", dialCode: "+55" },
  { code: "us", name: "Estados Unidos", flag: "🇺🇸", dialCode: "+1" },
  { code: "pt", name: "Portugal", flag: "🇵🇹", dialCode: "+351" },
  { code: "es", name: "Espanha", flag: "🇪🇸", dialCode: "+34" },
  { code: "fr", name: "França", flag: "🇫🇷", dialCode: "+33" },
  { code: "de", name: "Alemanha", flag: "🇩🇪", dialCode: "+49" },
  { code: "it", name: "Itália", flag: "🇮🇹", dialCode: "+39" },
  { code: "uk", name: "Reino Unido", flag: "🇬🇧", dialCode: "+44" },
  { code: "jp", name: "Japão", flag: "🇯🇵", dialCode: "+81" },
  { code: "cn", name: "China", flag: "🇨🇳", dialCode: "+86" },
]

interface PhoneInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string, country: Country) => void
  error?: string
  required?: boolean
  labelColor?: string
  inputTextColor?: string
  inputBgColor?: string
  inputBorderColor?: string
  inputFocusRingColor?: string
}

export function PhoneInput({ 
  id, 
  label, 
  value, 
  onChange, 
  error, 
  required,
  labelColor = "text-foreground",
  inputTextColor = "text-foreground",
  inputBgColor = "bg-background",
  inputBorderColor = "border-input",
  inputFocusRingColor = "ring-secondary"
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const [phoneNumber, setPhoneNumber] = useState(value)

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country)
    setIsOpen(false)
    onChange(phoneNumber, country)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. Mantém apenas dígitos e corta em 11
  let digits = e.target.value.replace(/\D/g, "").slice(0, 11)

  // 2. Começa o formatado como os próprios dígitos (caso não seja "br")
  let formattedValue = digits

  if (selectedCountry.code === "br") {
    // 3. Insere parênteses + espaço depois do DDD
    formattedValue = digits.replace(/^(\d{2})(\d)/, "($1) $2")

    // 4. Quando houver mais de 6 dígitos (ou seja, já dá para ter hífen),
    //    coloca hífen antes dos 4 últimos
    if (digits.length > 6) {
      formattedValue = formattedValue.replace(/(\d)(\d{4})$/, "$1-$2")
    }
  }

    setPhoneNumber(formattedValue)
    onChange(formattedValue, selectedCountry)
  }

  return (
    <div className="w-full space-y-2">
      <Label htmlFor={id} className={labelColor}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <div className="flex">
        <div className="relative">
          <button
            type="button"
            className={`flex h-10 items-center gap-1 rounded-l-md border border-r-0 ${inputBorderColor} ${inputBgColor} ${inputTextColor} px-3 py-2 text-sm focus:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{selectedCountry.flag}</span>
            <span>{selectedCountry.dialCode}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {isOpen && (
            <div className={`absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border ${inputBorderColor} ${inputBgColor} py-1 shadow-lg`}>
              {countries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  className={cn(
                    `flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-muted ${inputTextColor}`,
                    selectedCountry.code === country.code && "bg-muted",
                  )}
                  onClick={() => handleCountrySelect(country)}
                >
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                  <span className={`ml-auto ${inputTextColor}/60`}>{country.dialCode}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <Input
          id={id}
          value={phoneNumber}
          onChange={handlePhoneChange}
          className={`rounded-l-none ${inputTextColor} ${inputBgColor} ${inputBorderColor} focus-visible:ring-${inputFocusRingColor}`}
          placeholder="(00) 00000-0000"
          error={error}
        />
      </div>
    </div>
  )
}
