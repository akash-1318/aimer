import "./google-search.css";

const GoogleSearch = () => {
  return (
    <form
      action="https://www.google.com/search"
      className="search__main-container"
      method="get"
      name="searchform"
    >
      <input name="sitesearch" type="hidden" />
      <input
        type="text"
        placeholder="Google search"
        className="google__search"
        autoComplete="off"
        name="q"
        required="required"
      />
      <button className="google__btn">
        <i class="bx bxl-google-plus"></i>
      </button>
    </form>
  );
};

export { GoogleSearch };
