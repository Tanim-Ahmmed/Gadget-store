
# Gadget Heaven

## Live Website Link
- [Insert your live website link here]

## Requirement Document Link
- [Insert link to your requirement document here]

## React Fundamental Concepts Used in the Project
- **JSX**: Allows us to write HTML-like syntax in JavaScript files.
- **Components**: The application is built with multiple functional components, such as `Nav`, `Gadgets`, `Home`, and `GadgetDetail`.
- **Props**: Used to pass data between components like the categories and gadgets information.
- **State**: Components manage their own local state using the `useState` hook for dynamic content like gadgets, cart items, etc.
- **Event Handling**: User interactions such as clicks are handled through functions like `handleCart` and `handleWishList`.
- **Conditional Rendering**: The app renders different components or content based on conditions, such as when the category is selected or a product is found.
- **React Router**: The app uses `react-router-dom` for navigating between different pages, like `Home`, `Statistics`, `Dashboard`, and `GadgetDetail`.
- **useContext & Context API**: Used for managing and sharing global state like `cartItem`, `wishItem`, and `category` across components without prop drilling.
- **useEffect**: To fetch data asynchronously when components load, like loading the gadget list and setting the default category.
- **Helmet**: The `react-helmet-async` library is used to manage the document head, updating titles and meta tags for each page.

## Data Management and Handling
- **Context API**: The app uses the Context API to manage global state for cart items, wish list, purchase history, and category selection. It provides state management without prop drilling, making it easier to share data between deeply nested components.
- **Local Storage**: The app can persist data like cart items and wish list items using local storage (if implemented in further code). 

## Features of the Website
1. **Dynamic Gadget Display**: Based on category selection, gadgets are displayed dynamically from a JSON file and filtered based on user preferences.
2. **Product Detail Page**: Each gadget has a detailed page with specifications, ratings, and options to add it to the cart or wish list.
3. **Cart and Wishlist Functionality**: Users can add gadgets to their shopping cart or wish list, and receive notifications about the actions.
4. **Responsive Design**: The website layout adjusts for different screen sizes, ensuring a smooth experience across devices.
5. **Interactive Navigation**: The navigation bar adapts based on the page and provides users with easy access to other sections like `Dashboard`, `Statistics`, and `History`.

