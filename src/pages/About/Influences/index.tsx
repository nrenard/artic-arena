import React from "react";

import influence1 from "assets/influence1.png";
import influence2 from "assets/influence2.png";
import influence1mobile from "assets/influence1mobile.png";
import influence2mobile from "assets/influence2mobile.png";
import SectionTitle from "components/SectionTitle";

import {
  Container,
  Influence,
  SectionTitleContainer,
  SectionTitleMobile,
  InfluecesContainer,
  InfluencesWrapp,
} from "./styles";

const Influences: React.FC = () => {
  return (
    <Container id="section">
      <SectionTitleContainer>
        <SectionTitle>INFLUENCES</SectionTitle>
      </SectionTitleContainer>
      <InfluecesContainer>
        <InfluencesWrapp>
          <Influence>
            <img src={influence1} alt="influence1" className="desk" />
            <div className="mobile">
              <img src={influence1mobile} alt="influence1" />
            </div>
            <div>
              <h3>LEXI</h3>
              <p>
                The globetrotting circular economist
                <br />
                Meet the world’s most creative Brit
                <br />
                Lexi can see things from multiple viewpoints & add a modern
                twist to everything she does.
                <br />
                In Norway, she’s a parsley — she fits in everywhere and is liked
                by everyone.
              </p>
            </div>
          </Influence>
          <Influence>
            <img src={influence2} alt="influence2" className="desk" />
            <div className="mobile">
              <img src={influence2mobile} alt="influence2" />
            </div>
            <div>
              <h3>LIV</h3>
              <p>
                The creative, big picture entrepreneur
                <br />
                Meet the world’s most organised Swede
                <br />
                Liv always reaches for the stars and prides herself in
                inclusion.
                <br />
                In Norway, she’s akin to a potato — can be used anywhere, at any
                time, for anything.
              </p>
            </div>
          </Influence>
        </InfluencesWrapp>
      </InfluecesContainer>
      <SectionTitleMobile>INFLUENCES</SectionTitleMobile>
    </Container>
  );
};

export default Influences;
