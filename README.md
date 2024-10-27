# Nalu Table

A modern, customizable React table component with built-in themes, pagination, and advanced features. Perfect for creating beautiful and functional data tables in your React applications.

[![NPM Version](https://img.shields.io/npm/v/nalu-table)](https://www.npmjs.com/package/nalu-table)
[![License](https://img.shields.io/npm/l/nalu-table)](https://github.com/WilliamSilvaOliveiraa/nalu-table-component/blob/main/LICENSE)

## Features

- 🎨 Theme variants (Sapphire & Crimson)
- 🌗 Light and dark mode
- 📱 Responsive design
- ⚡ Pagination
- 🔄 Dynamic sorting
- ✨ Row selection
- 📑 Tab system
- 🎯 Custom actions
- 🖼️ Custom logo support

## Installation

### 1. Install the package

```bash
npm install nalu-table
# or
yarn add nalu-table
```

### 2. Tailwind CSS Requirement

This component requires Tailwind CSS to be installed and configured in your project. If you haven't already set up Tailwind CSS, follow these steps:

1. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
# or
yarn add -D tailwindcss postcss autoprefixer
```

2. Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

3. Configure your `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/nalu-table/**/*.{js,jsx}", // Add this line to include nalu-table components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. Add Tailwind's directives to your CSS

```css
/* In your main CSS file */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Start using the component

```jsx
import NaluTable from "nalu-table";
import "nalu-table/dist/style.css"; //Recommended for best visual experience

// Your component code
```

> ⚠️ **Important**: The table component will not be styled correctly if Tailwind CSS is not properly installed and configured in your project.

## Quick Start

```jsx
import NaluTable from "nalu-table";
import "nalu-table/dist/style.css"; //Recommended for best visual experience


function App() {
 const tableData = {
    tabs: [
      { title: 'Tab 1', quantity: 10, checked: true, special: true },
      { title: 'Tab 2', quantity: 20, checked: false }, special: false}
    ],
    tableInfo: {
      columns: [
        { header: 'Name', ref: 'name', alignment: 'left', ordering: true },
        { header: 'Price', ref: 'price', alignment: 'right', ordering: true },
      ],
      items: [
        { id: 1, name: 'Item 1', price: 10.99 },
        { id: 2, name: 'Item 2', price: 20.99 },
      ],
    },
  };

  return (
    <NaluTable
      tableData={tableData}
      header=true
      variant="sapphire"
      theme="light"
    />
  );
}
```

## Props

| Prop              | Type      | Default                      | Description                                         |
| ----------------- | --------- | ---------------------------- | --------------------------------------------------- |
| `tableData`       | `array`   | `[]`                         | **Required.** Array of data to display in the table |
| `header`          | `boolean` | `true`                       | Search header visibility                            |
| `plusButton`      | `boolean` | `true`                       | Custom add button component                         |
| `totalItems`      | `number`  | `0`                          | Total number of items for pagination                |
| `itemsPerPage`    | `number`  | `10`                         | Number of items per page                            |
| `currentPageProp` | `number`  | `1`                          | Current page number                                 |
| `loading`         | `boolean` | `false`                      | Loading state of the table                          |
| `size`            | `string`  | `"default"`                  | Table size variant                                  |
| `variant`         | `string`  | `"sapphire"`                 | Visual variant of the table                         |
| `theme`           | `string`  | `"light"`                    | Color theme (`"light"` or `"dark"`)                 |
| `modalTitle`      | `string`  | `""`                         | Title for the modal                                 |
| `selectedTab`     | `string`  | `""`                         | Currently selected tab                              |
| `activeTab`       | `string`  | `""`                         | Currently active tab                                |
| `brandlogo`       | `string`  | `"https://placehold.co/400"` | URL for the logo image                              |

### Event Handlers

| Prop                    | Type       | Default    | Description                       |
| ----------------------- | ---------- | ---------- | --------------------------------- |
| `addItemFunction`       | `function` | `() => {}` | Handler for adding new items      |
| `viewItemFunction`      | `function` | `() => {}` | Handler for viewing items         |
| `editItemFunction`      | `function` | `() => {}` | Handler for editing items         |
| `removeItemFunction`    | `function` | `() => {}` | Handler for removing items        |
| `handlePageChange`      | `function` | `() => {}` | Handler for page changes          |
| `handleTabChange`       | `function` | `() => {}` | Handler for tab changes           |
| `handleSelectionChange` | `function` | `null`     | Handler for row selection changes |
| `handleSaveTabs`        | `function` | `() => {}` | Handler for saving tab changes    |

## Examples

### Basic Table

```jsx
<NaluTable
  tableData={data}
  header=true
  variant="crimson"
  theme="light"
/>
```

### Table with Custom Actions

```jsx
<NaluTable
  tableData={data}
  header=true
  plusButton={() => console.log('Do something')}
  addItemFunction={() => console.log('Add:', id)}
  editItemFunction={(id) => console.log('Edit:', id)}
  removeItemFunction={(id) => console.log('Remove:', id)}
/>
```

### Paginated Table with Selection

```jsx
<NaluTable
  tableData={data}
  header=true
  totalItems={100}
  itemsPerPage={20}
  handlePageChange={(page) => console.log('Page:', page)}
  handleSelectionChange={(selected) => console.log('Selected:', selected)} // returns an array of items selected in the checkbox
/>
```

### Custom Themed Table

```jsx
<NaluTable
  tableData={data}
  header=true
  variant="sapphire"
  theme="dark"
  brandLogo="path/to/your/logo.png"
/>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [William Silva](https://williamoliveirasilva.online/)
