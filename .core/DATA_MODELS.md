# GuruDev E-Commerce Data Models

## Historical Changes
*Append new structures below.*

### [2026-07-06 10:00:00] Initial Data Models

- **Product**:
  - `id`: string
  - `name`: string
  - `price`: number
  - `description`: string
  - `image`: string
  - `category`: 'blends' | 'whole' | 'powders' | 'specialty'
  - `weight`: string
  - `ingredients`: string[]
  - `spiceLevel`: 1-5
  - `bestseller`: boolean (optional)
  - `new`: boolean (optional)

- **CartItem**:
  - `product`: Product
  - `quantity`: number
