const googleManagerScript = document.createElement('script');
googleManagerScript.async = true;
googleManagerScript.src = "https://www.googletagmanager.com/gtag/js?id=G-TEVMF4DK2C";

const googleConfigScript = document.createElement('script');
googleConfigScript.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-TEVMF4DK2C');";
  
export const googleAnalytiscscripts = [googleManagerScript, googleConfigScript];