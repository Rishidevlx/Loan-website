
export const themeConfig = {
 
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
    
    // Text Colors (Exact #262626 Soft Charcoal from inspection)
    textHeading: "#262626",        // Primary Headings
    textBody: "#262626",           // High readability body text
    textMuted: "#666666",          // Subtle secondary text
    textLight: "#F8FAFC",          // Light text for dark/contrast backgrounds
    
    // Borders & Dividers
    border: "#E2E8F0",
    borderNavy: "#1E3A5F",
  },

 
  typography: {
    fontFamily: "'Poppins', sans-serif",
    
    // Hero & Main Headings (H1: 49.2px, weight 500)
    heroHeading: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "49.2px",
      fontWeight: "500",
      color: "#262626",
      lineHeight: "1.2",
    },

    // Section Headings (H2 / Cards: 24.6px, weight 400)
    sectionHeading: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "24.6px",
      fontWeight: "400",
      color: "#262626",
      lineHeight: "1.35",
    },
    
    // Body / Paragraphs (18.45px, weight 300)
    body: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "18.45px",
      fontWeight: "300",
      color: "#262626",
      lineHeight: "1.6",
    },
  },


  layout: {
    containerMaxWidth: "1380px",
    headerHeight: "80px",
  },


  transitions: {
    fast: "150ms ease-in-out",
    normal: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    dropdown: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  }
};

export default themeConfig;
