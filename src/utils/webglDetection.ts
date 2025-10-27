export const detectWebGLSupport = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!(gl && gl instanceof WebGLRenderingContext);
  } catch (e) {
    return false;
  }
};

export const getWebGLErrorMessage = (): string => {
  if (!window.WebGLRenderingContext) {
    return 'Your browser does not support WebGL. Please update your browser or enable WebGL to see 3D graphics.';
  }
  
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl');
  
  if (!gl) {
    return 'WebGL is not available. This may be due to graphics drivers or browser settings. The website will work without 3D effects.';
  }
  
  return 'WebGL initialization failed. 3D graphics are disabled but the site remains fully functional.';
};