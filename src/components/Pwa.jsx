import React, { useEffect, useState } from "react";
// refrence https://dev.to/woile/simplest-react-hook-component-for-pwa-install-button-2die

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <button
      className="btn"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      Install
    </button>
  );
};

export default InstallPWA;
