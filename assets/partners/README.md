# Partner Logos

Add your partner organization logos to this folder.

## Required Partner Logos

Please add logos for the following partners:

1. **`uniport-loans.png`** - Uniport Loans Ltd
2. **`apceiu.png`** - APCEIU (Asia-Pacific Centre of Education for International Understanding)
3. **`biji-biji.png`** - Biji Biji Initiative
4. **`government-kenya.png`** - The Government of Kenya
5. **`ministry-education.png`** - Ministry of Education (Kenya)

## Logo Specifications

**Recommended specifications:**
- **Format:** PNG with transparent background (preferred) or JPG
- **Dimensions:** 300x150px or similar rectangular ratio (landscape orientation works best)
- **File size:** Under 200KB for optimal loading
- **Quality:** High resolution, clear and professional
- **Background:** Transparent (PNG) preferred for best appearance

## Design Considerations

The logos will be displayed:
- In grayscale by default (color on hover)
- At max 80px height (desktop) and 60px (mobile)
- With proper aspect ratio maintained
- In a responsive grid (up to 3 columns on desktop, 2 on mobile)

## Where to Find Official Logos

**Tips for obtaining partner logos:**
1. Visit the official website of each organization
2. Look for "Press Kit", "Media Resources", or "Brand Assets" pages
3. Download the highest quality version available
4. Prefer PNG format with transparent background
5. If only JPG is available, choose the version with a white background

**Government of Kenya / Ministry of Education:**
- Look for official government portals
- Use official coat of arms or ministry logo as appropriate
- Ensure you have permission to use government logos

## Current Status

✅ Partner names updated in the website
⏳ Waiting for logo files to be added:
- [ ] uniport-loans.png
- [ ] apceiu.png
- [ ] biji-biji.png
- [ ] government-kenya.png
- [ ] ministry-education.png

Once you add the logo files with the exact names above, they will automatically appear on the homepage!

## To Add More Partners

**Edit:** `src/pages/Home.tsx`

Add a new partner-logo-container div:
```jsx
<div className="partner-logo-container">
  <img src="/assets/partners/new-partner.png" alt="Partner Name" className="partner-logo" />
</div>
```
