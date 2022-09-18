import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowRegister, setIsShowRegister] = useState(false);

  const handleRegister = () => {
    setIsShowRegister(true);
    setIsShowLogin(false);
  };
  const handleLogin = () => {
    setIsShowRegister(false);
    setIsShowLogin(true);
  };
  return (
    <div>
      <div data-module="google-one-tap" />
      <div id="bannerMasthead" className="ads-masthead">
        <div id="desktop-top-page" className="mdbl_17" />
      </div>
      <header className="header container bg-wrap">
        <div className="header-top flex-jcb">
          <div className="header-logo flex-jcc">
            {" "}
            <a href="/">
              {" "}
              <img
                loading="lazy"
                width={160}
                height={39}
                alt="Báo điện tử Dân trí - Tin tức cập nhật liên tục 24/7"
                src="https://cdnweb.dantri.com.vn/dist/static-logo.1-0-1.329fb29fe0ea34cca545.svg"
              />{" "}
            </a>
          </div>
          <div className="header-area flex-jcb">
            {" "}
            <a
              className="international flex-jcc"
              href="http://dtinews.vn/Default.aspx?lang=en"
            >
              {" "}
              <img
                loading="lazy"
                width={26}
                height={26}
                src="https://cdnweb.dantri.com.vn/dist/static-avatar-default.1-0-1.b474c6ca2d1abee5b89b.png"
              />
              International Version{" "}
            </a>
            <div
              data-module="weather-header"
              data-date_time_today="Thứ 3, 09/08/2022"
              className="weather"
            />
            <div data-module="authen-header" />{" "}
            <button
              type="button"
              onClick={() => setIsShowLogin(true)}
              className="header-account flex-jcc"
            >
              Đăng nhập
              <svg
                aria-hidden="true"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Link className="search-link" to="/tim-kiem">
     
              <svg
                aria-hidden="true"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 20.9999L16.65 16.6499"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
            </Link>
          </div>
        </div>
      </header>
      <nav className="menu container bg-wrap">
        <ol className="menu-wrap">
          <li className="home">
            {" "}
            <a href="/">
              {" "}
              <svg
                aria-hidden="true"
                width={28}
                height={28}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7334 22.6665H15.2667C14.9353 22.6665 14.6667 22.3979 14.6667 22.0665V19.2665C14.6667 18.9351 14.9353 18.6665 15.2667 18.6665H16.7334C17.0647 18.6665 17.3334 18.9351 17.3334 19.2665V22.0665C17.3334 22.3979 17.0647 22.6665 16.7334 22.6665Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12.6665L16 5.33317L28 12.6665"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.3334 17.3335V26.0668C25.3334 26.3982 25.0647 26.6668 24.7334 26.6668H7.26669C6.93532 26.6668 6.66669 26.3982 6.66669 26.0668V17.3335"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/video-page.htm">Video</a>{" "}
          </li>
          <li className="active">
            {" "}
            <a href="/su-kien.htm">Sự kiện</a>{" "}
          </li>
          <li className="has-child">
            {" "}
            <a href="/xa-hoi.htm">Xã hội</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/xa-hoi/chinh-tri.htm">Chính trị</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/xa-hoi/hoc-tap-bac.htm">Học tập Bác</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/xa-hoi/moi-truong.htm">Môi trường</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/xa-hoi/giao-thong.htm">Giao thông</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/xa-hoi/nong-tren-mang.htm">Nóng trên mạng</a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/the-gioi.htm">Thế giới</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/the-gioi/quan-su.htm">Quân sự</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/the-gioi/ho-so-phan-tich.htm">
                  Hồ sơ - Phân tích
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/the-gioi/the-gioi-do-day.htm">Thế giới đó đây</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/the-gioi/kieu-bao.htm">Kiều bào</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/the-gioi/cang-thang-nga-ukraine.htm">
                  Căng thẳng Nga - Ukraine
                </a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/kinh-doanh.htm">Kinh doanh</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/kinh-doanh/tai-chinh.htm">Tài chính</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/kinh-doanh/chung-khoan.htm">Chứng khoán</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/kinh-doanh/doanh-nghiep.htm">Doanh nghiệp</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/kinh-doanh/khoi-nghiep.htm">Khởi nghiệp</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/kinh-doanh/tieu-dung.htm">Tiêu dùng</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/kinh-doanh/amaccao-doanh-nghiep-tien-phong.htm">
                  Amaccao - Doanh nghiệp tiên phong
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/kinh-doanh/thanh-toan-thong-minh.htm">
                  Thanh toán thông minh
                </a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/bat-dong-san.htm">Bất động sản</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/bat-dong-san/du-an.htm">Dự án</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/bat-dong-san/thi-truong.htm">Thị trường</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/bat-dong-san/nha-dat.htm">Nhà đất</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/bat-dong-san/nhip-song-do-thi.htm">
                  Nhịp sống đô thị
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/bat-dong-san/song-xanh.htm">Sống xanh</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/bat-dong-san/noi-that.htm">Nội thất</a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/the-thao.htm">Thể thao</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/the-thao/bong-da-trong-nuoc.htm">
                  Bóng đá trong nước
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/the-thao/bong-da-chau-au.htm">Bóng đá Châu Âu</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/the-thao/tennis.htm">Tennis</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/the-thao/golf.htm">Golf</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/the-thao/vo-thuat.htm">Võ thuật</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/the-thao/cac-mon-the-thao-khac.htm">
                  Các môn Thể thao khác
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/the-thao/hau-truong.htm">Hậu trường</a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/lao-dong-viec-lam.htm">Việc làm</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/lao-dong-viec-lam/chinh-sach.htm">Chính sách</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/lao-dong-viec-lam/viec-lam.htm">Việc làm</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/lao-dong-viec-lam/dua-nghi-quyet-68-vao-cuoc-song.htm">
                  Đưa nghị quyết 68 vào cuộc sống
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/lao-dong-viec-lam/xuat-khau-lao-dong.htm">
                  Xuất khẩu lao động
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/lao-dong-viec-lam/chung-toi-noi.htm">
                  Chúng tôi nói
                </a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/tam-long-nhan-ai.htm">Nhân ái</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/tam-long-nhan-ai/danh-sach-ung-ho.htm">
                  Danh sách ủng hộ
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/tam-long-nhan-ai/danh-sach-ket-chuyen.htm">
                  Danh sách kết chuyển
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/tam-long-nhan-ai/hoan-canh.htm">Hoàn cảnh</a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/suc-khoe.htm">Sức khỏe</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/suc-khoe/ung-thu.htm">Ung thư</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/suc-khoe/song-khoe.htm">Sống khỏe</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/suc-khoe/kien-thuc-gioi-tinh.htm">
                  Kiến thức giới tính
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/suc-khoe/tu-van.htm">Tư vấn</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/suc-khoe/khoe-dep.htm">Khỏe đẹp</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/suc-khoe/dich-vu-y-te-quoc-te.htm">
                  Dịch vụ y tế quốc tế
                </a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/van-hoa.htm">Văn hóa</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/van-hoa/doi-song-van-hoa.htm">
                  Đời sống văn hóa
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/van-hoa/dien-anh.htm">Điện ảnh</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/van-hoa/am-nhac.htm">Âm nhạc</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/van-hoa/van-hoc.htm">Văn học</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/van-hoa/hat-giong-tam-hon.htm">
                  Hạt giống tâm hồn
                </a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/giai-tri.htm">Giải trí</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/giai-tri/hau-truong.htm">Hậu trường</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/giai-tri/thoi-trang.htm">Thời trang</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/giai-tri/tvshow.htm">TVshow</a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/o-to-xe-may.htm">Xe ++</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/o-to-xe-may/thi-truong-xe.htm">Thị trường xe</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/o-to-xe-may/xe-dien.htm">Xe điện</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/o-to-xe-may/danh-gia.htm">Đánh giá</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/o-to-xe-may/cong-dong-xe.htm">Cộng đồng xe</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/o-to-xe-may/kinh-nghiem-tu-van.htm">
                  Kinh nghiệm - Tư vấn
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://dantri.com.vn/o-to-xe-may/bang-gia-o-to.htm">
                  Bảng giá ô tô
                </a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/suc-manh-so.htm">Sức mạnh số</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/suc-manh-so/san-pham.htm">Sản phẩm</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/suc-manh-so/di-dong-vien-thong.htm">
                  Di động - Viễn thông
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/suc-manh-so/phan-mem-bao-mat.htm">
                  Phần mềm - Bảo mật
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/suc-manh-so/cong-dong-mang.htm">
                  Cộng đồng mạng
                </a>{" "}
              </li>
            </ol>
          </li>
          <li className="has-child">
            {" "}
            <a href="/giao-duc-huong-nghiep.htm">Giáo dục</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/giao-duc-huong-nghiep/goc-phu-huynh.htm">
                  Góc phụ huynh
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/giao-duc-huong-nghiep/khuyen-hoc.htm">
                  Khuyến học
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/giao-duc-huong-nghiep/guong-sang.htm">
                  Gương sáng
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/giao-duc-huong-nghiep/giao-duc-nghe-nghiep.htm">
                  Giáo dục - Nghề nghiệp
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/giao-duc-huong-nghiep/du-hoc.htm">Du học</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/giao-duc-huong-nghiep/tuyen-sinh.htm">
                  Tuyển sinh
                </a>{" "}
              </li>
            </ol>
          </li>
          <li>
            {" "}
            <a href="/an-sinh.htm">An sinh</a>{" "}
          </li>
          <li className="has-child">
            {" "}
            <a href="/phap-luat.htm">Pháp luật</a>
            <ol className="submenu">
              <li>
                {" "}
                <a href="/phap-luat/ho-so-vu-an.htm">Hồ sơ vụ án</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/phap-luat/phap-dinh.htm">Pháp đình</a>{" "}
              </li>
            </ol>
          </li>
          <li className="menu-more">
            {" "}
            <svg
              aria-hidden="true"
              className="more"
              width={28}
              height={28}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3333 17.3332C26.0697 17.3332 26.6667 16.7362 26.6667 15.9998C26.6667 15.2635 26.0697 14.6665 25.3333 14.6665C24.597 14.6665 24 15.2635 24 15.9998C24 16.7362 24.597 17.3332 25.3333 17.3332Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17.3332C16.7364 17.3332 17.3333 16.7362 17.3333 15.9998C17.3333 15.2635 16.7364 14.6665 16 14.6665C15.2636 14.6665 14.6667 15.2635 14.6667 15.9998C14.6667 16.7362 15.2636 17.3332 16 17.3332Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66667 17.3332C7.40305 17.3332 8 16.7362 8 15.9998C8 15.2635 7.40305 14.6665 6.66667 14.6665C5.93029 14.6665 5.33334 15.2635 5.33334 15.9998C5.33334 16.7362 5.93029 17.3332 6.66667 17.3332Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            <svg
              aria-hidden="true"
              className="close"
              width={28}
              height={28}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 29.3332C23.3638 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3638 2.6665 16 2.6665C8.63621 2.6665 2.66667 8.63604 2.66667 15.9998C2.66667 23.3636 8.63621 29.3332 16 29.3332Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12L12 20"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12L20 20"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
          </li>
        </ol>
        <div className="nav-full bg-wrap">
          <div className="nf-wrap container">
            <ol className="nf-menu">
              <li>
                {" "}
                <a href="/xa-hoi.htm">Xã hội</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/xa-hoi/chinh-tri.htm">Chính trị</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/xa-hoi/hoc-tap-bac.htm">Học tập Bác</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/xa-hoi/moi-truong.htm">Môi trường</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/xa-hoi/giao-thong.htm">Giao thông</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/xa-hoi/nong-tren-mang.htm">Nóng trên mạng</a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/the-gioi.htm">Thế giới</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/the-gioi/quan-su.htm">Quân sự</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/the-gioi/ho-so-phan-tich.htm">
                      Hồ sơ - Phân tích
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/the-gioi/the-gioi-do-day.htm">
                      Thế giới đó đây
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/the-gioi/kieu-bao.htm">Kiều bào</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/the-gioi/cang-thang-nga-ukraine.htm">
                      Căng thẳng Nga - Ukraine
                    </a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/kinh-doanh.htm">Kinh doanh</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/kinh-doanh/tai-chinh.htm">Tài chính</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/kinh-doanh/chung-khoan.htm">Chứng khoán</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/kinh-doanh/doanh-nghiep.htm">Doanh nghiệp</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/kinh-doanh/khoi-nghiep.htm">Khởi nghiệp</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/kinh-doanh/tieu-dung.htm">Tiêu dùng</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/kinh-doanh/amaccao-doanh-nghiep-tien-phong.htm">
                      Amaccao - Doanh nghiệp tiên phong
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/kinh-doanh/thanh-toan-thong-minh.htm">
                      Thanh toán thông minh
                    </a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/bat-dong-san.htm">Bất động sản</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/bat-dong-san/du-an.htm">Dự án</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/bat-dong-san/thi-truong.htm">Thị trường</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/bat-dong-san/nha-dat.htm">Nhà đất</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/bat-dong-san/nhip-song-do-thi.htm">
                      Nhịp sống đô thị
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/bat-dong-san/song-xanh.htm">Sống xanh</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/bat-dong-san/noi-that.htm">Nội thất</a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/the-thao.htm">Thể thao</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/the-thao/bong-da-trong-nuoc.htm">
                      Bóng đá trong nước
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/the-thao/bong-da-chau-au.htm">
                      Bóng đá Châu Âu
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/the-thao/tennis.htm">Tennis</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/the-thao/golf.htm">Golf</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/the-thao/vo-thuat.htm">Võ thuật</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/the-thao/cac-mon-the-thao-khac.htm">
                      Các môn Thể thao khác
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/the-thao/hau-truong.htm">Hậu trường</a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/lao-dong-viec-lam.htm">Việc làm</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/lao-dong-viec-lam/chinh-sach.htm">
                      Chính sách
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/lao-dong-viec-lam/viec-lam.htm">Việc làm</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/lao-dong-viec-lam/dua-nghi-quyet-68-vao-cuoc-song.htm">
                      Đưa nghị quyết 68 vào cuộc sống
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/lao-dong-viec-lam/xuat-khau-lao-dong.htm">
                      Xuất khẩu lao động
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/lao-dong-viec-lam/chung-toi-noi.htm">
                      Chúng tôi nói
                    </a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/tam-long-nhan-ai.htm">Nhân ái</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/tam-long-nhan-ai/danh-sach-ung-ho.htm">
                      Danh sách ủng hộ
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/tam-long-nhan-ai/danh-sach-ket-chuyen.htm">
                      Danh sách kết chuyển
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/tam-long-nhan-ai/hoan-canh.htm">Hoàn cảnh</a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/suc-khoe.htm">Sức khỏe</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/suc-khoe/ung-thu.htm">Ung thư</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/suc-khoe/song-khoe.htm">Sống khỏe</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/suc-khoe/kien-thuc-gioi-tinh.htm">
                      Kiến thức giới tính
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/suc-khoe/tu-van.htm">Tư vấn</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/suc-khoe/khoe-dep.htm">Khỏe đẹp</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/suc-khoe/dich-vu-y-te-quoc-te.htm">
                      Dịch vụ y tế quốc tế
                    </a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/van-hoa.htm">Văn hóa</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/van-hoa/doi-song-van-hoa.htm">
                      Đời sống văn hóa
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/van-hoa/dien-anh.htm">Điện ảnh</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/van-hoa/am-nhac.htm">Âm nhạc</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/van-hoa/van-hoc.htm">Văn học</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/van-hoa/hat-giong-tam-hon.htm">
                      Hạt giống tâm hồn
                    </a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/giai-tri.htm">Giải trí</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/giai-tri/hau-truong.htm">Hậu trường</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/giai-tri/thoi-trang.htm">Thời trang</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/giai-tri/tvshow.htm">TVshow</a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/o-to-xe-may.htm">Xe ++</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/o-to-xe-may/thi-truong-xe.htm">
                      Thị trường xe
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/o-to-xe-may/xe-dien.htm">Xe điện</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/o-to-xe-may/danh-gia.htm">Đánh giá</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/o-to-xe-may/cong-dong-xe.htm">
                      Cộng đồng xe
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/o-to-xe-may/kinh-nghiem-tu-van.htm">
                      Kinh nghiệm - Tư vấn
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="https://dantri.com.vn/o-to-xe-may/bang-gia-o-to.htm">
                      Bảng giá ô tô
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/suc-manh-so.htm">Sức mạnh số</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/suc-manh-so/san-pham.htm">Sản phẩm</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/suc-manh-so/di-dong-vien-thong.htm">
                      Di động - Viễn thông
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/suc-manh-so/phan-mem-bao-mat.htm">
                      Phần mềm - Bảo mật
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/suc-manh-so/cong-dong-mang.htm">
                      Cộng đồng mạng
                    </a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/giao-duc-huong-nghiep.htm">Giáo dục</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/giao-duc-huong-nghiep/goc-phu-huynh.htm">
                      Góc phụ huynh
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/giao-duc-huong-nghiep/khuyen-hoc.htm">
                      Khuyến học
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/giao-duc-huong-nghiep/guong-sang.htm">
                      Gương sáng
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/giao-duc-huong-nghiep/giao-duc-nghe-nghiep.htm">
                      Giáo dục - Nghề nghiệp
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/giao-duc-huong-nghiep/du-hoc.htm">Du học</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/giao-duc-huong-nghiep/tuyen-sinh.htm">
                      Tuyển sinh
                    </a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/an-sinh.htm">An sinh</a>{" "}
              </li>
              <li>
                {" "}
                <a href="/phap-luat.htm">Pháp luật</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/phap-luat/ho-so-vu-an.htm">Hồ sơ vụ án</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/phap-luat/phap-dinh.htm">Pháp đình</a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/du-lich.htm">Du lịch</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/du-lich/tin-tuc.htm">Tin tức</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/du-lich/kham-pha.htm">Khám phá</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/du-lich/mon-ngon-diem-dep.htm">
                      Món ngon - Điểm đẹp
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/du-lich/tour-hay-khuyen-mai.htm">
                      Tour hay - Khuyến mại
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/du-lich/video-anh.htm">Video - Ảnh</a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/doi-song.htm">Đời sống</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/doi-song/cong-dong.htm">Cộng đồng</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/doi-song/nha-dep.htm">Nhà đẹp</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/doi-song/thuong-luu.htm">Thượng lưu</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/doi-song/chuyen-la.htm">Chuyện lạ</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/doi-song/cho-online.htm">Chợ online</a>{" "}
                  </li>
                </ol>
              </li>
              <li>
                {" "}
                <a href="/tinh-yeu-gioi-tinh.htm">Tình yêu</a>
                <ol className="nf-submenu">
                  <li>
                    {" "}
                    <a href="/tinh-yeu-gioi-tinh/chuyen-cua-toi.htm">
                      Chuyện của tôi
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/tinh-yeu-gioi-tinh/gia-dinh.htm">Gia đình</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/tinh-yeu-gioi-tinh/tinh-yeu.htm">Tình yêu</a>{" "}
                  </li>
                </ol>
              </li>
            </ol>
            <div className="nf-sidebar">
              <ol className="nfs-menu">
                <li>
                  {" "}
                  <a className="flex-jcc" href="#">
                    {" "}
                    <img
                      loading="lazy"
                      width={240}
                      height={36}
                      alt
                      src="https://cdnweb.dantri.com.vn/dist/static-ads-240x36.1-0-1.962e3fae7be5aac3ad73.jpg"
                    />
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="uppercase" href="/su-kien.htm">
                    Sự kiện nổi bật
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="uppercase" href="/video-page.htm">
                    Dân trí TV
                  </a>{" "}
                </li>
                <li className="line" />
                <li>
                  {" "}
                  <a href="/dmagazine.htm">DMagazine</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/infographic.htm">Infographic</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/photo-story.htm">Photo Story</a>{" "}
                </li>
                <li className="line" />
                <li>
                  {" "}
                  <a href="/nhip-song-tre.htm">Nhịp sống trẻ</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/khoa-hoc-cong-nghe.htm">Khoa học</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/blog.htm">Blog</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="/ban-doc.htm">Bạn đọc</a>{" "}
                </li>
                <li className="line" />
                <li>
                  {" "}
                  <a className="email" href="mailto:info@dantri.com.vn">
                    {" "}
                    <svg
                      aria-hidden="true"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 3H15C15.825 3 16.5 3.675 16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3C2.175 15 1.5 14.325 1.5 13.5V4.5C1.5 3.675 2.175 3 3 3Z"
                        stroke="#666666"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 4.5L9 9.75L1.5 4.5"
                        stroke="#666666"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>{" "}
                    Gửi thư cho toà soạn{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="headphone" href="tel:0945540303">
                    {" "}
                    <svg
                      aria-hidden="true"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 13.5V9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9V13.5"
                        stroke="#666666"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.75 14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H13.5C13.1022 15.75 12.7206 15.592 12.4393 15.3107C12.158 15.0294 12 14.6478 12 14.25V12C12 11.6022 12.158 11.2206 12.4393 10.9393C12.7206 10.658 13.1022 10.5 13.5 10.5H15.75V14.25ZM2.25 14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H4.5C4.89782 15.75 5.27936 15.592 5.56066 15.3107C5.84196 15.0294 6 14.6478 6 14.25V12C6 11.6022 5.84196 11.2206 5.56066 10.9393C5.27936 10.658 4.89782 10.5 4.5 10.5H2.25V14.25Z"
                        stroke="#666666"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Liên hệ quảng cáo{" "}
                  </a>{" "}
                </li>
              </ol>
              <div className="social flex-jcc">
                {" "}
                <label className="social-label">
                  Theo dõi <b>Dân trí</b>:
                </label>
                <div className="social-list flex-jcc">
                  {" "}
                  <a
                    className="facebook"
                    target="_blank"
                    rel="nofollow"
                    href="https://www.facebook.com/baodantridientu"
                  >
                    Facebook
                  </a>{" "}
                  <a
                    className="youtube"
                    target="_blank"
                    rel="nofollow"
                    href="https://www.youtube.com/channel/UC4t5NcR9V40MB7rQru8AUew"
                  >
                    Youtube
                  </a>{" "}
                  <a
                    className="tiktok"
                    target="_blank"
                    rel="nofollow"
                    href="https://vt.tiktok.com/ZSeAnvhnH/"
                  >
                    Tiktok
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isShowLogin && (
        <div className="auth-wrap active" onClick={() => setIsShowLogin(false)}>
          <div className="auth-overlay" />
          <div className="auth-container ">
            <button type="button" className="auth-close">
              <svg
                aria-hidden="true"
                width={30}
                height={30}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 6L6 26"
                  stroke="#4D4D4D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6 6L26 26"
                  stroke="#4D4D4D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div className="logo flex-jcc">
              <a href="/">
                <img
                  loading="lazy"
                  src="https://cdnweb.dantri.com.vn/dist/c7b827391b2f30b6fbaf.png"
                  alt="Báo điện tử Dân trí - Tin tức cập nhật liên tục 24/7"
                />
              </a>
            </div>
            <div className="auth-nav">
              <button className="active" type="button">
                Đăng nhập
              </button>
              <button className type="button" onClick={handleRegister}>
                Đăng ký
              </button>
            </div>
            <div className="auth-panel">
              <div className="auth-tab">
                <div className="auth-desc">với các tài khoản mạng xã hội</div>
                <div className="auth-social">
                  <button className="google" type="button">
                    Google
                  </button>
                  <button className="facebook" type="button">
                    Facebook
                  </button>
                </div>
                <div className="auth-desc line">
                  <span>hoặc</span>
                </div>
                <form className="auth-form">
                  <div className="auth-control">
                    <label className="auth-label">Email</label>
                    <div className="auth-row">
                      <input
                        className="auth-input "
                        type="email"
                        name="email"
                        placeholder="Email"
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className="auth-control">
                    <label className="auth-label">Mật khẩu</label>
                    <div className="auth-row password">
                      <input
                        className="auth-input "
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        defaultValue
                      />
                      <button type="button" className="auth-view">
                        <svg
                          aria-hidden="true"
                          width={24}
                          height={24}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 15.9977C6 15.9977 9.63636 8.72501 16 8.72501C22.3636 8.72501 26 15.9977 26 15.9977C26 15.9977 22.3636 23.2705 16 23.2705C9.63636 23.2705 6 15.9977 6 15.9977Z"
                            stroke="#808080"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 18.725C17.5062 18.725 18.7273 17.504 18.7273 15.9977C18.7273 14.4915 17.5062 13.2704 16 13.2704C14.4937 13.2704 13.2727 14.4915 13.2727 15.9977C13.2727 17.504 14.4937 18.725 16 18.725Z"
                            stroke="#808080"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="auth-control action">
                    <button type="button" className="auth-forgot">
                      Quên mật khẩu?
                    </button>
                  </div>
                  <div className="auth-control">
                    <button type="submit" className="auth-submit">
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShowRegister && (
        <div
          className="auth-wrap active"
          onClick={() => setIsShowRegister(false)}
        >
          <div className="auth-overlay" />
          <div className="auth-container ">
            <button type="button" className="auth-close">
              <svg
                aria-hidden="true"
                width={30}
                height={30}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 6L6 26"
                  stroke="#4D4D4D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L26 26"
                  stroke="#4D4D4D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="logo flex-jcc">
              <a href="/">
                <img
                  loading="lazy"
                  src="https://cdnweb.dantri.com.vn/dist/c7b827391b2f30b6fbaf.png"
                  alt="Báo điện tử Dân trí - Tin tức cập nhật liên tục 24/7"
                />
              </a>
            </div>
            <div className="auth-nav">
              <button className type="button" onClick={handleLogin}>
                Đăng nhập
              </button>
              <button className="active" type="button">
                Đăng ký
              </button>
            </div>
            <div className="auth-panel">
              <div className="auth-tab">
                <div className="auth-desc mt-24">
                  Hoàn thành đăng ký, và bắt đầu trải nghiệm ngay!
                </div>
                <form className="auth-form">
                  <div className="auth-control">
                    <label className="auth-label">Họ và tên</label>
                    <div className="auth-row">
                      <input
                        className="auth-input "
                        type="text"
                        name="name"
                        placeholder="Họ và tên"
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className="auth-control">
                    <label className="auth-label">Email</label>
                    <div className="auth-row">
                      <input
                        className="auth-input "
                        type="email"
                        name="email"
                        placeholder="Email"
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className="auth-control">
                    <label className="auth-label">Mật khẩu</label>
                    <div className="auth-row password">
                      <input
                        className="auth-input "
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        defaultValue
                      />
                      <button type="button" className="auth-view">
                        <svg
                          aria-hidden="true"
                          width={24}
                          height={24}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 15.9977C6 15.9977 9.63636 8.72501 16 8.72501C22.3636 8.72501 26 15.9977 26 15.9977C26 15.9977 22.3636 23.2705 16 23.2705C9.63636 23.2705 6 15.9977 6 15.9977Z"
                            stroke="#808080"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 18.725C17.5062 18.725 18.7273 17.504 18.7273 15.9977C18.7273 14.4915 17.5062 13.2704 16 13.2704C14.4937 13.2704 13.2727 14.4915 13.2727 15.9977C13.2727 17.504 14.4937 18.725 16 18.725Z"
                            stroke="#808080"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="auth-control term">
                    Bằng cách đăng ký tài khoản, bạn cũng đồng thời chấp nhận
                    mọi{" "}
                    <a href="#">
                      điều kiện về qui định và chính sách của Dân trí
                    </a>
                  </div>
                  <div className="auth-control">
                    <button type="submit" className="auth-submit">
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
