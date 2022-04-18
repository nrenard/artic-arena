import React from "react";

import { Container, SecondBg, ThirdBg, Image } from "./styles";

interface ImageProps {
  pathImage: string;
  variation1?: boolean;
  variation2?: boolean;
  variation3?: boolean;
  variation4?: boolean;
  variation5?: boolean;
  variation6?: boolean;
}

const ImageWithCustomBorder: React.FC<ImageProps> = ({
  pathImage,
  variation1,
  variation2,
  variation3,
  variation4,
  variation5,
  variation6,
}) => {
  return (
    <Container
      variation3={variation3}
      variation4={variation4}
      variation6={variation6}
    >
      <ThirdBg variation2={variation2}>
        <SecondBg variation1={variation1} variation5={variation5}>
          <Image src={pathImage} />
        </SecondBg>
      </ThirdBg>
    </Container>
  );
};

export default ImageWithCustomBorder;
