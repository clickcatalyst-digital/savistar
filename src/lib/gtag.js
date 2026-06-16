// src/lib/gtag.js

/**
 * Sends a Google Analytics event.
 * This function is robust and will not cause an error if Google Analytics fails to load.
 * 
 * @param {string} action - The event action (e.g., 'generate_lead').
 * @param {object} params - An object of additional parameters for the event.
 */
export const sendGAEvent = (action, params) => {
  // Check if the gtag function is available on the window object
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  } else {
    // Log a warning in the console during development if gtag is not available
    console.warn(
      `Google Analytics gtag function not found. Event "${action}" was not tracked.`
    );
  }
};

/**
 * A centralized object for all Google Analytics event definitions.
 * This ensures consistency and avoids typos across the application.
 */
export const GTM_EVENTS = {
  // --- Primary CTAs (Lead Generation) ---
  generateLead: {
    action: 'generate_lead',
    category: 'Primary CTA',
  },
  clickToCall: {
    action: 'click_to_call',
    category: 'Primary CTA',
  },
  clickToEmail: {
    action: 'click_to_email',
    category: 'Primary CTA',
  },
  
  // --- Secondary CTAs (Funnel Progression) ---
  viewPortfolio: {
    action: 'view_portfolio',
    category: 'Secondary CTA',
  },
  learnMore: {
    action: 'learn_more',
    category: 'Secondary CTA',
  },

  // --- Tertiary CTAs (Brand Engagement) ---
  clickSocialIcon: {
    action: 'click_social_icon',
    category: 'Tertiary CTA',
  },
  viewLocation: {
    action: 'view_location',
    category: 'Tertiary CTA',
  },
};