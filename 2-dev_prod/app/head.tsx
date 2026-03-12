export default function Head() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-703135328" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-703135328');
          `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const storedTheme = localStorage.getItem('theme')
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                const defaultDark = storedTheme === 'dark' || (storedTheme === null && prefersDark)

                if (defaultDark) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            })()
          `,
        }}
      />
    </>
  )
}
