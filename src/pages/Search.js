import Header from "../component/Header";
import Footer from "../component/Footer";

const Search = () => {
  return (
    <>
      <Header />
      <main className="body container">
        <div className="grid list" id="bai-viet">
          <div className="main">
            <div className="search-box">
              <input
                className="search-box-input"
                type="text"
                id="s"
                name="s"
                defaultValue
                placeholder="Tìm kiếm tin tức"
                required
              />{" "}
              <button className="search-box-button flex-jcc" type="submit">
                {" "}
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
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 20.9999L16.65 16.6499"
                    stroke="#4D4D4D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
              </button>{" "}
            </div>
            <h1 className="title-tag">
              Có <strong>0</strong> tin tức, video về <strong>""</strong>
            </h1>
            <div className="filter-row">
              <div className="filter-col">
                {" "}
                <label className="filter-label">Chuyên mục</label>
                <div className="filter-select">
                  {" "}
                  <select
                    className="filter-select-item"
                    name="cateId"
                    id="cateId"
                  >
                    <option value={0}>Tất cả</option>
                    <option value="video">Video</option>
                    <option value={728}>Sự kiện</option>
                    <option value={20}>Xã hội</option>
                    <option value={36}>Thế giới</option>
                    <option value={76}>Kinh doanh</option>
                    <option value={927}>Bất động sản</option>
                    <option value={26}>Thể thao</option>
                    <option value={133}>Việc làm</option>
                    <option value={167}>Nhân ái</option>
                    <option value={7}>Sức khỏe</option>
                    <option value={730}>Văn hóa</option>
                    <option value={23}>Giải trí</option>
                    <option value={111}>Xe ++</option>
                    <option value={119}>Sức mạnh số</option>
                    <option value={25}>Giáo dục</option>
                    <option value={1001}>An sinh</option>
                    <option value={170}>Pháp luật</option>
                    <option value={835}>Du lịch</option>
                    <option value={844}>Đời sống</option>
                    <option value={130}>Tình yêu</option>
                    <option value={135}>Nhịp sống trẻ</option>
                    <option value={894}>Khoa học</option>
                    <option value={702}>Blog</option>
                    <option value={202}>Bạn đọc</option>
                    <option value={1070}>Dmagazine</option>
                    <option value={1096}>Photo Story</option>
                    <option value={1071}>Infographic</option>
                  </select>{" "}
                </div>
              </div>
              <div className="filter-col">
                {" "}
                <label className="filter-label">Thời gian</label>
                <div className="filter-select">
                  {" "}
                  <select className="filter-select-item" name="date" id="date">
                    <option value={0}>Tất cả</option>
                    <option value={1}>Hôm nay</option>
                    <option value={7}>1 Tuần trước</option>
                    <option value={30}>1 Tháng trước</option>
                  </select>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div id="desktop-right-1" className="mdbl" />
            <div id="desktop-right-2" className="mdbl" />
          </div>
        </div>
        <div id="desktop-footer" className="mdbl" />
      </main>

      <Footer />
    </>
  );
};

export default Search;
