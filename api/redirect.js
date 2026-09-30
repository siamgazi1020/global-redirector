import { kv } from '@vercel/kv';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const links = [
    "https://blogverse.flazora.com/blog/how-to-improve-your-business-credit-score-and-qualify-for-better-financing",
    "https://blogverse.flazora.com/blog/small-business-insurance-in-2026-types-of-coverage-costs-and-how-to-choose",
    "https://blogverse.flazora.com/blog/how-to-get-a-business-loan-in-2026-requirements-rates-and-application-process",
    "https://blogverse.flazora.com/blog/business-credit-cards-in-2026-how-to-compare-rewards-fees-and-apr",
    "https://blogverse.flazora.com/blog/best-business-bank-accounts-for-small-businesses-in-2026-fees-features-and-what-to-consider-a-topic-dea-akta-website-post-photo-banai-deo",
    "https://blogverse.flazora.com/blog/how-to-improve-your-business-credit-score-and-qualify-for-better-financing",
    "https://blogverse.flazora.com/blog/small-business-insurance-in-2026-types-of-coverage-costs-and-how-to-choose",
    "https://blogverse.flazora.com/blog/how-to-get-a-business-loan-in-2026-requirements-rates-and-application-process",
    "https://blogverse.flazora.com/blog/business-credit-cards-in-2026-how-to-compare-rewards-fees-and-apr",
    "https://blogverse.flazora.com/blog/best-business-bank-accounts-for-small-businesses-in-2026-fees-features-and-what-to-consider-a-topic-dea-akta-website-post-photo-banai-deo",
    "https://blogverse.flazora.com/blog/how-to-improve-your-business-credit-score-and-qualify-for-better-financing",
    "https://blogverse.flazora.com/blog/small-business-insurance-in-2026-types-of-coverage-costs-and-how-to-choose",
    "https://blogverse.flazora.com/blog/how-to-get-a-business-loan-in-2026-requirements-rates-and-application-process",
    "https://blogverse.flazora.com/blog/business-credit-cards-in-2026-how-to-compare-rewards-fees-and-apr",
    "https://blogverse.flazora.com/blog/best-business-bank-accounts-for-small-businesses-in-2026-fees-features-and-what-to-consider-a-topic-dea-akta-website-post-photo-banai-deo"
  ];

  try {
    const nextIndex = await kv.incr('redirect_index');
    const selectedIndex = (nextIndex - 1) % links.length;

    return Response.redirect(links[selectedIndex], 302);
  } catch (error) {
    return Response.redirect(links[0], 302);
  }
}
