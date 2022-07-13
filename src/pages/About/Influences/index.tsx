import React from "react";

import lexi from "assets/lexi.jpg";
import olle from "assets/olivia.jpg";
import loggan from "assets/logan.jpg";
import martin from "assets/martin.jpg";
import kat from "assets/kat.jpg";
import mia from "assets/mia.jpg";
import tone from "assets/tonet.jpg";
import erik from "assets/erik.jpg";
import SectionTitle from "components/SectionTitle";
import Button from "components/Button";

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
        <SectionTitle>INFLUENCERS</SectionTitle>
      </SectionTitleContainer>
      <InfluecesContainer>
        <InfluencesWrapp>
          <Influence>
            <img src={olle} alt="influence2" className="desk" />
            <div>
              <h3>OLLE (THEY/THEM)</h3>
              <p>CEO and Co-Founder</p>
              <p>
                Meet the world’s most organised Swede. The creative, big picture
                entrepreneur has lived in Svalbard for 10 years. Always reaches
                for the stars and prides themselves in inclusion.
              </p>
              {/* <Button>Hei Liv</Button> */}
            </div>
          </Influence>
          <Influence>
            <img src={lexi} alt="influence1" className="desk" />
            <div>
              <h3>LEXI (SHE/HER)</h3>
              <p>CFO and Co-Founder</p>
              <p>
                Meet the world’s most creative numbers person. This Brit is a
                globetrotting circular economist and can see things from
                multiple viewpoints & add a cool twist to everything she does.
              </p>
              {/* <Button>Hei Lexi</Button> */}
            </div>
          </Influence>
          <Influence>
            <img src={kat} alt="influence4" className="desk" />
            <div>
              <h3>KAT (SHE/HER)</h3>
              <p>Administrative Assistant</p>
              <p>
                My name is Katrine, Kat for short, and I'm from a town to the
                south-east of Norway called Fredrikstad. I am a long-time gamer
                that also loves everything arts & crafts. I keep everything in
                order and support the team with organisational and creative
                skills.
              </p>
              {/* <Button>Hei Liv</Button> */}
            </div>
          </Influence>
          <Influence>
            <img src={loggan} alt="influence3" className="desk" />
            <div>
              <h3>LOGAN (HE/HIM)</h3>
              <p>Creative Assistant</p>
              <p>
                I came from Brazil to help set up the gaming scene in
                Longyearbyen. My hobbies are mostly game and book-related, but I
                love trying out different things. I help create event programmes
                and communications strategies.
              </p>
              {/* <Button>Hei Liv</Button> */}
            </div>
          </Influence>
          <Influence>
            <img src={mia} alt="influence4" className="desk" />
            <div>
              <h3>MIA (SHE/HER)</h3>
              <p>Communications</p>
              <p>
                I live in a small Sami village called Karasjok. The things I
                like to do here are related to outdoor life and gaming. I work
                in social media, inclusivity, and product development.
              </p>
              {/* <Button>Hei Liv</Button> */}
            </div>
          </Influence>
          <Influence>
            <img src={erik} alt="influence4" className="desk" />
            <div>
              <h3>ERIK (HE/HIM)</h3>
              <p>Communications</p>
              <p>
                I am 17 years old and live on Svalbard. My hobbies are gaming
                and driving the snowmobile. My favourite games are mainly car
                sims, but I also play some fps games. I work with social media.
              </p>
              {/* <Button>Hei Liv</Button> */}
            </div>
          </Influence>
          <Influence>
            <img src={tone} alt="influence4" className="desk" />
            <div>
              <h3>TONE (SHE/HER)</h3>
              <p>Event Marketing Coordinator</p>
              <p>
                I'm from Sotra, an island on the west coast of Norway, and have
                always loved playing games. My job is to create events, build
                good relationships with partners and assist with the company's
                marketing.
              </p>
              {/* <Button>Hei Liv</Button> */}
            </div>
          </Influence>
          <Influence>
            <img src={martin} alt="influence4" className="desk" />
            <div>
              <h3>MARTIM (HE/HIM)</h3>
              <p>Social engagement (Consultant) </p>
              <p>
                Currently collaborating with Arctic Arena as a media consultant,
                I engage with the community. I am from a northern city in Norway
                called Tromsø, the Arctic capital. My hobbies are playing video
                games, travelling, and sports.
              </p>
              {/* <Button>Hei Liv</Button> */}
            </div>
          </Influence>
        </InfluencesWrapp>
      </InfluecesContainer>
      <SectionTitleMobile>INFLUENCERS</SectionTitleMobile>
    </Container>
  );
};

export default Influences;
