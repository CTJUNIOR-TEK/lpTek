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
}

export function PhoneInput({ id, label, value, onChange, error, required }: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const [phoneNumber, setPhoneNumber] = useState(value)

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country)
    setIsOpen(false)
    onChange(phoneNumber, country)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Aplicar máscara para formato brasileiro (XX) XXXXX-XXXX
    let formattedValue = value
    if (selectedCountry.code === "br") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d)(\d{4})$/, "$1-$2")
        .substring(0, 16)
    }

    setPhoneNumber(formattedValue)
    onChange(formattedValue, selectedCountry)
  }

  return (
    <div className="w-full space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <div className="flex">
        <div className="relative">
          <button
            type="button"
            className="flex h-10 items-center gap-1 rounded-l-md border border-r-0 border-input bg-background px-3 py-2 text-sm focus:outline-none"
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
            <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-input bg-background py-1 shadow-lg">
              {countries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-muted",
                    selectedCountry.code === country.code && "bg-muted",
                  )}
                  onClick={() => handleCountrySelect(country)}
                >
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                  <span className="ml-auto text-muted-foreground">{country.dialCode}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <Input
          id={id}
          value={phoneNumber}
          onChange={handlePhoneChange}
          className="rounded-l-none"
          placeholder="(00) 00000-0000"
          error={error}
        />
      </div>
    </div>
  )
}
