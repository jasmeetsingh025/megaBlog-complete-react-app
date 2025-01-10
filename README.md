# MegaBlog Complete React App

## Description

MegaBlog is a complete blogging application built with React, Vite, and Appwrite. It includes features for user authentication, creating and managing posts, and more.

### Prerequisites

- Node.js
- npm

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/jasmeetsingh025/megaBlog-complete-react-app.git
   cd megablog-complete-react-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a [.env](http://_vscodecontentref_/1) file in the root directory and add your Appwrite credentials:

   ```properties
   VITE_APPWRITE_URL = "https://cloud.appwrite.io/v1"
   VITE_APPWRITE_PROJECT_ID="your_project_id"
   VITE_APPWRITE_DATABASE_ID="your_database_id"
   VITE_APPWRITE_COLLECTION_ID="your_collection_id"
   VITE_APPWRITE_BUCKET_ID="your_bucket_id"
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

To build the project for production, run:

```sh
npm run build
```
