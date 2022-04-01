import React from "react";
import qupcakesLogo from "../assets/QupcakesLogo.png"
import queuebitLogo from "../assets/QueuebitsLogo.png"
import queuebitGP from "../assets/QueuebitsGP.png"
import qupcakesGP from "../assets/QupcakesGP.png"

import Layout from "../components/layout";

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};


const HomePage = () => {
  return (
    <Layout>
      <div>
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Welcome to Quantime!
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Select which activity you are / your class is completing:
            </p>
            <br/>
            <table style={{width:"100%", margin:"auto", tableLayout:"fixed"}}>
              <tr>
                <th>
                  <h2>
                  Probability, Superposition, and Measurement
                  </h2>
                 <br/> 
                </th>
                <th>
                  <h2>
                  Quantum Computing Operations
                  </h2>
                 <br/> 
                </th> 
              </tr>
              <tr align="center">
                <th>
                  <img src={queuebitLogo} width="50%"/>
                </th>
                <th>
                  <img src={qupcakesLogo} width="50%"/>
                </th>
              </tr>
              <tr align="center">
                <th>
                  <img src={queuebitGP} width="50%"/>
                  <br/>
                  <NavLink
                    exact
                    activeClassName="font-black text-black"
                    className="hover:text-gray-900"
                    to="/superposition"
                  >
                    <button className="flex px-8 py-2 mx-auto text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">
                      Play
                    </button>
                  </NavLink>
                </th>
                <th>
                  <img src={qupcakesGP} width="50%"/>
                  <br/>
                  <NavLink
                    exact
                    activeClassName="font-black text-black"
                    className="hover:text-gray-900"
                    to="/quantum_operations"
                  >
                    <button className="flex px-8 py-2 mx-auto text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">
                      Play
                    </button>
                  </NavLink>
                </th>
              </tr>
            </table>
        </div>
    </Layout>
  );
};

export default HomePage;
