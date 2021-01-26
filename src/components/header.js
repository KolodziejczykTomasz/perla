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
      }}
    >
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="Logo brand"
            />
          </Link>

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
            style={{border: 'none', backgroundColor: 'transparent'}}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div id="navbarHeader" class="navbar-menu">
          <div class="navbar-start">
            <Link class="navbar-item">Home</Link>

            <Link class="navbar-item">Documentation</Link>

            <div class="navbar-item has-dropdown is-hoverable">
              <Link class="navbar-link">More</Link>

              <div class="navbar-dropdown">
                <Link class="navbar-item">About</Link>
                <Link class="navbar-item">Jobs</Link>
                <Link class="navbar-item">Contact</Link>
                <hr class="navbar-divider" />
                <Link class="navbar-item">Report an issue</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Documentation</p>
          <p class="subtitle">
            Everything you need to <strong>create a website</strong> with Bulma
          </p>
        </div>
      </section>
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
