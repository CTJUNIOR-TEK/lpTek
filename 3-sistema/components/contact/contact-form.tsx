"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PhoneInput } from "@/components/contact/phone-input"

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

export function ContactForm() {
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
    { value: "0-5000", label: "0–5.000" },
    { value: "5000-10000", label: "5.000–10.000" },
    { value: "10000-20000", label: "10.000–20.000" },
    { value: "20000+", label: "+20.000" },
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

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulando envio do formulário
      await new Promise((resolve) => setTimeout(resolve, 1500))

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
          <Label htmlFor="name">
            Nome<span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu nome completo"
            error={errors.name}
            className="focus-visible:ring-secondary"
          />
        </div>

        <PhoneInput
          id="phone"
          label="Celular"
          value={formData.phone}
          onChange={handlePhoneChange}
          error={errors.phone}
          required
        />

        <div className="space-y-2">
          <Label htmlFor="email">
            Email<span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seu.email@exemplo.com"
            error={errors.email}
            className="focus-visible:ring-secondary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="source">
            Como conheceu a empresa
          </Label>
          <Select
            id="source"
            options={sourceOptions}
            value={formData.source}
            onChange={(e) => setFormData({ ...formData, source: e.target.value })}
            error={errors.source}
            className="focus-visible:ring-secondary"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="budget">
            Quanto pretende investir no projeto
          </Label>
          <Select
            id="budget"
            options={budgetOptions}
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            error={errors.budget}
            className="focus-visible:ring-secondary"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message">
            Conte-nos sobre sua ideia
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Descreva seu projeto, objetivos, funcionalidades desejadas e qualquer outra informação relevante para entendermos melhor sua necessidade."
            className="min-h-[150px] focus-visible:ring-secondary"
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
        <div className="mt-4 p-4 bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary-foreground rounded-md text-center">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
    </form>
  )
}
