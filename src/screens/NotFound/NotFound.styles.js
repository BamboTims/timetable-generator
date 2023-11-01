import styled from "styled-components";

const NotFoundBody = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const NotFoundHeading = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: #ed2939;
  line-height: 3rem;
  letter-spacing: 5px;
  font-family: "Tomorrow", sans-serif;
`;

const NotFoundSubHeading = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: grey;
  font-family: "Pixelify Sans", sans-serif;
`;

const NotFoundImage = styled.img`
  height: 30rem;
  width: 30rem;
`;

export { NotFoundBody, NotFoundHeading, NotFoundSubHeading, NotFoundImage };
