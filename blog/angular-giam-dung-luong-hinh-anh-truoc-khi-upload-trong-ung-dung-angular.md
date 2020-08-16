---
title: Giảm dung lượng hình ảnh trước khi upload trong ứng dụng Angular
description: Trong bài này mình sẽ chia sẻ kinh nghiệm nén hình ảnh để giảm dụng lượng trước khi upload trong ứng dụng Angular.
published: false
keywords: angular, compress image, nen hinh anh, giam dung luong hinh anh
categories: angular
date: 2020-08-12
image: https://nhannguyendacoder.com/assets/images/angular-giam-dung-luong-hinh-anh-truoc-khi-upload-trong-ung-dung-angular/nen-hinh-anh.jpg
---

# Giảm dung lượng hình ảnh trước khi upload trong ứng dụng Angular

![Nén hình ảnh](../assets/images/angular-giam-dung-luong-hinh-anh-truoc-khi-upload-trong-ung-dung-angular/nen-hinh-anh.jpg)

Lúc trước mình có làm website bán hàng cho một người quen của mình bằng Angular. Mọi chuyện đều ổn cho tới một ngày mình vào trang web xem thử thì thấy hình nền trang load khá chậm. Khi mình kiểm tra lại thì mới phát hiện dung lượng của hình nền đang là 6.3 MB!

![Nén hình ảnh](../assets/images/angular-giam-dung-luong-hinh-anh-truoc-khi-upload-trong-ung-dung-angular/load-hinh-anh-dung-luong-lon.png)

Lý do hình có dung lượng lớn như vậy là do ở phần quản lý có chức năng thay đổi hình nền, và người quản trị đã vô tình upload một bức ảnh full HD không che mà không làm giảm dung lượng trước bằng Photoshop hay tinypng.com.

Để hạn chế vấn đề này thì mình nghĩ nên tối ưu dung lượng hình khi upload. Trong các dự án khác mình làm thì sẽ có một media service riêng phụ trách việc upload, tối ưu hình ảnh. Nhưng project này mình viết hoàn toàn bằng Angular và Firebase nên không có media servcie nên mình đã chọn giải pháp là tối ưu hình ảnh ở phía client, trước khi upload lên Firebase. 

[notes paragraph]

[post structure]

[post content]

[conclusion paragraph]

[references links]

