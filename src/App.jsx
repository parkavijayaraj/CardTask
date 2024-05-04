import React from "react";
const App = () => {
  //js part

  const aob = [
    {
      free:"free",
      rate:"$0",
      user: "Single User",
      storage: "5GB Storage",
      public_project: "Unlimited Public Projects",
      access: "Community Access",
      private_project: "Unlimited Private Projects",
      phone_support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      status_report: "Monthly Status Reports",
    },
    {
        free:"plus",
      rate:"$9",
      user: "5 Users",
      storage: "50GB Storage",
      public_project: "Unlimited Public Projects",
      access: "Community Access",
      private_project: "Unlimited Private Projects",
      phone_support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      status_report: "Monthly Status Reports",
    },
    {
        free:"pro",
        rate:"$49",
      user: "Unlimited Users",
      storage: "150GB Storage",
      public_project: "Unlimited Public Projects",
      access: "Community Access",
      private_project: "Unlimited Private Projects",
      phone_support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      status_report: "Monthly Status Reports",
    }];
  return (
    <div>
      {aob.map((element, index) => {
        return (
          <div>
             <div key={index}>
              <div class="container" style={{background:"blue"}}>
                <div class="row">
                  <div>
                    <div class="card h-100">
                        <div class="card-body">
                          <h5 class="card-title text-muted text-uppercase text-center">
                          {element.free}
                          </h5>
                          <h6 class="card-price text-center">
                          {element.rate}<span class="period">/month</span>
                          </h6>
                          <hr />
                        <ul class="fa-ul " style={{paddingTop:"3px"}}>
                          <li>
                            <span class="fa-li">
                              <i class="fas fa-check"></i>
                            </span>
                           {element.user}
                          </li>
                          <li>
                            <span class="fa-li">
                              <i class="fas fa-check"></i>
                            </span>
                            {element.storage}
                          </li>
                          <li>
                            <span class="fa-li">
                              <i class="fas fa-check"></i>
                            </span>
                            {element.public_project}
                          </li>
                          <li>
                            <span class="fa-li">
                              <i class="fas fa-check"></i>
                            </span>
                            {element.access}
                          </li>
                          <li class="text-muted">
                            <span class="fa-li">
                              <i class="fas fa-times"></i>
                            </span>
                          {element.private_project}
                          </li>
                          <li class="text-muted">
                            <span class="fa-li">
                              <i class="fas fa-times"></i>
                            </span>
                           {element.phone_support}
                          </li>
                          <li class="text-muted">
                            <span class="fa-li">
                              <i class="fas fa-times"></i>
                            </span>
                            {element.subdomain}
                          </li>
                          <li class="text-muted">
                            <span class="fa-li">
                              <i class="fas fa-times"></i>
                            </span>
                           {element.status_report}
                          </li>
                        </ul>
                        <div class="d-grid">
                          <a href="#" class="btn btn-primary text-uppercase">
                            Button
                          </a>
                        </div>
                        </div>
                    </div>
                  </div>
                 
                 
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App; //export here then import main.jsx
