// https://dev.to/smakosh/how-to-add-dark-mode-easily-with-a-custom-react-hook-10mj

import { useEffect, useState } from 'react'

export default () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = (theme === 'light') ? 'dark' : 'light';
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return {theme, toggleTheme};
}
