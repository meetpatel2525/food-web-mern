import React from "react";

const AdminFooter = () => {
  return (
    <div>
      <div className="sb-nav-fixed">
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <footer className="py-4 bg-footer mt-auto">
              <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted-1">
                    © 2020 <b>Gambo Supermarket</b>. by{" "}
                    <a href="https://themeforest.net/user/gambolthemes">
                      Gambolthemes
                    </a>
                  </div>
                  <div className="footer-links">
                    <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/privacy_policy.html">
                      Privacy Policy
                    </a>
                    <a href="http://gambolthemes.net/html-items/gambo_supermarket_demo/term_and_conditions.html">
                      Terms &amp; Conditions
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFooter;
