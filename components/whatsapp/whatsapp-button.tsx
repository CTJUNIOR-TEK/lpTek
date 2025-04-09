"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [chatAnimation, setChatAnimation] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setChatAnimation(true)
    } else {
      setChatAnimation(false)
    }
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen && messages.length === 0) {
      // Iniciar a conversa quando abrir o chat pela primeira vez
      setIsTyping(true)
      setTimeout(() => {
        setMessages([
          {
            text: "Olá! Sou da CT Junior. Como posso ajudar com seu projeto?",
            isBot: true,
          },
        ])
        setIsTyping(false)
      }, 1500)
    }
  }

  const openWhatsApp = () => {
    // Número fictício - substitua pelo número real
    window.open(
      "https://wa.me/5527999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20CT%20Junior.",
      "_blank",
    )
  }

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-500 hover:scale-105",
          isOpen && "rotate-90",
        )}
        aria-label="Chat com a CT Junior no WhatsApp"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M9.5 13.5c.5 1 1.5 1.5 2.5 1.5s2-.5 2.5-1.5" />
          </svg>
        )}
      </button>

      {/* Chat popup com animação */}
      {isOpen && (
        <div
          ref={chatRef}
          className={cn(
            "fixed bottom-24 right-6 z-50 w-80 rounded-lg bg-white shadow-xl dark:bg-zinc-900 overflow-hidden",
            "origin-bottom-right transition-all duration-300",
            chatAnimation ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        >
          {/* Header */}
          <div className="bg-[#075E54] p-3 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="CT Junior Logo"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white"
                />
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-[#075E54]"></div>
              </div>
              <div>
                <h3 className="font-medium">CT Junior</h3>
                <p className="text-xs text-white/80">Online</p>
              </div>
            </div>
          </div>

          {/* Chat background - agora com fundo sólido */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-100 dark:bg-zinc-800">
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "max-w-[80%] rounded-lg p-3 text-sm relative",
                    message.isBot
                      ? "self-start rounded-tl-none bg-white dark:bg-zinc-700 shadow-sm"
                      : "self-end rounded-tr-none bg-[#DCF8C6] dark:bg-[#025C4C] text-black dark:text-white shadow-sm",
                  )}
                >
                  {message.text}
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 block mt-1 text-right">
                    {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                  <div
                    className={cn(
                      "absolute w-4 h-4 top-0",
                      message.isBot
                        ? "-left-2 border-t-8 border-r-8 border-t-transparent border-r-white dark:border-r-zinc-700"
                        : "-right-2 border-t-8 border-l-8 border-t-transparent border-l-[#DCF8C6] dark:border-l-[#025C4C]",
                    )}
                  ></div>
                </div>
              ))}
              {isTyping && (
                <div className="self-start max-w-[80%] rounded-lg rounded-tl-none bg-white dark:bg-zinc-700 p-3 shadow-sm relative">
                  <div className="flex gap-1">
                    <span className="animate-pulse h-2 w-2 rounded-full bg-gray-400"></span>
                    <span
                      className="animate-pulse h-2 w-2 rounded-full bg-gray-400"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="animate-pulse h-2 w-2 rounded-full bg-gray-400"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                  </div>
                  <div className="absolute w-4 h-4 top-0 -left-2 border-t-8 border-r-8 border-t-transparent border-r-white dark:border-r-zinc-700"></div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-3 bg-[#F0F2F5] dark:bg-zinc-900">
            <Button onClick={openWhatsApp} className="w-full bg-[#25D366] hover:bg-[#1da750] text-white">
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
