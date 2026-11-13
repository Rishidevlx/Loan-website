/**
 * Theme Configuration - Single Source of Truth for Bharath Finserv
 * 
 * Future-la colors or typography styles mathanum na, indha oru file-la matum
 * change panna podhum. Entire website-kum automatically apply aagum!
 */

export const themeConfig = {
  // 🎨 Color Palette (From Theme.md & Logo)
  colors: {
    primary: "#2563EB",            // Bright Vibrant Light Blue
    primaryHover: "#1D4ED8",       // Primary Hover Blue
    primaryLight: "#EFF6FF",       // Soft Blue Tint (10% tint)
    primaryBorder: "#BFDBFE",      // Soft Blue Border
    
    accent: "#38BDF8",             // Light Sky / Cyan Accent
    
    // Contrast Deep Navy (From Bharath Finserve Logo - used for Contrast Footer & dark badges)
    navy: "#113764",
    navyDark: "#0B2545",
    navyLight: "#1E4A80",
    
    // Backgrounds
    bgMain: "#FFFFFF",             // Background 1 (Pure White)
    bgAlt: "#EDF0EC",              // Background 2 / Section Alternate (#EDF0EC)
    sectionProductsBg: "#EDF0EC",  // Loan Products Section Background
    cardBg: "#FFFFFF",
    
    // Text Colors
    textHeading: "#222E48",        // From Theme.md Section Heading
    textBody: "#475569",           // Slate 600 - High readability
    textMuted: "#64748B",          // Slate 500
    textLight: "#F8FAFC",          // Light text for dark/contrast backgrounds
    
    // Borders & Dividers
    border: "#E2E8F0",
    borderNavy: "#1E3A5F",
  },

  // ✍️ Typography (From Theme.md)
  typography: {
    fontFamily: "'Jost', sans-serif",
    
    // Section Heading (Theme.md)
    sectionHeading: {
      fontFamily: "'Jost', sans-serif",
      fontSize: "40px",
      fontWeight: "600",
      color: "#222E48",
      lineHeight: "1.2",
    },
    
    // Content / Body Style (Theme.md)
    body: {
      fontFamily: "'Jost', sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      color: "#475569",
      lineHeight: "1.6",
    },
  },

  // 📐 Layout & Dimensions
  layout: {
    containerMaxWidth: "1380px",
    headerHeight: "80px",
  },

  // 🪄 Animation Timings
  transitions: {
    fast: "150ms ease-in-out",
    normal: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    dropdown: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  }
};

export default themeConfig;
