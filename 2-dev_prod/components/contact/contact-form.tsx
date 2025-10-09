"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PhoneInput } from "@/components/contact/phone-input"
import { sendEmail, initializeEmailJS } from "./email-service"

interface FormData {
  name: string
  phone: string
  email: string
  source: string
  budget: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  source?: string
  budget?: string
  message?: string
}

interface ContactFormProps {
  // Cores para os elementos do formulário
  labelColor?: string // Cor do texto dos labels
  inputTextColor?: string // Cor do texto dos inputs
  inputBgColor?: string // Cor de fundo dos inputs
  inputBorderColor?: string // Cor da borda dos inputs
  inputFocusRingColor?: string // Cor do anel de foco dos inputs
  buttonBgColor?: string // Cor de fundo do botão
  buttonHoverColor?: string // Cor de hover do botão
  buttonTextColor?: string // Cor do texto do botão
  successBgColor?: string // Cor de fundo da mensagem de sucesso
  successTextColor?: string // Cor do texto da mensagem de sucesso
}

export function ContactForm({
  labelColor = "text-foreground",
  inputTextColor = "text-foreground",
  inputBgColor = "bg-background",
  inputBorderColor = "border-input",
  inputFocusRingColor = "ring-secondary",
  buttonBgColor = "bg-primary",
  buttonHoverColor = "hover:bg-secondary/90",
  buttonTextColor = "text-white",
  successBgColor = "bg-secondary/10 dark:bg-secondary/20",
  successTextColor = "text-secondary dark:text-secondary-foreground",
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    source: "",
    budget: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    initializeEmailJS();
  }, []);

  const sourceOptions = [
    { value: "", label: "Selecione uma opção" },
    { value: "site", label: "Pelo site" },
    { value: "indicacao", label: "Por indicação" },
    { value: "instagram", label: "Pelo Instagram" },
    { value: "linkedin", label: "Pelo LinkedIn" },
    { value: "anuncios", label: "Por anúncios" },
    { value: "outro", label: "Outro" },
  ]

  const budgetOptions = [
    { value: "", label: "Selecione uma opção" },
    { value: "0-5000", label: "R$0–R$5.000" },
    { value: "5000-10000", label: "R$5.000–R$10.000" },
    { value: "10000-20000", label: "R$10.000–R$20.000" },
    { value: "20000+", label: "R$+20.000" },
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        source: formData.source,
        budget: formData.budget,
        message: formData.message,
        type: "Desenvolvimento sob Demanda" 
      }

      await sendEmail(templateParams)

      // Limpar formulário após envio bem-sucedido
      setFormData({
        name: "",
        phone: "",
        email: "",
        source: "",
        budget: "",
        message: "",
      })

      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setErrorMessage("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className={labelColor}>
            Nome<span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu nome completo"
            error={errors.name}
            className={`${inputTextColor} ${inputBgColor} ${inputBorderColor} focus-visible:ring-${inputFocusRingColor}`}
          />
        </div>

        <PhoneInput
          id="phone"
          label="Celular"
          value={formData.phone}
          onChange={handlePhoneChange}
          error={errors.phone}
          required
          labelColor={labelColor}
          inputTextColor={inputTextColor}
          inputBgColor={inputBgColor}
          inputBorderColor={inputBorderColor}
          inputFocusRingColor={inputFocusRingColor}
        />

        <div className="space-y-2">
          <Label htmlFor="email" className={labelColor}>
            Email<span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seu.email@exemplo.com"
            error={errors.email}
            className={`${inputTextColor} ${inputBgColor} ${inputBorderColor} focus-visible:ring-${inputFocusRingColor}`}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="source" className={labelColor}>
            Como conheceu a empresa
          </Label>
          <Select
            id="source"
            options={sourceOptions}
            value={formData.source}
            onChange={(e) => setFormData({ ...formData, source: e.target.value })}
            error={errors.source}
            className={`${inputTextColor} ${inputBgColor} ${inputBorderColor} focus-visible:ring-${inputFocusRingColor}`}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="budget" className={labelColor}>
            Quanto pretende investir no projeto
          </Label>
          <Select
            id="budget"
            options={budgetOptions}
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            error={errors.budget}
            className={`${inputTextColor} ${inputBgColor} ${inputBorderColor} focus-visible:ring-${inputFocusRingColor}`}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message" className={labelColor}>
            Conte-nos sobre seu produto
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Descreva seu produto digital atual, principais desafios, o que precisa ser desenvolvido ou melhorado, e quantas horas mensais você estima precisar."
            className={`min-h-[150px] ${inputTextColor} ${inputBgColor} ${inputBorderColor} focus-visible:ring-${inputFocusRingColor}`}
            error={errors.message}
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button
          type="submit"
          className="bg-primary hover:bg-secondary/90 text-white px-8 py-6 text-lg rounded-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </div>

      {isSuccess && (
        <div className={`mt-4 p-4 ${successBgColor} ${successTextColor} rounded-md text-center`}>
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md text-center">
          {errorMessage}
        </div>
      )}
    </form>
  )
}
