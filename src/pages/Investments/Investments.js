import React from "react";
import {
    InvestmentContainer,
    InvestmentWrapper,
  } from "./InvestmentsElements";
  
function Investments() {
    return (  
        <div className="InvestmentsWrapper" id="investments">
            <InvestmentContainer>
                <InvestmentWrapper>
                    <h1>Investments</h1>
                    <p>*Disclaimer* : I am not a financial advisor. These are my personal investments - not a recommendation to follow. I have done my own due diligance, I recommend you do the same</p>
                    <h5>Stock Portfolio</h5>
                    <p>For obvious reasons, I can't disclose my full portfolio / net assets. However, this is a "degen" account that I use for random short-term and riskier investments</p>

                </InvestmentWrapper>

                <a
                href="https://snowball-analytics.com/public/portfolios/KGchbqyGLg"
                target="_blank"
                rel="noopener noreferrer"
                >
                Portfolio
                </a>
            </InvestmentContainer>
        </div>    
    );
}

export default Investments;
