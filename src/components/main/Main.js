import "./Main.css";
import Chart from "../charts/Chart";
import AreaChart from "../charts/AreaChart";
import Table from "./../charts/Table";
import Button from "./../Button";

const Main = () => {
  const totalGoal = 100000;
  const currIncome = 60000.54;
  return (
    <main>
      <div className="main__container">
        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="left__block__charts">
            <div className="charts__left" id="progress-chart">
              <div className="charts__left__title">
                <div>
                  <p>Total Income</p>
                  <h1>
                    {currIncome} $ <Button text="+6.9%" />
                  </h1>
                </div>

                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </div>
              <progress id="progress-bar" value={currIncome} max={totalGoal}>
                {(currIncome / totalGoal) * 100}
              </progress>
              <p>Yearly goal</p>
            </div>
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <p>New Users</p>
                  <h1>
                    34.3 %<Button text="+6.9%" />
                  </h1>
                </div>
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </div>
              <Chart />
            </div>
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Balance</h1>
              </div>
              <button>
                Monthly{" "}
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </div>
            <div className="charts__boxes">
              <div className="charts__box">
                <p>Earnings</p>
                <h1>
                  43.41% <Button text="+2.5%" />
                </h1>
              </div>
              <div className="charts__box">
                <p>Sales Value</p>
                <h1>
                  $95,422
                  <Button text="+13.5%" />
                </h1>
              </div>
            </div>

            <AreaChart />
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
        <Table />
      </div>
    </main>
  );
};

export default Main;
