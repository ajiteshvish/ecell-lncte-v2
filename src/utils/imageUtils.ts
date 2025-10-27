/**
 * Utility functions for handling images with fallbacks
 */

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string = '/placeholder.svg') => {
  const target = e.currentTarget;
  console.error(`Failed to load image: ${target.src}`);
  target.src = fallbackSrc;
};

export const handleImageLoad = (src: string) => {
  console.log(`Successfully loaded image: ${src}`);
};

/**
 * Creates image props with error handling
 */
export const createImageProps = (src: string, alt: string, fallbackSrc: string = '/placeholder.svg') => ({
  src,
  alt,
  onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => handleImageError(e, fallbackSrc),
  onLoad: () => handleImageLoad(src),
});

/**
 * Checks if an image URL is valid
 */
export const isValidImageUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Gets the appropriate fallback image based on context
 */
export const getFallbackImage = (context: 'team' | 'blog' | 'initiative' | 'event' | 'participant' = 'participant'): string => {
  const fallbacks = {
    team: '/placeholder.svg',
    blog: '/placeholder.svg', 
    initiative: '/placeholder.svg',
    event: '/placeholder.svg',
    participant: '/placeholder.svg'
  };
  return fallbacks[context];
};
