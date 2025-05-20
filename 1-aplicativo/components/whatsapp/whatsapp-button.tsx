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
    window.open( // 
      "https://wa.me/5527997767207?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20construção%20de%apps%20da%20CT%20Junior.",
      "_blank",
    )
  }

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-500 hover:scale-105 animate-float",
          isOpen && "rotate-90", // bg-[#25D366] é a cor original do WhatsApp
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
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
                  // src="/placeholder.svg?height=48&width=48"
                  src="/avatar/avatar_preto.png"
                  alt="CT Junior Logo"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white bg-white"
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
            <Button onClick={openWhatsApp} className="w-full bg-secondary hover:bg-secondary/70 text-white">
              Conversar no WhatsApp
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
