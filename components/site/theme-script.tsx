// Pre-paint theme bootstrap. Inline so it runs before first paint
// and we never flash the wrong mode.
export function ThemeScript() {
  const code = `(() => {
    try {
      const stored = localStorage.getItem('lore-theme');
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const dark = stored ? stored === 'dark' : prefers;
      document.documentElement.classList.toggle('dark', dark);
    } catch (e) {}
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
