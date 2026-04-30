const CONSENT_KEY = 'pi_consent';
const CONSENT_VERSION = '1';

function getConsentData() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.version !== CONSENT_VERSION) return null;
    return data;
  } catch {
    return null;
  }
}

function updateGtag(advertising) {
  if (typeof window.gtag !== 'function') return;
  const state = advertising ? 'granted' : 'denied';
  window.gtag('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

export function hasConsented() {
  return getConsentData() !== null;
}

export function getConsent() {
  const data = getConsentData();
  return data ? { advertising: data.advertising } : null;
}

export function setConsent(advertising) {
  const data = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    advertising,
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
  } catch {
    // localStorage non disponibile
  }
  updateGtag(advertising);
}

export function revokeConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    // ignore
  }
}
