import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../Response.js";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  const { data } = useGoogleSearch(term);

  // const data = Response; MOCK API

  return (
    <div className="search__page">
      <div className="search__page-header">
        <div className="search__page-top">
          <Link to="/">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt=""
              className="search__page-logo"
            />
          </Link>
          <Search hideButtons />
        </div>
        <div className="search__page-header-body">
          <div className="search__page-options">
            <div className="search__page-options-left">
              <div className="search__page-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search__page-option">
                <NewspaperOutlinedIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="search__page-option">
                <ImageOutlinedIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="search__page-option">
                <LocalOfferOutlinedIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="search__page-option">
                <LocationOnOutlinedIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="search__page-option">
                <MoreVertOutlinedIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="search__page-options-right">
              <div className="search__page-option">
                <Link to="/settings">Settings </Link>
              </div>
              <div className="search__page-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="search__page-results">
          <p className="search__page-result-count">
            About {data?.searchInformation.formattedTotalResults} (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="search__page-result">
              <a className="search__page-link" href={item.link}>
                {item.displayLink} <MoreVertOutlinedIcon />
              </a>
              <a href="" className="search__page-result-title">
                <h2>{item.title}</h2>
              </a>
              <p className="search__page-result-snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
