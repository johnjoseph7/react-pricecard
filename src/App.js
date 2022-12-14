import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const data = [
    {
      plan: "Free",
      price: 0,
      currency: "$",
      Features: [
        {
          title: "Single User",
          isEnable: true,
        },
        {
          title: "5GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: false,
        },
        {
          title: "Community Access",
          isEnable: false,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: false,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: false,
        },
        {
          title: "Free Subdomain",
          isEnable: false,
        },
        {
          title: "Monthly Stastus Reports",
          isEnable: false,
        },
      ],
    },
    {
      plan: "Pro",
      price: 10,
      currency: "$",
      Features: [
        {
          title: "5 User",
          isEnable: true,
          isBold: true
        },
        {
          title: "50GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          title: "Free Subdomain",
          isEnable: true,
        },
        {
          title: "Monthly Stastus Reports",
          isEnable: false,
        },
      ],
    },
    {
      plan: "Pro",
      price: 40,
      currency: "$",
      Features: [
        {
          title: "Unlimited User",
          isEnable: true,
          isBold: true
        },
        {
          title: "150GB Storage",
          isEnable: true,
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          title: "Community Access",
          isEnable: true,
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          title: "Unlimited Free Subdomain",
          isEnable: true,
        },
        {
          title: "Monthly Stastus Reports",
          isEnable: true,
        },
      ],
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((item) => {
            return <Card item={item}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}
export default App;
