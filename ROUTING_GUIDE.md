# Custom JavaScript Routing Implementation

This project uses a **custom hash-based routing system** without any third-party routing libraries like React Router.

## 📋 Architecture Overview

```
┌─────────────┐
│   main.jsx  │ - Entry point, renders App with Navigation & Router
├─────────────┤
│   App       │ - Main component combining Navigation and routing
├─────────────┤
│ Navigation  │ - Navigation bar with links to all routes
│   Router    │ - Handles route rendering based on hash
├─────────────┤
│ Route Pages │ - Home, About, Contact components
└─────────────┘
```

## 🔧 Core Components

### 1. **Router.jsx** - Route Management Utility
Handles all routing logic with simple functions:

```javascript
// Route Configuration
export const routes = {
  home: { path: "#", component: Home, label: "Home" },
  about: { path: "#about", component: About, label: "About" },
  contact: { path: "#contact", component: Contact, label: "Contact" },
};

// Utility Functions
getCurrentRoute()      // Get current route hash
getRouteByPath(path)   // Get route object by path
navigateTo(path)       // Navigate to route
```

**How it works:**
- Routes are stored in a configuration object for easy management
- Listens to `hashchange` events when URL hash changes
- Maps hash to corresponding React component
- Updates component state when route changes

### 2. **Navigation.jsx** - Navigation Component
Displays navigation links for all available routes:

- Dynamic menu generation from `routes` configuration
- Active route highlighting
- Click handlers that update the hash without page reload
- Responsive design with mobile support

### 3. **main.jsx** - Application Entry Point
Simplified main component that combines:
- Navigation bar (always visible)
- Main router content area
- Clean separation of concerns

## 🌐 How Hash-Based Routing Works

### URL Structure
```
Base URL: http://localhost:5173/
Route examples:
- Home:    http://localhost:5173/#
- About:   http://localhost:5173/#about
- Contact: http://localhost:5173/#contact
```

### Route Change Flow
```
User clicks link → Hash changes → hashchange event fires → Router updates state → Page re-renders
```

### Browser Events
The router listens to the native browser `hashchange` event:

```javascript
window.addEventListener("hashchange", () => {
  setRoute(getCurrentRoute());
});
```

This approach is:
- ✅ Native to browsers - no library needed
- ✅ Lightweight - minimal code overhead
- ✅ SEO-friendly for hashtag routes (works without server config)
- ✅ Browser history support - back/forward buttons work automatically

## ⚙️ Configuration

### Adding a New Route

1. **Add to `Router.jsx` routes object:**
```javascript
export const routes = {
  home: { path: "#", component: Home, label: "Home" },
  about: { path: "#about", component: About, label: "About" },
  contact: { path: "#contact", component: Contact, label: "Contact" },
  newPage: { path: "#newpage", component: NewPage, label: "New Page" }, // ← Add route
};
```

2. **Create a new component** (e.g., `newpage.jsx`):
```javascript
import React from "react";
import "./newpage.css";

function NewPage() {
  return (
    <div className="newpage">
      <h1>New Page</h1>
      {/* Your content */}
    </div>
  );
}

export default NewPage;
```

3. **Import in Router.jsx:**
```javascript
import NewPage from "./newpage";
```

## 🎯 Advanced Features

### Programmatic Navigation
Navigate without clicking links:

```javascript
import { navigateTo } from "./Router";

// In a component
const handleButtonClick = () => {
  navigateTo("#about");
};
```

### Current Route Detection
Get the active route in any component:

```javascript
import { getCurrentRoute, getRouteByPath } from "./Router";

const activeRoute = getCurrentRoute(); // Returns: "#about"
const routeObj = getRouteByPath(activeRoute); // Returns route object
```

### Active Route Highlighting
Navigation component automatically highlights the active route based on current hash.

## 📊 Comparison with React Router

| Feature | Custom Router | React Router |
|---------|---|---|
| Bundle Size | ~2 KB | ~40+ KB |
| Learning Curve | Low | Medium |
| URL Parameters | Basic | Advanced |
| Nested Routes | Manual | Built-in |
| Lazy Loading | Manual | Built-in |
| History API | ✓ | ✓ |
| Hash-based | ✓ | ✗ (uses History API) |

## 🚀 Tips & Best Practices

1. **Keep routes centralized** - Define all routes in one place for easy maintenance
2. **Use meaningful path names** - `#about` is clearer than `#p1`
3. **Lazy load components** - For large apps, consider dynamic imports:
   ```javascript
   const About = React.lazy(() => import("./about"));
   ```
4. **Handle 404 routes** - Router automatically defaults to Home for unknown routes
5. **Clean up listeners** - Router component removes event listeners on unmount

## 📱 Browser Compatibility

Works on all modern browsers:
- ✓ Chrome 5+
- ✓ Firefox 3.6+
- ✓ Safari 5+
- ✓ Edge 12+
- ✓ iOS Safari 4.2+
- ✓ Android 2.1+

## 🔗 Files Structure

```
src/
├── main.jsx           # Entry point
├── Router.jsx         # Routing logic & utils
├── Navigation.jsx     # Navigation component
├── navigation.css     # Navigation styles
├── index.css          # Global styles
├── home.jsx           # Home page
├── about.jsx          # About page
├── contact.jsx        # Contact page
└── assets/            # Static assets
```

## 📝 Summary

This custom routing implementation provides:
- **Zero dependencies** for routing functionality
- **Fast load times** with minimal JavaScript
- **Easy to understand** and maintain code
- **Full control** over routing behavior
- **Browser-native** event handling

Perfect for small to medium-sized single-page applications!
