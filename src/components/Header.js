import React from "react";

const Header = () => {
  return (
    <div>
      <div className="absolute bg-gradient-to-b from-black mx-9 my-4">
        <img
          className="h-12"
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAdEhm1UzVexHjKqFOP9W6E2UVtkWFvL-vdxIEbTU81rsqNuPmDDy_dQvmQ85ath49JBruVV4aGQA3gY2Dl5SiqFf-AEwPAZBTNkW8FMxGXpDN2mHrf8KlRRiddj1P422ZW1eZkZNWLTd.svg"
          alt="logo"
          aria-hidden="true"
        />
      </div>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4a59f124-030b-417a-9565-8362f395bdb0/web/GB-en-20260914-TRIFECTA-perspective_69186ac8-bdeb-4919-9f99-79eec0026cf8_medium.jpg"
          alt="bg-image"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Header;
