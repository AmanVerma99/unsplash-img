import { useGlobalContext } from "./context";

useGlobalContext
const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements);
        const searchValue = e.target.elements.search.value;
        if(!searchValue) return;
        setSearchTerm(searchValue);
    }

    return (
        <section>
            <h1 className="title">Unsplash Image</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" className="form-input search-input" name="search" placeholder="cat" />
                <button type="submit" className="btn">Search</button>
            </form>
        </section>
    );
};

export default SearchForm;
