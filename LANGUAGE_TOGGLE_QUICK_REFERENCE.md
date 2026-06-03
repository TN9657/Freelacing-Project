# Language System - Quick Reference Guide

## 🎯 Overview
The website now supports complete bilingual interface with English and Marathi, with seamless language switching.

## 📍 Where to Find the Language Toggle

**Desktop**: Top-right corner of navbar
- Globe icon with language code (EN/MR)
- Click to open dropdown
- Select English or Marathi

**Mobile**: Below navigation links
- Language section with two buttons: "English" and "मराठी"
- Click desired language button
- Mobile menu closes after selection

## 🗂️ Translation Structure

All translations are stored in `src/lib/translations.ts` with structure:
```typescript
translations = {
  en: {
    section: {
      key: "English text"
    }
  },
  mr: {
    section: {
      key: "मराठी मजकूर"
    }
  }
}
```

## 📋 Available Translation Keys

### Navbar Section
- `navbar.home` - होम
- `navbar.about` - आमच्याबद्दल
- `navbar.properties` - मालमत्ता
- `navbar.contact` - संपर्क
- `navbar.getInTouch` - संपर्क साधा

### Hero Section
- `hero.eyebrow` - Luxury Living • Trusted Investments
- `hero.title` - आपले स्वप्नचे मालमत्ता शोधा
- `hero.subtitle` - मोहकतेने
- `hero.exploreProperties` - मालमत्ता एक्सप्लोर करा
- `hero.scheduleVisit` - भेट शेड्यूल करा

### Categories Section
- `categories.title` - मालमत्ता श्रेणी
- `categories.residential` - आवासीय
- `categories.commercial` - व्यावसायिक
- `categories.naPlots` - एन.ए. प्लॉट्स व जमीन
- `categories.investment` - गुंतवणूक

### Statistics Section
- `stats.properties` - विक्री केलेली मालमत्ता
- `stats.clients` - खुश क्लायंट्स
- `stats.experience` - वर्षांचा अनुभव
- `stats.locations` - स्थान व्यापित

### Contact Section
- `contact.title` - संपर्क साधा
- `contact.name` - नाव
- `contact.email` - ईमेल
- `contact.phone` - फोन
- `contact.send` - अन्वेषण पाठवा
- `contact.thanks` - धन्यवाद — आम्ही एका व्यावसायिक दिवसाभित्र संपर्क साधू.

### Footer Section
- `footer.description` - भारतभर विश्वास्त रिअल-एस्टेट अनुभव...
- `footer.explore` - एक्सप्लोर करा
- `footer.categories` - श्रेणी
- `footer.copyright` - © {year} TempCompany Realty. सर्व अधिकार राखीव.

## 💻 Code Examples

### Using Language in a Component
```tsx
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export function MyComponent() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <button>{t.navbar.getInTouch}</button>
    </div>
  );
}
```

### Conditional Rendering Based on Language
```tsx
const { language } = useLanguage();

return (
  <div>
    {language === 'en' ? 'Search' : 'शोध'}
  </div>
);
```

### Getting Current Language
```tsx
const { language, toggleLanguage, setLanguage } = useLanguage();

// language = 'en' or 'mr'
// toggleLanguage() - switches between en and mr
// setLanguage('mr') - sets specific language
```

## 🎨 Feature Highlights

### Language Toggle Button
```tsx
// The button shows:
- Globe icon
- Current language code (EN/MR)
- Click to show dropdown with both language options
- Selected language highlighted with gradient background
```

### Responsive Design
```tsx
// Desktop
- Horizontal language toggle in top-right navbar

// Mobile
- Dedicated language section below navigation links
- Two full-width buttons for language selection
```

### Persistent Storage
```tsx
// Language preference automatically saved to localStorage
// Retrieved on page reload/refresh
// Key: 'language'
// Value: 'en' or 'mr'
```

## 🔄 Language Switching Flow

1. User clicks globe icon (EN/MR)
2. Dropdown menu appears with both languages
3. User clicks desired language
4. `setLanguage()` is called
5. Language stored in localStorage
6. All components using `useLanguage()` re-render
7. UI instantly updates to new language

## 📱 Mobile Implementation

### Navigation
```tsx
<button onClick={() => setLanguage('en')}>English</button>
<button onClick={() => setLanguage('mr')}>मराठी</button>
```

### Auto-closes Menu
Language selection automatically closes mobile menu to improve UX

## ✅ Testing Checklist

- [x] Toggle button visible on desktop
- [x] Toggle button visible on mobile
- [x] Dropdown appears on click
- [x] Both languages selectable
- [x] Content updates on language change
- [x] Language persists after page reload
- [x] All components translated
- [x] Responsive on all screen sizes
- [x] No console errors
- [x] Marathi fonts render correctly

## 🚀 Performance

- All translations bundled with app (no API calls)
- Instant language switching (no loading delays)
- Minimal re-renders with React Context
- LocalStorage for fast preference retrieval
- Optimized component updates

## 🔮 Future Enhancements

Potential additions:
- Additional languages (Hindi, Gujarati, etc.)
- Language auto-detection by browser
- Language-specific metadata (direction, fonts)
- Translation management system
- Real-time translation updates

## 📞 Support

For issues or to add new translations:
1. Update `src/lib/translations.ts`
2. Add key-value pairs for both languages
3. Use new key in components via `t.section.key`
4. Test in both EN and MR modes

---

**Current Status**: ✅ Fully Implemented and Production Ready
