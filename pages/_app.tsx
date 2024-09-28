import { useEffect } from 'react';

import './styles.css';

import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Check if the current hostname is your Nginx domain
    if (typeof window !== 'undefined' && window.location.hostname === 'vdocs.roxstarstudios.dev') {
        const links = document.querySelectorAll('a[href^="/vMenuDocs/"]');
        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default link behavior
                const newPath = this.getAttribute('href').replace('/vMenuDocs', '');
                window.location.href = newPath; // Redirect to the new path
            });
        });
    }
  }, []);

  return <Component {...pageProps} />
}