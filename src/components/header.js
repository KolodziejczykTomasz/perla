import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        backgroundColor: "transparent",
      }}
    >
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <button
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarHeader"
            onClick={() => {
              var burger = document.querySelector(".burger")
              var nav = document.querySelector("#navbarHeader")
              burger.classList.toggle("is-active")
              nav.classList.toggle("is-active")
            }}
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div id="navbarHeader" class="navbar-menu">
          <div class="navbar-start">
            <Link class="navbar-item">Home</Link>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
