const googleManagerScript = document.createElement('script');
googleManagerScript.async = true;
googleManagerScript.src = "https://www.googletagmanager.com/gtag/js?id=UA-135254749-4";

const googleConfigScript = document.createElement('script');
googleConfigScript.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-135254749-4');";
  
export const googleAnalytiscscripts = [googleManagerScript, googleConfigScript];