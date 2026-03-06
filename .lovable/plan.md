

## PrimeSky International — Full Website Plan

### Overview
A bilingual (Bangla default + English) travel agency website with a public-facing site and a separate admin panel. All content is managed via a built-in CMS using JSON data files (no external backend dependencies). The logo will be embedded from the uploaded resource.

---

### 🌐 Public Website Pages

**1. Homepage**
- Hero banner with tagline "Your Journey, Our Priority" / "আপনার যাত্রা, আমাদের অগ্রাধিকার"
- Featured services section (Hajj & Umrah, Tour Packages, Air Ticket, Hotel Booking)
- Umrah special offer card (Starting from BDT 135,000)
- Visa processing rates table (Thailand, Malaysia, Singapore, etc.)
- "Fly With Best Fare" promotional section (Dubai/Malaysia/Saudi/India)
- Special tour packages section (Cox's Bazar/Thailand/Dubai — 3 Days 2 Nights)
- Contact info bar with phone & WhatsApp
- Language toggle button (বাংলা / English)

**2. Services Pages**
- Hajj & Umrah page with packages and details
- Tour Packages listing with filtering
- Air Ticket inquiry page
- Hotel Booking inquiry page
- Visa Processing page with full country/rate table

**3. About Us Page**

**4. Contact Page** — Address, map placeholder, phone, WhatsApp link, inquiry form

**5. Packages/Offers Page** — All current promotions and deals

---

### 👤 User Panel (Customer)
- Booking inquiry form (select service, fill details, submit)
- Inquiry status tracker (view submitted requests and their status)
- WhatsApp quick contact integration

---

### 🔧 Admin Panel (Separate Route: `/admin`)
- Login with hardcoded admin credentials (stored in a config)
- **Dashboard** with inquiry/booking overview
- **CMS Pages:**
  - Edit Homepage content (hero text, banners, offers)
  - Edit all page content (About, Contact, Services)
  - Manage Packages & Offers (CRUD)
  - Manage Visa Rates table (CRUD)
  - Manage Air Ticket promotions
- **Booking/Inquiry Management** — View, update status, respond
- **Settings** — Company info, contact details, social links

All CMS data stored in browser's localStorage (since no backend). This allows full editing from admin panel. For VPS deployment, the data layer can be swapped to a real API.

---

### 🎨 Design
- Navy blue & silver/gray color scheme matching the PrimeSky logo
- Professional travel industry aesthetic
- Mobile-responsive throughout
- PrimeSky logo in header/navbar
- Bangla typography with proper font support (e.g., Noto Sans Bengali)

---

### 🗂 Structure
- ~15 components for public site
- ~10 components for admin panel
- Translation system with Bangla/English JSON files
- localStorage-based data persistence for CMS

