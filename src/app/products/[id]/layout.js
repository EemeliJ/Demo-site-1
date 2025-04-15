// app/products/[id]/layout.js

export default function ProductLayout({ children }) {
    return (
      <div>
        <h2>Featured products section</h2>
        {children}
      </div>
    );
  }

  // This is a layout for the products only
  
