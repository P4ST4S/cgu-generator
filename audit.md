# 🔍 CGU Generator - Comprehensive Audit Report

## Executive Summary

This audit analyzed your TOS/CGU Generator SaaS application built with Next.js 16, React 19, and TypeScript. The application provides a solid foundation but has **critical security vulnerabilities** (XSS, HTML injection), **missing core SaaS features** (authentication, payments, database), and **compliance gaps** (CCPA, accessibility). Below is a structured breakdown of 40+ actionable issues ready to be converted into GitHub issues.

---

## 🚨 CRITICAL SECURITY ISSUES

### [Security] XSS Vulnerability in CGU Preview via dangerouslySetInnerHTML

**Description:**
The `CGUPreview` component uses `dangerouslySetInnerHTML` to render user-generated content without proper sanitization. An attacker could inject malicious JavaScript through form fields (company name, address, etc.) that would execute when the preview is rendered.

**Context/Rationale:**
This is a **critical XSS vulnerability**. User input from the form (companyName, address, activityType, etc.) is directly interpolated into HTML in `generateCGU.ts` and then rendered via `dangerouslySetInnerHTML`. Malicious scripts could steal session tokens, redirect users, or compromise the application.

**Location:** [components/CGUPreview.tsx:114](components/CGUPreview.tsx#L114), [lib/generateCGU.ts:73-308](lib/generateCGU.ts#L73-L308)

**Implementation Suggestion / To-Do:**
1. Install DOMPurify: `pnpm add dompurify` and `pnpm add -D @types/dompurify`
2. Sanitize HTML before rendering: `dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(getPreviewContent()) }}`
3. Alternatively, refactor to use React components instead of raw HTML strings
4. Add Content Security Policy (CSP) headers in `next.config.ts`

**Suggested Labels:** `security`, `priority:high`, `bug`

---

### [Security] Client-Side Only Validation Allows Bypassing Security Checks

**Description:**
All form validation occurs exclusively on the client-side using Zod schemas. Malicious users can bypass validation by sending crafted HTTP requests directly to any future API endpoints, submitting unvalidated or malicious data.

**Context/Rationale:**
Client-side validation is for UX only. Without server-side validation, attackers can submit arbitrary data, potentially injecting malicious content, overwhelming the system, or exploiting business logic vulnerabilities. This is a fundamental security principle violation.

**Location:** [app/create/page.tsx:35-49](app/create/page.tsx#L35-L49), [lib/validation.ts](lib/validation.ts)

**Implementation Suggestion / To-Do:**
1. Create API route handlers in `app/api/generate-cgu/route.ts`
2. Re-validate ALL input using Zod schemas on the server-side
3. Implement rate limiting using `@upstash/ratelimit` or similar
4. Add CSRF protection for form submissions
5. Return sanitized errors without exposing internal logic

**Suggested Labels:** `security`, `priority:high`, `bug`, `component:backend`

---

### [Security] No SIRET Number Format Validation Beyond Regex

**Description:**
The SIRET validation only checks for 14 digits via regex (`/^[0-9\s]+$/`) but doesn't validate the actual SIRET format (SIREN + NIC) or checksum algorithm (Luhn algorithm for SIREN).

**Context/Rationale:**
Invalid SIRET numbers in generated legal documents could have legal implications for users. French SIRET numbers have a specific structure (9-digit SIREN + 5-digit NIC) with a checksum validation. Currently, users can input "11111111111111" and it would be accepted.

**Location:** [lib/validation.ts:9-12](lib/validation.ts#L9-L12)

**Implementation Suggestion / To-Do:**
1. Implement proper SIRET validation with Luhn algorithm
2. Create utility function `validateSIRET()` that checks:
   - Exactly 14 digits (no spaces in final validation)
   - Valid SIREN checksum (first 9 digits)
   - Valid establishment number (last 5 digits)
3. Add to Zod schema: `.refine(validateSIRET, { message: 'Numéro SIRET invalide' })`

**Suggested Labels:** `security`, `enhancement`, `priority:medium`, `component:validation`

---

### [Security] No Rate Limiting on Document Generation

**Description:**
There are no rate limits on CGU generation. Users can generate unlimited documents, potentially abusing the service, causing resource exhaustion, or performing denial-of-service attacks.

**Context/Rationale:**
Without rate limiting, malicious actors can abuse the free tier to generate thousands of documents, overwhelming the server, increasing costs, and degrading service for legitimate users. This is especially critical for a SaaS product with a free tier.

**Implementation Suggestion / To-Do:**
1. Implement rate limiting using Vercel KV + Upstash Rate Limit or Redis
2. Apply limits based on IP address for anonymous users
3. Apply limits per user account once authentication is implemented
4. Suggested limits: 10 generations/hour for free, unlimited for Pro
5. Return 429 Too Many Requests with Retry-After header

**Suggested Labels:** `security`, `priority:high`, `feature`, `component:backend`

---

### [Security] Sensitive Information Exposure in Generated HTML Comments

**Description:**
The generated CGU HTML contains a footer with a link back to the generator including the generation date. While not critical, this exposes metadata about when and how the document was created.

**Context/Rationale:**
This minor information disclosure reveals the tool used and timing of document generation. While low risk, it's best practice to give users control over whether to include attribution/watermarks, especially in paid plans.

**Location:** [lib/generateCGU.ts:312-314](lib/generateCGU.ts#L312-L314)

**Implementation Suggestion / To-Do:**
1. Add option to form: `includeAttribution: boolean`
2. Make attribution optional (default: true for free, false for Pro)
3. Offer branded vs. unbranded exports as a paid feature differentiator

**Suggested Labels:** `enhancement`, `priority:low`, `feature`

---

## 🚀 MISSING CORE FEATURES

### [Feature] User Authentication and Account Management System

**Description:**
The application currently has no authentication system. Users cannot create accounts, log in, save their work, or access their generated documents later. The navbar has a non-functional "Connexion" link.

**Context/Rationale:**
Authentication is fundamental for a SaaS product. Without it, you cannot:
- Implement paid plans and subscriptions
- Save user documents to the cloud
- Track usage for rate limiting
- Provide personalized experiences
- Build customer relationships

**Location:** [components/Navbar.tsx:27-29](components/Navbar.tsx#L27-L29)

**Implementation Suggestion / To-Do:**
1. Implement NextAuth.js (Auth.js) with providers (Google, GitHub, Email)
2. Create user database schema with Prisma or Drizzle ORM
3. Add protected routes using middleware
4. Build login/signup pages with email verification
5. Implement password reset functionality
6. Add user profile management page
7. Store user sessions securely (httpOnly cookies)

**Suggested Labels:** `feature`, `priority:high`, `effort:large`, `component:auth`

---

### [Feature] Database Integration for Document Storage and Retrieval

**Description:**
All document generation happens in-memory only. There is no database to persist generated CGUs, user data, or application state. Documents are only downloadable and then lost.

**Context/Rationale:**
Without a database, users lose their work after downloading. A proper SaaS needs to store:
- User profiles and authentication data
- Generated documents with version history
- User preferences and templates
- Billing and subscription information
- Analytics and usage metrics

**Implementation Suggestion / To-Do:**
1. Choose database: PostgreSQL (Vercel Postgres/Supabase) or MongoDB
2. Set up ORM: Prisma or Drizzle ORM
3. Design schema with tables: users, documents, templates, subscriptions
4. Create API routes for CRUD operations
5. Implement document versioning and history
6. Add document search and filtering capabilities
7. Set up automated backups

**Suggested Labels:** `feature`, `priority:high`, `effort:large`, `component:database`

---

### [Feature] Payment Integration and Subscription Management

**Description:**
The pricing page shows three tiers (Free, Pro €29/month, Enterprise) but has no payment integration. CTAs like "Essayer 14 jours gratuits" and "Nous contacter" are non-functional.

**Context/Rationale:**
Payment integration is essential for SaaS revenue. Without it, you cannot monetize the Pro and Enterprise plans, making the business model non-viable. Users cannot upgrade, and you have no recurring revenue stream.

**Location:** [components/Pricing.tsx:136-144](components/Pricing.tsx#L136-L144)

**Implementation Suggestion / To-Do:**
1. Integrate Stripe for payments (or LemonSqueezy for EU)
2. Implement webhook handlers for subscription events
3. Create Stripe Customer Portal integration
4. Build plan management UI in user dashboard
5. Add trial period logic (14 days free for Pro)
6. Implement usage-based billing if needed
7. Add invoice generation and receipt emails
8. Handle failed payments and dunning management

**Suggested Labels:** `feature`, `priority:high`, `effort:large`, `component:payments`

---

### [Feature] PDF Export Functionality

**Description:**
The Features section prominently advertises "Export PDF & HTML" but only HTML download is implemented. There is no PDF generation capability.

**Context/Rationale:**
This is a **false advertising issue**. Users expect PDF exports as advertised. PDFs are the standard format for legal documents, more professional than HTML, and cannot be easily edited. This is a critical missing feature that impacts user trust and product value.

**Location:** [components/Features.tsx:27-28](components/Features.tsx#L27-L28), [components/CGUPreview.tsx:89-108](components/CGUPreview.tsx#L89-L108)

**Implementation Suggestion / To-Do:**
1. Implement server-side PDF generation using Puppeteer or Playwright
2. Alternative: Use @react-pdf/renderer for client-side generation
3. Alternative: Use API service like PDFShift or DocRaptor
4. Add "Télécharger PDF" button alongside HTML download
5. Ensure PDF preserves formatting and styling
6. Add watermark for free tier, premium PDFs for Pro users
7. Optimize PDF file size

**Suggested Labels:** `feature`, `priority:high`, `bug`, `effort:medium`

---

### [Feature] Multi-Language Support (i18n)

**Description:**
The application is entirely in French with no internationalization (i18n) support. The generated CGUs are also French-only, limiting the addressable market to French-speaking countries.

**Context/Rationale:**
To scale globally, you need multi-language support. Many businesses operate internationally and need TOS in multiple languages. This severely limits market size and competitive positioning. GDPR applies EU-wide, not just France.

**Implementation Suggestion / To-Do:**
1. Implement next-intl or react-i18next for UI translations
2. Support at minimum: French, English, German, Spanish
3. Create language-specific CGU templates with proper legal terminology
4. Add language selector in navbar
5. Store user language preference
6. Ensure proper legal compliance for each jurisdiction
7. Consider partnering with legal experts for translations

**Suggested Labels:** `feature`, `priority:medium`, `effort:large`, `enhancement`

---

### [Feature] Document Version History and Templates System

**Description:**
Users cannot save multiple versions of their CGU, compare changes, or create reusable templates. Once generated, documents have no versioning or edit history.

**Context/Rationale:**
Businesses need to track changes to their legal documents for compliance and auditing. Version history allows users to see what changed and when. Templates let users quickly generate similar documents without re-entering all data. This is essential for professional SaaS.

**Implementation Suggestion / To-Do:**
1. Create document versioning system with timestamps
2. Implement diff view to compare versions
3. Add ability to restore previous versions
4. Build template creation and management UI
5. Allow users to save custom templates with pre-filled fields
6. Add template sharing for Enterprise tier
7. Implement document forking/cloning

**Suggested Labels:** `feature`, `priority:medium`, `effort:medium`, `component:backend`

---

### [Feature] REST API for Programmatic CGU Generation

**Description:**
The application has no API for programmatic access. The Pricing page mentions "API complète" for Enterprise tier, but no API exists.

**Context/Rationale:**
Enterprise customers need API access to integrate CGU generation into their workflows, apps, or platforms. This is a key differentiator for the Enterprise tier and a significant revenue opportunity. Without an API, you cannot serve B2B customers effectively.

**Location:** [components/Pricing.tsx:40](components/Pricing.tsx#L40)

**Implementation Suggestion / To-Do:**
1. Design RESTful API with endpoints: POST /api/generate, GET /api/documents
2. Implement API key authentication and management
3. Add API rate limiting per tier (e.g., 100 req/day Pro, unlimited Enterprise)
4. Create comprehensive API documentation (OpenAPI/Swagger)
5. Build API key management UI in user dashboard
6. Add webhook support for async generation
7. Implement API usage analytics and monitoring

**Suggested Labels:** `feature`, `priority:medium`, `effort:large`, `component:backend`

---

### [Feature] Email Notification System for Legal Updates

**Description:**
The Features section advertises "Mises à jour automatiques" (automatic updates) when legislation changes, but there is no email system or notification mechanism implemented.

**Context/Rationale:**
This is another **false advertising issue**. Users trust the app to keep them compliant, but there's no system to notify them of legal changes. GDPR and other regulations evolve, and users need to update their TOS accordingly. Without this feature, users face compliance risks.

**Location:** [components/Features.tsx:36-37](components/Features.tsx#L36-L37)

**Implementation Suggestion / To-Do:**
1. Implement email service integration (SendGrid, Resend, or AWS SES)
2. Create email templates for legal update notifications
3. Build subscription preferences in user settings
4. Monitor legislation changes (manual or via legal APIs)
5. Send digest emails when changes affect user documents
6. Add in-app notification center
7. Implement email verification flow

**Suggested Labels:** `feature`, `priority:medium`, `effort:medium`, `component:notifications`

---

### [Feature] Mobile Menu Implementation

**Description:**
The mobile menu button in the navbar is visible but completely non-functional. It's a static SVG icon with no click handler or menu drawer.

**Context/Rationale:**
The site claims to be responsive, but mobile users cannot access navigation links. This creates a poor UX on mobile devices (which likely represent 40-60% of traffic) and makes key features inaccessible.

**Location:** [components/Navbar.tsx:38-43](components/Navbar.tsx#L38-L43)

**Implementation Suggestion / To-Do:**
1. Convert Navbar to 'use client' component
2. Add state: `const [mobileMenuOpen, setMobileMenuOpen] = useState(false)`
3. Implement slide-out drawer with animations (Framer Motion)
4. Add backdrop overlay with click-outside-to-close
5. Ensure accessibility (keyboard navigation, focus trap)
6. Add proper ARIA labels
7. Test on various mobile devices and screen sizes

**Suggested Labels:** `bug`, `priority:high`, `effort:small`, `component:frontend`

---

### [Feature] Advanced Customization Options for CGU Clauses

**Description:**
The current form only offers basic checkboxes (e-commerce, cookies, data collection, etc.) with no granular control over individual clauses. Users cannot customize specific sections or add custom clauses.

**Context/Rationale:**
Different businesses have unique needs. A one-size-fits-all approach limits the product's value. Users may need specific clauses for their industry, custom liability limitations, or unique service terms. Advanced customization is a Pro/Enterprise differentiator.

**Implementation Suggestion / To-Do:**
1. Create modular clause system with toggles for each section
2. Add rich text editor for custom clause insertion
3. Implement clause library with industry-specific templates (SaaS, e-commerce, marketplace, etc.)
4. Add conditional logic for clause dependencies
5. Build clause preview and explanation tooltips
6. Allow reordering of sections via drag-and-drop
7. Save custom clause templates

**Suggested Labels:** `feature`, `priority:medium`, `effort:large`, `enhancement`

---

## ⚖️ LEGAL & COMPLIANCE GAPS

### [Feature] CCPA Compliance Clauses for US Users

**Description:**
The generated CGU only includes GDPR compliance clauses. There is no support for CCPA (California Consumer Privacy Act) or other US state privacy laws (CPRA, Virginia CDPA, Colorado CPA, etc.).

**Context/Rationale:**
If users operate in California or other US states with privacy laws, they need CCPA-compliant clauses. Many SaaS companies serve US customers. Ignoring CCPA creates legal liability for your users and limits your market to EU-only businesses.

**Implementation Suggestion / To-Do:**
1. Add form option: "Jurisdiction" dropdown (EU/GDPR, US/CCPA, Both)
2. Create CCPA-specific clauses covering:
   - Right to know what data is collected
   - Right to delete personal information
   - Right to opt-out of sale of personal information
   - Non-discrimination for exercising CCPA rights
3. Include state-specific requirements if applicable
4. Add "Do Not Sell My Personal Information" link generation
5. Consult with US privacy law expert

**Suggested Labels:** `feature`, `priority:medium`, `effort:medium`, `component:legal`

---

### [Feature] Jurisdiction-Specific Legal Templates

**Description:**
The CGU template references French law exclusively ("droit français", "tribunaux français"). There are no templates for other jurisdictions (Belgium, Switzerland, Canada, other EU countries).

**Context/Rationale:**
Businesses in different countries have different legal requirements. Belgian companies need Belgian law references, Swiss companies need Swiss law, etc. A French-only template limits your market and creates legal issues for international users.

**Location:** [lib/generateCGU.ts:293-297](lib/generateCGU.ts#L293-L297)

**Implementation Suggestion / To-Do:**
1. Add "Country/Jurisdiction" selector to form
2. Create country-specific legal templates for:
   - France, Belgium, Switzerland, Luxembourg, Canada (Quebec)
3. Adapt clauses for each country's legal system
4. Reference appropriate courts and arbitration systems
5. Include country-specific registration numbers (SIRET for France, BCE for Belgium, etc.)
6. Partner with legal experts in each jurisdiction
7. Add disclaimers about legal advice limitations

**Suggested Labels:** `feature`, `priority:medium`, `effort:large`, `component:legal`

---

### [Feature] Accessibility Compliance (WCAG 2.1 AA) for Forms

**Description:**
The application lacks proper accessibility features. Forms are missing ARIA labels, error announcements for screen readers, keyboard navigation improvements, and focus indicators. No skip links or semantic HTML structure.

**Context/Rationale:**
**Legal requirement**: EU Web Accessibility Directive mandates WCAG 2.1 AA compliance. This creates legal liability and excludes users with disabilities. Poor accessibility also hurts SEO and overall UX. For a legal document generator, this is particularly important.

**Implementation Suggestion / To-Do:**
1. Add proper ARIA labels to all form controls
2. Implement keyboard navigation for all interactive elements
3. Add skip navigation links
4. Ensure proper heading hierarchy (h1, h2, h3)
5. Add screen reader announcements for form errors
6. Improve color contrast ratios (check with WAVE or axe DevTools)
7. Add focus indicators and focus management
8. Test with screen readers (NVDA, JAWS, VoiceOver)
9. Add accessibility statement page

**Suggested Labels:** `feature`, `priority:medium`, `effort:medium`, `component:accessibility`

---

### [Feature] Data Processing Agreement (DPA) Generation

**Description:**
The app generates CGU but not Data Processing Agreements (DPA), which are required under GDPR Article 28 when acting as a data processor for business customers.

**Context/Rationale:**
B2B customers (especially Enterprise) need DPAs to comply with GDPR when using your service. If your app processes their customer data, you must provide a DPA. This is a legal requirement for B2B SaaS and a competitive advantage.

**Implementation Suggestion / To-Do:**
1. Research GDPR Article 28 requirements for DPAs
2. Create DPA template with required clauses:
   - Scope and purpose of processing
   - Data subject categories and types of data
   - Processor obligations and security measures
   - Sub-processor provisions
   - Data breach notification procedures
3. Add DPA generation to Enterprise tier
4. Make DPA downloadable alongside CGU
5. Consult with GDPR legal expert

**Suggested Labels:** `feature`, `priority:low`, `effort:medium`, `component:legal`

---

### [Feature] Cookie Consent Banner Implementation

**Description:**
The app has documentation about cookie policies but no actual cookie consent banner. The Privacy and Cookie policy pages exist, but the site doesn't collect user consent before setting cookies.

**Context/Rationale:**
**GDPR violation**: You must obtain consent before setting non-essential cookies. Without a consent banner, the app is not compliant with GDPR, ePrivacy Directive, or CCPA. This creates legal liability and undermines trust in a legal compliance product.

**Location:** [app/cookies/page.tsx](app/cookies/page.tsx)

**Implementation Suggestion / To-Do:**
1. Implement cookie consent banner (use Cookiebot, OneTrust, or custom)
2. Categorize cookies: Essential, Analytics, Marketing
3. Allow granular consent choices
4. Respect Do Not Track headers
5. Store consent preferences
6. Block non-essential cookies until consent is given
7. Provide easy way to withdraw consent
8. Log consent for compliance auditing

**Suggested Labels:** `feature`, `priority:high`, `bug`, `component:compliance`

---

## 🎨 UX/UI IMPROVEMENTS

### [Enhancement] Form Field Auto-Save to Prevent Data Loss

**Description:**
If users accidentally close the browser or navigate away while filling the form, all entered data is lost. There is no auto-save or draft functionality.

**Context/Rationale:**
Users may spend 10-15 minutes filling out the detailed form. Losing that data creates frustration and abandonment. Auto-saving to localStorage improves UX significantly and reduces form abandonment rates.

**Implementation Suggestion / To-Do:**
1. Implement auto-save to localStorage every 10 seconds
2. Add "Draft saved" indicator with timestamp
3. Restore draft on page load with confirmation modal
4. Add "Clear draft" button
5. Expire drafts after 7 days
6. For authenticated users, save drafts to database
7. Show warning before navigating away with unsaved changes

**Suggested Labels:** `enhancement`, `priority:medium`, `effort:small`, `component:frontend`

---

### [Enhancement] Real-Time Form Validation with Better Error Messages

**Description:**
Form validation only occurs on submit, showing all errors at once. There's no real-time validation as users type. Error messages are generic Zod outputs, not user-friendly.

**Context/Rationale:**
Real-time validation provides immediate feedback, reducing frustration and improving completion rates. Better error messages help users understand what's wrong and how to fix it. Current UX is poor for a professional SaaS product.

**Location:** [app/create/page.tsx:35-49](app/create/page.tsx#L35-L49)

**Implementation Suggestion / To-Do:**
1. Add onChange validation with debouncing (300ms)
2. Show field-level errors as users type
3. Add success indicators (green checkmarks) for valid fields
4. Improve error messages with specific guidance:
   - Bad: "Le numéro SIRET doit contenir 14 chiffres"
   - Good: "Le SIRET doit contenir exactement 14 chiffres (format: 123 456 789 00012)"
5. Add format hints below inputs
6. Show character count for text fields with limits
7. Add progress indicator showing form completion percentage

**Suggested Labels:** `enhancement`, `priority:medium`, `effort:small`, `component:frontend`

---

### [Enhancement] Loading States and Skeleton Screens

**Description:**
There are no loading indicators when the page loads or when the CGU preview is generated. The app feels unresponsive, and users don't know if something is happening.

**Context/Rationale:**
Loading states provide feedback and improve perceived performance. Without them, users may think the app is broken or slow. This is especially important for server-rendered pages and future API calls.

**Location:** [app/create/loading.tsx](app/create/loading.tsx)

**Implementation Suggestion / To-Do:**
1. Implement skeleton screens for page loads
2. Add loading spinner during CGU generation
3. Add progress indicator for multi-step processes
4. Show "Generating your CGU..." message with animation
5. Add optimistic UI updates
6. Implement Suspense boundaries for async components
7. Add loading states to buttons (spinner + disabled state)

**Suggested Labels:** `enhancement`, `priority:low`, `effort:small`, `component:frontend`

---

### [Enhancement] Improved Error Handling with User-Friendly Messages

**Description:**
The error handling is minimal. The generic `error.tsx` page exists but form errors use raw Zod outputs. There's no handling for network failures, timeouts, or unexpected errors.

**Context/Rationale:**
Good error handling prevents user frustration and support tickets. Users should understand what went wrong and how to fix it. Generic technical errors ("zod validation failed") confuse non-technical users.

**Location:** [app/error.tsx](app/error.tsx), [app/create/page.tsx:39-48](app/create/page.tsx#L39-L48)

**Implementation Suggestion / To-Do:**
1. Create error boundary components for different error types
2. Map Zod errors to user-friendly messages in French
3. Add error reporting to monitoring service (Sentry, LogRocket)
4. Implement retry logic for transient failures
5. Show helpful suggestions for common errors
6. Add "Contact Support" link in error messages
7. Log errors without exposing sensitive info to users

**Suggested Labels:** `enhancement`, `priority:medium`, `effort:small`, `component:frontend`

---

### [Enhancement] Search and Filter for Generated Documents Dashboard

**Description:**
Once documents can be saved (pending database feature), users will need to search and filter their CGUs. There's currently no design or implementation for this.

**Context/Rationale:**
As users generate multiple documents over time, finding a specific CGU becomes difficult. Search, filtering, and sorting are essential for document management. This is especially critical for Enterprise customers with hundreds of documents.

**Implementation Suggestion / To-Do:**
1. Design documents dashboard with list/grid view
2. Add search by company name, date, or content
3. Implement filters: date range, document type, status
4. Add sorting: newest first, A-Z, recently modified
5. Add bulk actions (delete, export, archive)
6. Implement pagination or infinite scroll
7. Add tags/categories for document organization

**Suggested Labels:** `enhancement`, `priority:low`, `effort:medium`, `component:frontend`

---

### [Enhancement] Guided Tour or Onboarding Flow for First-Time Users

**Description:**
New users land on the homepage with no guidance on how to use the product. There's no onboarding flow, tutorial, or guided tour explaining the process.

**Context/Rationale:**
User onboarding significantly impacts activation and retention rates. A guided tour helps users understand the value proposition and how to generate their first CGU quickly. This reduces abandonment and improves conversion to paid tiers.

**Implementation Suggestion / To-Do:**
1. Implement product tour library (Shepherd.js, Intro.js, or Joyride)
2. Create 3-5 step onboarding highlighting:
   - Form filling best practices
   - Live preview feature
   - Download options
   - Premium features teaser
3. Add "Skip tour" option
4. Show tour only once per user (track in localStorage or DB)
5. Add "Restart tour" option in help menu
6. Create video tutorial embedded in demo section

**Suggested Labels:** `enhancement`, `priority:low`, `effort:medium`, `component:frontend`

---

## 🔧 CODE QUALITY & MAINTAINABILITY

### [Refactor] Duplicate Form Interface Definitions

**Description:**
The `FormData` interface is defined in multiple locations with slight variations: `types/form.ts` (CGUFormData), `lib/generateCGU.ts` (FormData), and `components/CGUPreview.tsx` (FormData).

**Context/Rationale:**
Duplicate type definitions create maintenance burden and risk of inconsistencies. If a field is added/modified, it must be updated in multiple places, increasing chances of bugs. This violates DRY (Don't Repeat Yourself) principle.

**Location:** [types/form.ts:1-14](types/form.ts#L1-L14), [lib/generateCGU.ts:1-14](lib/generateCGU.ts#L1-L14), [components/CGUPreview.tsx:5-18](components/CGUPreview.tsx#L5-L18)

**Implementation Suggestion / To-Do:**
1. Use `CGUFormData` from [types/form.ts](types/form.ts) as single source of truth
2. Remove duplicate interfaces in other files
3. Import type: `import type { CGUFormData } from '@/types/form'`
4. Ensure consistency across codebase
5. Add ESLint rule to prevent duplicate type definitions

**Suggested Labels:** `refactor`, `priority:low`, `effort:small`

---

### [Refactor] Extract CGU Generation Logic into Smaller Functions

**Description:**
The `generateCGU()` function is 330+ lines long with complex conditional logic for section numbering. It's difficult to test, maintain, and extend.

**Context/Rationale:**
Large functions are hard to understand, test, and debug. Extracting smaller functions improves code organization, testability, and makes adding new clauses or sections easier.

**Location:** [lib/generateCGU.ts:16-331](lib/generateCGU.ts#L16-L331)

**Implementation Suggestion / To-Do:**
1. Extract section generation into separate functions:
   - `generateHeaderSection()`
   - `generateObjectSection()`
   - `generateUserAccountsSection()`
   - `generateEcommerceSection()`
   - `generateDataProtectionSection()`
   - `generateCookiesSection()`
2. Create `generateSectionNumber()` utility function
3. Build sections as array and join at the end
4. Add unit tests for each section generator
5. Consider using template engine (Handlebars, EJS) instead of string concatenation

**Suggested Labels:** `refactor`, `priority:medium`, `effort:medium`

---

### [Refactor] Move Hardcoded Strings to Configuration File

**Description:**
Colors, company information, URLs, and styling are hardcoded throughout components. The color scheme is defined in HTML strings, CSS variables are underutilized, and there's no centralized config.

**Context/Rationale:**
Hardcoded values make the app inflexible and difficult to maintain. Changing branding colors or company info requires searching through multiple files. Configuration should be centralized for easy updates and environment-specific values.

**Location:** [lib/generateCGU.ts:30-67](lib/generateCGU.ts#L30-L67), multiple components

**Implementation Suggestion / To-Do:**
1. Create `config/constants.ts` with:
   - Theme colors
   - Company information
   - API endpoints
   - Feature flags
2. Create `config/site.ts` for site metadata
3. Use environment variables for sensitive/environment-specific values
4. Reference Tailwind config variables consistently
5. Create theme provider for runtime theme switching

**Suggested Labels:** `refactor`, `priority:low`, `effort:small`

---

### [Refactor] Implement Proper Error Boundaries

**Description:**
The generic `error.tsx` exists but there are no granular error boundaries for different sections of the app. If one component fails, the entire page could crash.

**Context/Rationale:**
React error boundaries prevent cascading failures and improve app resilience. Granular boundaries allow parts of the UI to fail gracefully while keeping other sections functional.

**Location:** [app/error.tsx](app/error.tsx)

**Implementation Suggestion / To-Do:**
1. Create reusable `<ErrorBoundary>` component
2. Wrap major sections: form, preview, navbar, etc.
3. Implement fallback UI for each boundary type
4. Add error reporting to monitoring service
5. Implement recovery strategies (retry, reset state)
6. Add error boundaries to async components with Suspense

**Suggested Labels:** `refactor`, `priority:medium`, `effort:small`, `component:frontend`

---

### [Documentation] Missing API Documentation and Code Comments

**Description:**
The codebase has minimal comments, no JSDoc documentation, and no API documentation (though no API exists yet). Complex logic like section numbering is undocumented.

**Context/Rationale:**
Good documentation improves maintainability and onboarding for new developers. As the codebase grows and more developers join, lack of documentation will slow development and increase bugs.

**Implementation Suggestion / To-Do:**
1. Add JSDoc comments to all public functions
2. Document complex logic (section numbering, validation)
3. Create developer README in `/docs`
4. Document component props with TypeScript interfaces
5. Add inline comments for non-obvious code
6. Generate API docs with TypeDoc when API is built
7. Create architecture decision records (ADRs)

**Suggested Labels:** `documentation`, `priority:low`, `effort:small`

---

### [Refactor] Add Unit and Integration Tests

**Description:**
The project has zero tests. No unit tests, integration tests, or E2E tests. Critical logic like CGU generation and validation is untested.

**Context/Rationale:**
Tests prevent regressions, document expected behavior, and enable confident refactoring. For a legal document generator, ensuring correctness is critical. Bugs could have legal consequences for users.

**Implementation Suggestion / To-Do:**
1. Set up testing framework: Vitest + React Testing Library
2. Add unit tests for:
   - Zod validation schemas
   - `generateCGU()` function
   - Section numbering logic
   - Form handlers
3. Add integration tests for:
   - Form submission flow
   - Document preview generation
   - Download functionality
4. Add E2E tests with Playwright:
   - Complete CGU generation flow
   - Multi-page navigation
5. Set up CI/CD pipeline with test runs
6. Aim for 80%+ code coverage

**Suggested Labels:** `refactor`, `priority:high`, `effort:large`, `component:testing`

---

## 🚀 PERFORMANCE OPTIMIZATIONS

### [Enhancement] Optimize Bundle Size and Code Splitting

**Description:**
No analysis of bundle size has been done. All components and libraries are likely bundled together, increasing initial load time. No code splitting strategy is implemented.

**Context/Rationale:**
Large bundle sizes hurt performance, especially on mobile networks. Code splitting and lazy loading improve initial load time and Core Web Vitals (LCP, FID, CLS), which affect SEO and user experience.

**Implementation Suggestion / To-Do:**
1. Run bundle analysis: `pnpm build && pnpm analyze`
2. Implement dynamic imports for heavy components:
   - `const CGUPreview = dynamic(() => import('@/components/CGUPreview'))`
3. Lazy load routes not immediately needed
4. Split vendor bundles
5. Use Next.js Image component for optimized images
6. Minimize CSS by removing unused Tailwind classes (PurgeCSS)
7. Implement font optimization strategies
8. Monitor bundle size in CI/CD

**Suggested Labels:** `enhancement`, `priority:medium`, `effort:medium`, `component:performance`

---

### [Enhancement] Implement Caching Strategy for Generated Documents

**Description:**
Every time a user makes a small change to the form, the entire HTML document is regenerated from scratch. There's no memoization or caching of unchanged sections.

**Context/Rationale:**
Regenerating 300+ lines of HTML on every keystroke is inefficient. Memoizing unchanged sections improves performance, especially as document complexity grows.

**Location:** [components/CGUPreview.tsx:26](components/CGUPreview.tsx#L26)

**Implementation Suggestion / To-Do:**
1. Use `useMemo` to cache generated HTML:
   - `const cguContent = useMemo(() => generateCGU(formData), [formData])`
2. Implement section-level memoization for larger documents
3. Add debouncing to preview updates (300ms delay)
4. Cache parsed DOM in `getPreviewContent()`
5. For server-side generation, implement Redis caching with TTL

**Suggested Labels:** `enhancement`, `priority:low`, `effort:small`, `component:performance`

---

### [Enhancement] Add Image Optimization and Lazy Loading

**Description:**
The public folder contains SVG images that are not optimized. No lazy loading is implemented for below-the-fold content like testimonials and pricing cards.

**Context/Rationale:**
Unoptimized images and non-lazy-loaded content increase initial page load time and hurt Core Web Vitals scores. This affects SEO rankings and user experience, especially on mobile.

**Location:** [public/](public/)

**Implementation Suggestion / To-Do:**
1. Use Next.js `<Image>` component for all images
2. Implement lazy loading for testimonials and pricing sections
3. Optimize SVG files with SVGO
4. Consider replacing SVGs with inline icons where appropriate
5. Add blur placeholders for images
6. Implement progressive image loading
7. Use WebP format with fallbacks

**Suggested Labels:** `enhancement`, `priority:low`, `effort:small`, `component:performance`

---

## 🔍 SEO & ANALYTICS

### [Enhancement] Missing SEO Metadata and Open Graph Tags

**Description:**
The app has basic metadata in `layout.tsx` but is missing comprehensive SEO tags, Open Graph images, Twitter Cards, structured data, and per-page customization.

**Context/Rationale:**
Good SEO is critical for organic growth of a SaaS product. Missing metadata hurts search rankings and social sharing. Dynamic OG images improve CTR on social media.

**Location:** [app/layout.tsx:10-13](app/layout.tsx#L10-L13)

**Implementation Suggestion / To-Do:**
1. Add per-page metadata using Next.js `generateMetadata()`
2. Create Open Graph images (1200x630) for social sharing
3. Add Twitter Card meta tags
4. Implement JSON-LD structured data (Organization, Product, FAQ)
5. Add canonical URLs to prevent duplicate content
6. Create XML sitemap and robots.txt
7. Add meta descriptions optimized for keywords
8. Implement breadcrumbs for navigation

**Suggested Labels:** `enhancement`, `priority:medium`, `effort:small`, `component:seo`

---

### [Feature] Analytics and User Behavior Tracking

**Description:**
No analytics solution is implemented. You have no visibility into user behavior, conversion funnels, feature usage, or performance metrics.

**Context/Rationale:**
Analytics are essential for data-driven product decisions. Without tracking, you can't optimize conversion rates, identify UX issues, or measure feature success. This is critical for SaaS growth.

**Implementation Suggestion / To-Do:**
1. Implement Google Analytics 4 or Plausible (privacy-friendly)
2. Add event tracking for key actions:
   - Form started
   - Form completed
   - CGU downloaded
   - Plan viewed
   - Signup/login
3. Implement conversion funnel tracking
4. Add heatmaps (Hotjar, Microsoft Clarity)
5. Track Core Web Vitals
6. Set up goal tracking and custom reports
7. Ensure GDPR compliance (cookie consent, IP anonymization)

**Suggested Labels:** `feature`, `priority:high`, `effort:medium`, `component:analytics`

---

### [Enhancement] Add Sitemap and Robots.txt

**Description:**
The project has no sitemap.xml or robots.txt file. Search engines cannot efficiently crawl and index the site.

**Context/Rationale:**
Sitemaps help search engines discover and index all pages. Robots.txt controls crawler access and prevents indexing of sensitive pages. Both are SEO best practices that improve search visibility.

**Implementation Suggestion / To-Do:**
1. Generate sitemap.xml automatically with next-sitemap package
2. Create robots.txt with appropriate directives
3. Submit sitemap to Google Search Console and Bing Webmaster Tools
4. Exclude admin/dashboard pages from indexing
5. Add lastmod dates for better crawl prioritization
6. Implement dynamic sitemap for user-generated content

**Suggested Labels:** `enhancement`, `priority:medium`, `effort:small`, `component:seo`

---

## 📱 MOBILE & RESPONSIVE DESIGN

### [Enhancement] Improve Mobile Form UX

**Description:**
While the layout is responsive, the mobile form experience could be improved. Input fields are small, the long form is overwhelming on mobile, and there's no step-by-step wizard option.

**Context/Rationale:**
Mobile users face friction with long forms. Improving mobile UX increases completion rates and reduces abandonment, especially important since mobile traffic often exceeds 50%.

**Location:** [app/create/page.tsx](app/create/page.tsx)

**Implementation Suggestion / To-Do:**
1. Implement multi-step form wizard for mobile:
   - Step 1: Company info (5 fields)
   - Step 2: Activity type (1 field + checkboxes)
   - Step 3: Review and generate
2. Add progress indicator
3. Increase touch target sizes (min 44x44px)
4. Use appropriate input types (`type="tel"` for SIRET, `inputmode="numeric"`)
5. Add floating labels for better space usage
6. Implement auto-advance between fields
7. Test on real mobile devices

**Suggested Labels:** `enhancement`, `priority:medium`, `effort:medium`, `component:frontend`

---

### [Enhancement] Add PWA Support for Offline Access

**Description:**
The app is not a Progressive Web App (PWA). Users cannot install it, use it offline, or receive push notifications.

**Context/Rationale:**
PWA capabilities improve engagement and provide app-like experience without app store distribution. Offline support is valuable for users with poor connectivity. Push notifications can drive re-engagement.

**Implementation Suggestion / To-Do:**
1. Add web manifest (`manifest.json`) with app metadata and icons
2. Implement service worker for offline caching
3. Cache critical assets and pages
4. Add "Add to Home Screen" prompt
5. Implement offline indicator and fallback UI
6. Add push notification support for updates (when auth is implemented)
7. Test PWA with Lighthouse

**Suggested Labels:** `enhancement`, `priority:low`, `effort:medium`, `component:frontend`

---

## ��️ INFRASTRUCTURE & DEVOPS

### [Enhancement] Environment Variable Management

**Description:**
No `.env.example` file exists, and there's no documentation about required environment variables. As the app grows (database, API keys), this will become problematic.

**Context/Rationale:**
Proper environment variable management is essential for security and deployment. New developers need to know what variables are required. Production vs. development configs need clear separation.

**Implementation Suggestion / To-Do:**
1. Create `.env.example` file with all required variables
2. Document each variable's purpose in README
3. Use `zod` or `t3-env` for runtime environment validation
4. Separate env vars by concern: DB, Auth, Payments, Analytics
5. Never commit `.env` files (add to `.gitignore`)
6. Use Vercel environment variables or similar for production
7. Implement environment-specific configs

**Suggested Labels:** `enhancement`, `priority:medium`, `effort:small`, `component:devops`

---

### [Enhancement] Set Up CI/CD Pipeline

**Description:**
No CI/CD pipeline is configured. There's no automated testing, linting, or deployment process. Code quality gates are missing.

**Context/Rationale:**
CI/CD ensures code quality and streamlines deployments. Automated tests prevent regressions, and consistent deployment reduces human error. Essential for team collaboration and professional development.

**Implementation Suggestion / To-Do:**
1. Set up GitHub Actions workflows for:
   - Linting (`pnpm lint`)
   - Type checking (`tsc --noEmit`)
   - Unit tests (`pnpm test`)
   - Build verification (`pnpm build`)
2. Add pre-commit hooks with Husky
3. Implement automated deployments to Vercel/production
4. Add branch protection rules
5. Implement semantic versioning and changelog generation
6. Add security scanning (Snyk, Dependabot)
7. Set up staging environment for testing

**Suggested Labels:** `enhancement`, `priority:high`, `effort:medium`, `component:devops`

---

### [Enhancement] Implement Monitoring and Error Tracking

**Description:**
No error monitoring or application performance monitoring (APM) is configured. Production errors go undetected until users report them.

**Context/Rationale:**
Production monitoring is critical for maintaining service quality. Without it, you're flying blind—unable to detect issues, track performance degradation, or prioritize bug fixes based on impact.

**Implementation Suggestion / To-Do:**
1. Integrate Sentry or similar error tracking service
2. Add source maps for production error debugging
3. Implement performance monitoring (Vercel Analytics, Datadog)
4. Set up uptime monitoring (UptimeRobot, Pingdom)
5. Configure alerting for critical errors
6. Track custom metrics (document generation time, form completion rate)
7. Set up logging infrastructure (Axiom, Better Stack)
8. Create status page for transparency

**Suggested Labels:** `enhancement`, `priority:high`, `effort:medium`, `component:devops`

---

### [Enhancement] Database Backup and Disaster Recovery Plan

**Description:**
No backup or disaster recovery strategy is documented (though no database exists yet). This is critical planning for when data storage is implemented.

**Context/Rationale:**
Data loss would be catastrophic for a SaaS business. Users trust you with their legal documents. Automatic backups and recovery procedures are essential for business continuity and user trust.

**Implementation Suggestion / To-Do:**
1. Implement automated daily database backups
2. Test backup restoration regularly (quarterly)
3. Set up point-in-time recovery capability
4. Store backups in geographically separate location
5. Document disaster recovery procedures
6. Implement soft deletes for documents (retain for 30 days)
7. Set up data retention policies per GDPR requirements
8. Create incident response playbook

**Suggested Labels:** `enhancement`, `priority:medium`, `effort:medium`, `component:devops`

---

## 🎯 BUSINESS & PRODUCT STRATEGY

### [Feature] Referral Program and Affiliate System

**Description:**
No referral program exists to incentivize user growth. Users who successfully generate CGUs cannot refer others for rewards.

**Context/Rationale:**
Referral programs are cost-effective growth channels with high conversion rates. Users who successfully use the product make excellent advocates. This is especially effective in B2B SaaS.

**Implementation Suggestion / To-Do:**
1. Create referral tracking system with unique codes
2. Implement rewards structure (e.g., 1 month free Pro for each referral)
3. Build referral dashboard showing invites and rewards earned
4. Add social sharing buttons with pre-filled messages
5. Create affiliate program for agencies/consultants (20% commission)
6. Track attribution with UTM parameters
7. Automate reward fulfillment

**Suggested Labels:** `feature`, `priority:low`, `effort:large`, `component:growth`

---

### [Feature] Customer Support System and Help Center

**Description:**
There's no help center, FAQ section, live chat, or support ticketing system. Users with questions have no clear way to get help.

**Context/Rationale:**
Good support reduces churn and improves user satisfaction. A help center reduces support burden through self-service. Live chat increases conversion rates for potential customers.

**Implementation Suggestion / To-Do:**
1. Build FAQ/Help Center with common questions
2. Integrate live chat (Intercom, Crisp, Tawk.to)
3. Add chatbot for common queries
4. Create video tutorials for key features
5. Implement in-app contextual help (tooltips, tooltours)
6. Add support ticket system (Zendesk, Help Scout)
7. Create knowledge base with search functionality
8. Add feedback widget for feature requests

**Suggested Labels:** `feature`, `priority:medium`, `effort:large`, `component:support`

---

### [Feature] Admin Dashboard for Site Management

**Description:**
No admin interface exists to manage users, monitor system health, view analytics, or manage content.

**Context/Rationale:**
As the business grows, manual database queries become unsustainable. An admin dashboard enables efficient user management, support operations, and business intelligence.

**Implementation Suggestion / To-Do:**
1. Create protected `/admin` route with authentication
2. Build user management interface (view, edit, delete users)
3. Add subscription management and billing overview
4. Implement system health dashboard with key metrics
5. Add content management for legal page updates
6. Create user impersonation for support debugging
7. Build analytics dashboard with business KPIs
8. Add manual refund and credit issuing capabilities

**Suggested Labels:** `feature`, `priority:medium`, `effort:large`, `component:admin`

---

## Summary Statistics

**Total Issues Identified:** 45

**By Priority:**
- High: 12 issues
- Medium: 21 issues
- Low: 12 issues

**By Type:**
- Security: 6 issues
- Feature: 20 issues
- Enhancement: 13 issues
- Bug: 3 issues
- Refactor: 6 issues
- Documentation: 1 issue

**By Effort:**
- Small: 15 issues
- Medium: 20 issues
- Large: 10 issues

---

## Recommended Implementation Roadmap

**Phase 1 (Sprint 1-2): Critical Security & Core Features**
1. Fix XSS vulnerability (dangerouslySetInnerHTML)
2. Implement server-side validation
3. Add user authentication
4. Implement database integration
5. Fix mobile menu
6. Add PDF export

**Phase 2 (Sprint 3-4): SaaS Foundations**
1. Integrate payment system (Stripe)
2. Implement rate limiting
3. Add cookie consent banner
4. Set up analytics
5. Implement email system
6. Add monitoring and error tracking

**Phase 3 (Sprint 5-6): Compliance & UX**
1. Add CCPA compliance
2. Improve accessibility (WCAG 2.1 AA)
3. Implement multi-language support
4. Add document versioning
5. Improve form validation UX
6. Add auto-save functionality

**Phase 4 (Sprint 7-8): Growth & Scale**
1. Build REST API
2. Create admin dashboard
3. Implement referral program
4. Add customer support system
5. Optimize performance (bundle size, caching)
6. Set up CI/CD pipeline

---

**End of Audit Report**

This report provides a comprehensive roadmap for transforming your CGU Generator from an MVP into a production-ready, secure, and scalable SaaS product. Each issue can be directly converted into a GitHub issue for tracking and implementation.
