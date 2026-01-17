## 🧋 Bài Test: Xây dựng Store Trà Sữa (`js-test`)

### 🔗 Repository

* **Frontend:**
  [https://github.com/XuanVietK67/StoreTS_XV_FE.git](https://github.com/XuanVietK67/StoreTS_XV_FE.git)
* **Backend:**
  [https://github.com/XuanVietK67/StoreTS.git](https://github.com/XuanVietK67/StoreTS.git)

---

### 🛠️ Công nghệ sử dụng

* **Backend:** NestJS
* **Frontend:** Next.js + Shadcn UI
* **Database:** MongoDB

---

### ▶️ Hướng dẫn chạy dự án

#### 1️⃣ Backend

```bash
git clone https://github.com/XuanVietK67/StoreTS.git
cd StoreTS
npm install
```

* Tạo file `.env`
* Copy nội dung từ `.env.example` sang `.env`

```bash
npm run dev
```

---

#### 2️⃣ Frontend

```bash
git clone https://github.com/XuanVietK67/StoreTS_XV_FE.git
cd StoreTS_XV_FE
npm install
```

* Tạo file `.env`
* Copy nội dung từ `.env-example` sang `.env`

```bash
npm run dev
```

---

### 🧪 Cách test chức năng

* Dự án đã tạo sẵn **data cho store *Yi He Tang***
* Sau khi chạy frontend:

  * Chọn store **Yi He Tang** để xem menu sản phẩm
  * Có thể:

    * 🔍 Search store trong sidebar
    * 🔄 Sắp xếp store theo thứ tự A → Z / Z → A

---

### ✨ Chức năng chính

#### Backend

* Quản lý **Store**, **Product**, **StoreProduct**
* Quan hệ **n-n** giữa Store và Product thông qua bảng trung gian
* API lấy danh sách product theo store kèm phân trang
* **Tối ưu truy vấn bằng index MongoDB**:

  * Index kết hợp `(storeId, productId)`
  * Giúp:

    * Truy vấn nhanh `GET /stores/:storeId/products`
    * Ngăn dữ liệu trùng product trong cùng store
    * Tối ưu hiệu năng khi join và filter dữ liệu lớn

#### Frontend

* Sidebar danh sách store
* Trang chi tiết store hiển thị menu sản phẩm
* Filter sản phẩm theo **topping** (xử lý hoàn toàn ở frontend)
* Sort sản phẩm theo **bảng chữ cái**
* Giao diện xây dựng bằng **Shadcn UI**

---

### 📌 Ghi chú

* Bài test tập trung vào:

  * Thiết kế data model
  * Tối ưu truy vấn backend
  * Cách tổ chức component & state ở frontend

---

## 🖥️ Giao diện demo

### Danh sách sản phẩm & Filter theo topping

**Trạng thái mặc định**
![Store menu default](/docs/images/toppingFilterOff.png)

**Sau khi chọn topping & sắp xếp**
![Store menu filtered](/docs/images/toppingFilterOn.png)

Cảm ơn anh/chị đã dành thời gian review bài test 🙏
