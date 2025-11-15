# Currency Exchange Feature Implementation Plan

This document outlines the analysis of the `Currency.js` component and the proposed plan for implementing a currency exchange feature.

## 1. Analysis of `src/components/Currency/Currency.js`

The current `Currency.js` component is a stateless functional component that displays a hardcoded list of currencies (`USD`, `EURO`, `POND`, `JPY`).

### Key Observations:
-   **Static Data**: The component uses a hardcoded array of currency objects. The "Price" is always "1.00" and "Rates" are "loading...".
-   **Structure**: The component uses styled-components for layout (`CurrencyStyle`, `CurrencyHeader`, `CurrencyData`).
-   **No State Management**: It does not have any internal state to manage the currency data.
-   **No Data Fetching**: There is no logic to fetch data from an external API.

## 2. Proposed Strategy for API Integration

To implement the currency exchange feature, I propose using a free currency exchange API to fetch real-time exchange rates. A good option is the **ExchangeRate-API** (`https://www.exchangerate-api.com/`).

### Integration Steps:
1.  **API Key**: We will need to sign up for a free API key from ExchangeRate-API. This key will be stored in an environment variable (`.env` file) for security (e.g., `REACT_APP_EXCHANGE_RATE_API_KEY`).
2.  **Data Fetching**: We will use the `useEffect` and `useState` hooks in the `Currency` component to fetch and store the currency data. The `fetch` API or a library like `axios` will be used to make the API request when the component mounts.
3.  **Base Currency**: We will fetch the exchange rates against a base currency, which will be USD by default. The component will be updated to reflect the rates for `EUR`, `GBP` (for Pound), and `JPY` against `USD`.

## 3. Necessary Code Modifications

The following changes will be required in `src/components/Currency/Currency.js`:

1.  **Convert to Statefull Component**: The component will need to be modified to use `useState` and `useEffect` hooks.
2.  **State for Currency Data**: A state variable (e.g., `rates`) will be introduced to store the fetched exchange rates.
3.  **`useEffect` for API Call**: A `useEffect` hook will be added to trigger the API call once the component is rendered.
4.  **API Fetching Logic**: A function will be created to fetch data from the ExchangeRate-API.
5.  **Dynamic Rendering**: The `map` function will be updated to iterate over the fetched data and display the actual exchange rates.
6.  **Error Handling**: Basic error handling will be added to manage potential issues with the API request.
7.  **Loading State**: A loading state will be managed to show a "loading..." message while the data is being fetched and then display the data once it's available.

### Mermaid Diagram of the Proposed Flow:
```mermaid
graph TD
    A[Component Mounts] --> B{useEffect};
    B --> C[Fetch data from ExchangeRate-API];
    C --> D{API call successful?};
    D -- Yes --> E[Update state with exchange rates];
    D -- No --> F[Log error and show error message];
    E --> G[Re-render component with new rates];