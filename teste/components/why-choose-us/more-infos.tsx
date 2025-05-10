import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function MoreInfos() {
    return (
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-secondary/40 backdrop-blur-sm p-4 text-center md:rounded-xl md:p-6 lg:p-8 border border-secondary/20">
            <div className="relative mb-8">
                <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border border-secondary/30 md:mb-5">
                    <AvatarImage src="/avatar/avatar_verde.png" />
                    <AvatarFallback className="bg-secondary/10 text-secondary">CT</AvatarFallback>
                </Avatar>
                <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border border-secondary/30 md:mb-5">
                    <AvatarImage src="/avatar/avatar_preto.png" />
                    <AvatarFallback className="bg-secondary/10 text-secondary">JR</AvatarFallback>
                </Avatar>
                <Avatar className="mb-4 size-16 border border-secondary/30 md:mb-5">
                    <AvatarImage src="/avatar/avatar_branco.png" />
                    <AvatarFallback className="bg-secondary/10 text-secondary">CT</AvatarFallback>
                </Avatar>
            </div>
            <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg text-white">Precisa de mais informações?</h3>
            <p className="mb-8 max-w-3xl text-gray-400 dark:text-muted-foreground lg:text-lg">Nossa equipe está pronta para ajudar com qualquer dúvida ou necessidade específica do seu projeto. Entre em contato para uma consultoria personalizada.</p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button className="w-full bg-secondary hover:bg-primary/90 text-white sm:w-auto" asChild>
                    <a href="#contato">Fale Conosco!</a>
                </Button>
            </div>
        </div>
    )
}