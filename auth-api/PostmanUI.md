Awesome! You're looking at the **Postman UI**, and I’ll mentor you step-by-step on how to use it **from scratch** to test your **Node.js Authentication & Authorization API**.

---

## 🧠 POSTMAN BASICS: What You're Looking At

Let's break the UI in your screenshot into key parts:

### 🧩 Key Areas in Postman UI:

| Section                                      | Purpose                                                                                                          |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 🔼 **Method + URL Bar**                      | Choose request type (`GET`, `POST`, etc.) and paste your endpoint like `http://localhost:5000/api/auth/register` |
| 🔧 **Tabs (Params, Auth, Headers, Body...)** | Configure your request (body, headers, token, etc.)                                                              |
| 📬 **Send Button**                           | Fires the request                                                                                                |
| 📤 **Response Section**                      | Displays server response, status code, and time                                                                  |
| 📂 **History**                               | Your past requests (saved automatically)                                                                         |
| 🗃️ **Collections**                          | Save groups of related requests (e.g., "My Auth API")                                                            |
| 🧪 **Tests tab**                             | (Optional) Write JavaScript to test response automatically                                                       |

---

## 🚀 STEP-BY-STEP: Learn by Doing (Mentor Mode)

---

### ✅ STEP 1: Start Your Server

Make sure your project is running:

```bash
npm run dev
```

Output should say something like:

```
Server running on port 5000
```

---

### 🟢 STEP 2: Register User (POST Request)

#### 🔨 Create Request

1. In Postman, select method `POST`
2. Paste URL: `http://localhost:5000/api/auth/register`
3. Click on the **Body tab**
4. Choose `raw` → Select `JSON` from dropdown
5. Paste this JSON:

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
```

6. Click **Send**

#### 🔁 Result

You should get:

```json
{
  "token": "eyJhbGci...",
  "user": {
    "name": "Test User",
    "email": "test@example.com"
  }
}
```

✅ Copy the `token` value.

---

### 🔐 STEP 3: Test Login (POST Request)

Same as Step 2, but change:

* URL: `http://localhost:5000/api/auth/login`
* Body:

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

Click **Send**, and copy the returned token.

---

### 🛡️ STEP 4: Access Protected Route (GET with Token)

1. Change method to `GET`
2. URL: `http://localhost:5000/api/auth/profile`
3. Click **Authorization** tab
4. Type: `Bearer Token`
5. Paste your `token`

Click **Send**

✅ You should now see user profile data.

---

### 🗂️ STEP 5: Save This as a Collection

1. Click “Save” (top right)
2. Create a new Collection → Name: `Auth API`
3. Save each request under this collection (Register, Login, Profile)

Now you’ve built a **reusable collection** of all your API endpoints!

---

## 📚 Learn Postman More Deeply

### 📺 YouTube Playlists (Recommended)

1. 🔗 [Postman Crash Course for Beginners (Traversy Media)](https://www.youtube.com/watch?v=VywxIQ2ZXw4)
2. 🔗 [Postman Tutorial for Beginners (FreeCodeCamp)](https://www.youtube.com/watch?v=RZz8jJvTqVg)

---

### 📘 Topics to Master (in order)

| Topic                    | Description                             |
| ------------------------ | --------------------------------------- |
| 🔹 Basic Requests        | GET, POST, PUT, DELETE                  |
| 🔹 Body Params           | raw (JSON), form-data                   |
| 🔹 Auth Tab              | Bearer token, Basic Auth                |
| 🔹 Headers               | Setting `Content-Type`, `Authorization` |
| 🔹 Collections           | Grouping your API requests              |
| 🔹 Environment Variables | Use `{{base_url}}`, `{{token}}`         |
| 🔹 Tests                 | Basic automated response tests          |
| 🔹 Pre-request Scripts   | For auto token assignment               |

---

